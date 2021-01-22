const orderApi = require('express').Router();
const orderController = require('../controllers/order.controller');

// api: lấy danh sách đơn hàng
orderApi.get('/list', orderController.getOrderList);

module.exports = orderApi;
