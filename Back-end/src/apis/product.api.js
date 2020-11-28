const productApi = require('express').Router();
const productController = require('../controllers/product.controller');

// api: Lấy danh sách sản phẩm theo trang và loại
productApi.get('/', productController.getProductListByType);

// api: Xoá 1 sản phẩm theo id
productApi.delete('/', productController.removeProduct);

module.exports = productApi;
