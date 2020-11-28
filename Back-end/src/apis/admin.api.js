const adminApi = require('express').Router();
const adminController = require('../controllers/admin.controller');

adminApi.post('/products/add', adminController.addProduct);

module.exports = adminApi;
