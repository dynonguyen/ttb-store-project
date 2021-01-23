const UserModel = require('../models/account.models/user.model');

// api: get user
const getUser = async (req, res, next) => {
  try {
    //if check authentication wrong then return error
    if (!res.locals.isAuth)
      return res
        .status(400)
        .json({ message: 'Không thể lấy thông tin user', error });
    //else get information user -> send client
    const { _id } = req.user;
    const infoUser = await UserModel.findOne({ accountId: _id }).populate({
      path: 'accountId',
      select: 'email -_id',
    });

    //send information user except _id
    const infoUserSend = {
      ...infoUser._doc,
      email: infoUser.accountId.email,
      accountId: null,
    };
    res.status(200).json({ user: infoUserSend });
  } catch (error) {
    res.status(400).json({ message: 'Không thể lấy thông tin user', error });
  }
};

// api: update user
const putUpdateUser = async (req, res, next) => {
  try {
    const { userId, value } = req.body;
    if (await UserModel.exists({ _id: userId })) {
      const response = await UserModel.updateOne({ _id: userId }, { ...value });
      if (response) {
        return res.status(200).json({ message: 'success' });
      }
    } else {
      return res.status(409).json({ message: 'Tài khoản không tồn tại' });
    }
  } catch (error) {
    return res.status(409).json({ message: 'Cập nhật thất bại' });
  }
};

//export
module.exports = {
  getUser,
  putUpdateUser,
};
