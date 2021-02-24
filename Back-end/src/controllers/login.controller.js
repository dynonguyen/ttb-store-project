const AccountModel = require('../models/account.models/account.model');
const mailConfig = require('../configs/mail.config');
const constants = require('../constants');
const bcrypt = require('bcryptjs');
const jwtConfig = require('../configs/jwt.config');
const jwt = require('jsonwebtoken');
const express = require('express');
// fn: đăng nhập local
// Note: login success -> create refresh token -> create jwt -> set cookie client
const postLogin = async (req, res, next) => {
  try {
    const { email, password, keepLogin } = req.body.account;

    // kiểm tra tài khoản có tồn tại không?
    const account = await AccountModel.findOne({ email, authType: 'local' });
    if (!account) {
      return res.status(406).json({ message: 'Tài khoản không tồn tại !' });
    }

    /*
      Kiểm tra số lần đăng nhập
     tránh trường hợp user reload trang để
     đăng nhập tiếp sau khi đn sai quá nhiều
    */
    let { failedLoginTimes } = account;
    if (failedLoginTimes >= constants.MAX_FAILED_LOGIN_TIMES) {
      return res
        .status(401)
        .json({ failedLoginTimes, message: 'Quá số lần đăng nhập sai !' });
    }

    // kiểm tra password
    const isMatch = await bcrypt.compare(password, account.password);

    // ! sai mật khẩu -> thất bại
    if (!isMatch) {
      // tăng số lần đăng nhập thất bại
      ++failedLoginTimes;
      if (failedLoginTimes <= constants.MAX_FAILED_LOGIN_TIMES) {
        await AccountModel.updateOne(
          { _id: account._id },
          { failedLoginTimes },
        );
      } else {
        // gửi thông báo đến mail
        const mail = {
          to: email,
          subject: 'Cảnh báo quá số lần đăng nhập',
          html: mailConfig.htmlWarningLogin(),
        };
        await mailConfig.sendEmail(mail);
      }
      //return error
      return res
        .status(401)
        .json({ failedLoginTimes, message: 'Mật khẩu không đúng !' });
    } else {
      // ! đăng nhập thành công
      // tạo mã refresh token
      const refreshToken = await jwtConfig.encodedToken(
        process.env.JWT_SECRET_REFRESH_KEY,
        { accountId: account._id, keepLogin },
        constants.JWT_REFRESH_EXPIRES_TIME,
      );

      // Note: create JWToken -> send client

      const token = await jwtConfig.encodedToken(process.env.JWT_SECRET_KEY, {
        accountId: account._id,
      });

      // lưu refresh token và đặt số lần đn sai = 0
      await AccountModel.updateOne(
        { _id: account._id },
        { failedLoginTimes: 0, refreshToken },
      );

      if (express().get('env') === 'production') {
        if (token)
          // ! Dyno Heroku không cho set cookie cross domain (#.herokuapp.com)
          // ! Nên ta sẽ lưu nó vào trong localStorage (key=t)
          return res
            .status(200)
            .json({ token, refreshToken, message: 'success' });
      } else {
        //nếu không duy trì đăng nhập thì giữ trạng thái sống token là session
        const expiresIn = keepLogin
          ? new Date(Date.now() + constants.COOKIE_EXPIRES_TIME)
          : 0;
        // ! gửi token lưu vào cookie và chỉ đọc
        res.cookie('access_token', token, {
          httpOnly: true,
          expires: expiresIn,
        });
        return res.status(200).json({ refreshToken, message: 'success' });
      }
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Đăng nhập thất bại. Thử lại', error });
  }
};

// fn: Đăng nhập với google
const postLoginWithGoogle = async (req, res, next) => {
  try {
    // user from middleware passport
    const { user } = req;

    // nếu user có type = local thì báo lỗi
    if (user.authType === 'local') {
      return res.status(401).json({ message: 'Email đã được đăng ký.' });
    }

    // tạo refresh token
    const refreshToken = await jwtConfig.encodedToken(
      process.env.JWT_SECRET_REFRESH_KEY,
      { accountId: user._id, keepLogin: true },
      constants.JWT_REFRESH_EXPIRES_TIME,
    );
    //save refresh token into database
    await AccountModel.updateOne({ _id: user._id }, { refreshToken });

    //create JWToken -> set header -> send client
    const token = await jwtConfig.encodedToken(process.env.JWT_SECRET_KEY, {
      accountId: user._id,
    });

    if (express().get('env') === 'production') {
      if (token)
        return res.status(200).json({ token, refreshToken, success: true });
    } else {
      const expiresIn = new Date(Date.now() + constants.COOKIE_EXPIRES_TIME);
      //set cookie for web browser
      res.cookie('access_token', token, {
        httpOnly: true,
        expires: expiresIn,
      });
      res.status(200).json({ refreshToken, success: true });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Lỗi! Vui lòng thử lại.', error });
  }
};

// fn: check authenticate with jwt -> return isAuth
const getAuth = (req, res, next) => {
  if (res.locals.isAuth) return res.json({ isAuth: res.locals.isAuth });
  return res.json({ isAuth: false });
};

// fn: refresh jwt token
const postRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.body.refresh_token;
    const account = await AccountModel.findOne({ refreshToken });
    if (!account) {
      return res.status(403).json({ message: 'Invalid Token' });
    }
    //verify token
    const decoded = await jwt.verify(
      refreshToken,
      process.env.JWT_SECRET_REFRESH_KEY,
    );
    const { userID, keepLogin } = decoded.sub;
    //create new access_token -> set cookie
    const newAccessToken = await jwtConfig.encodedToken(
      process.env.JWT_SECRET_KEY,
      { userID },
    );
    //cookies expires if no keep Login then 0
    const expiresIn = keepLogin
      ? new Date(Date.now() + constants.COOKIE_EXPIRES_TIME)
      : 0;
    res.cookie('access_token', newAccessToken, {
      httpOnly: true,
      expires: expiresIn,
    });
    res.status(200).json({ refreshToken, success: true });
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized', error });
  }
};

// fn: logout
const postLogout = async (req, res, next) => {
  try {
    let access_token = null;
    if (express().get('env') === 'production') access_token = req.body.token;
    else access_token = req.cookies.access_token;
    const decoded = await jwt.verify(access_token, process.env.JWT_SECRET_KEY);
    const { accountId } = decoded.sub;
    //remove refresh token
    await AccountModel.updateOne({ _id: accountId }, { refreshToken: null });
    //clear cookie client
    res.clearCookie('access_token');
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    return res.status(409).json({ message: 'failed' });
  }
};

module.exports = {
  postLogin,
  postLoginWithGoogle,
  postRefreshToken,
  getAuth,
  postLogout,
};
