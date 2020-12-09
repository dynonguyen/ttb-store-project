const adminApi = require('express').Router();
const adminController = require('../controllers/admin.controller');

// api: Lấy danh sách sản phẩm theo trang và loại
adminApi.get('/', adminController.getProductListByType);

// api: Xoá 1 sản phẩm theo id
adminApi.delete('/', adminController.removeProduct);

// api: thêm 1 sản phẩm
adminApi.post('/products/add', adminController.addProduct);

module.exports = adminApi;
