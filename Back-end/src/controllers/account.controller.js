const AccountModel = require('../models/account.models/account.model');
const VerifyModel = require('../models/account.models/verify.model');
const UserModel = require('../models/account.models/user.model');
const mailConfig = require('../configs/mail.config');
const helper = require('../helpers');
const constants = require('../constants');

//fn: Gửi mã xác thực để đăng ký
const postSendVerifyCode = async (req, res, next) => {
  try {
    const { email } = req.body;
    //Kiểm tra tài khoản đã tồn tại hay chưa
    const account = await AccountModel.findOne({ email });

    //nếu tồn tại, thông báo lỗi, return
    if (account) {
      let suffixError =
        account.authType === 'local'
          ? ''
          : `bởi đăng nhập với ${account.authType}`;
      let error = `Email đã được sử dụng ${suffixError} !`;

      if (account) return res.status(400).json({ message: error });
    }

    //cấu hình email sẽ gửi
    const verifyCode = helper.generateVerifyCode(constants.NUMBER_VERIFY_CODE);
    const mail = {
      to: email,
      subject: 'Mã xác thực tạo tài khoản',
      html: mailConfig.htmlSignupAccount(verifyCode),
    };

    //lưu mã vào database để xác thực sau này
    await VerifyModel.findOneAndDelete({ email });
    await VerifyModel.create({
      code: verifyCode,
      email,
      dateCreated: Date.now(),
    });

    //gửi mail
    const result = await mailConfig.sendEmail(mail);

    //if success
    if (result) {
      return res.status(200).json({ message: 'success' });
    }
  } catch (error) {
    return res.status(400).json({
      message: 'Account Creation Failed.',
      error,
    });
  }
};

//fn: Đăng ký tài khoản
const postSignUp = async (req, res, next) => {
  try {
    const {
      email,
      verifyCode,
      password,
      fullName,
      birthday,
      gender,
      address,
    } = req.body.account;

    //Kiểm tra tài khoản đã tồn tại hay chưa
    const account = await AccountModel.findOne({ email });

    //nếu tồn tại, thông báo lỗi, return
    if (account) {
      let suffixError =
        account.authType === 'local'
          ? ''
          : `bởi đăng nhập với ${account.authType}`;
      let error = `Email đã được sử dụng ${suffixError} !`;

      if (account) return res.status(400).json({ message: error });
    }

    // kiểm tra mã xác thực
    const isVerify = await helper.isVerifyEmail(email, verifyCode);
    if (!isVerify) {
      return res.status(400).json({ message: 'Mã xác nhận không hợp lệ !' });
    }

    // Tạo tạo tài khoản và user tương ứng
    const newAcc = await AccountModel.create({
      email,
      password,
      authType: 'local',
    });
    if (newAcc) {
      await UserModel.create({
        accountId: newAcc._id,
        fullName,
        gender,
        birthday,
        address,
      });
      // xoá mã xác nhận
      await VerifyModel.deleteOne({ email });
    }
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(400).json({
      message: 'Account Creation Failed.',
      error,
    });
  }
};

module.exports = {
  postSendVerifyCode,
  postSignUp,
};
