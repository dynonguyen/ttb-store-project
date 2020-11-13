const loginApi = require('express').Router();
const loginController = require('../controllers/login.controller');

loginApi.post('/', loginController.postLogin);

module.exports = loginApi;
