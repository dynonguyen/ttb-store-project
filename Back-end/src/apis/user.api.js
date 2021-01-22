const express = require('express');
const userApi = express.Router();
const userController = require('../controllers/user.controller');
const passportAuth = require('../middlewares/passport.middleware');

// api: get  user
userApi.get('/', passportAuth.jwtAuthentication, userController.getUser);

// api: update user
userApi.put('/update', userController.putUpdateUser);

module.exports = userApi;
