const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');

// Gửi mã xác nhận để đăng ký tài khoản
accountApi.post('/verify', accountController.postSendVerifyCode);

// Đăng ký tài khoản
accountApi.post('/signup', accountController.postSignUp);

// Gửi mã xác nhận để lấy lại mật khẩu
accountApi.post('/verify/forgot', accountController.postSendCodeForgotPW);

// reset password
accountApi.post('/reset-pw', accountController.postResetPassword);

module.exports = accountApi;
