const loginApi = require('express').Router();
const loginController = require('../controllers/login.controller');

// ! passportAuth middleware để config passport
const passportAuth = require('../middlewares/passport.middleware');
const passport = require('passport');

loginApi.post('/', loginController.postLogin);

loginApi.post(
  '/gg',
  passport.authenticate('google-token', { session: false }),
  loginController.postLoginWithGoogle,
);

module.exports = loginApi;
