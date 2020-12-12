const express = require('express');
const userApi = express.Router();
const userController = require('../controllers/user.controller');
const passportAuth = require('../middlewares/passport.middleware');

//get  user
userApi.get('/', passportAuth.jwtAuthentication, userController.getUser);

module.exports = userApi;
