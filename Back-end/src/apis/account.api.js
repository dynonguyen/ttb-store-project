const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');

// Gửi mã xác nhận để đăng ký tài khoản
accountApi.post('/verify', accountController.postSendVerifyCode);

// Đăng ký tài khoản
accountApi.post('/signup', accountController.postSignUp);

module.exports = accountApi;
