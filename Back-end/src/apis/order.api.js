const orderApi = require('express').Router();
const orderController = require('../controllers/order.controller');

// api: lấy danh sách đơn hàng
orderApi.get('/list', orderController.getOrderList);

// api: lấy chi tiết 1 đơn hàng
orderApi.get('/', orderController.getOrderDetails);

module.exports = orderApi;
