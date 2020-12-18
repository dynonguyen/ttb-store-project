const productApi = require('express').Router();
const productController = require('../controllers/product.controller');

// api: Lấy 1 sản phẩm theo id
productApi.get('/', productController.getProduct);

// api: Lấy danh sách sản phẩm liên quan
productApi.get('/list/related', productController.getProductList);

// api: lấy danh sách và phân trang
productApi.get('/all', productController.getAllProducts);

module.exports = productApi;
