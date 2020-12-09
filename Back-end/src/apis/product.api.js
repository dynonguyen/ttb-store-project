const productApi = require('express').Router();
const productController = require('../controllers/product.controller');

// api: Lấy 1 sản phẩm theo id
productApi.get('/:id', productController.getProduct);

module.exports = productApi;
