const adminApi = require('express').Router();
const adminController = require('../controllers/admin.controller');

// api: Lấy danh sách sản phẩm theo trang và loại
adminApi.get('/products', adminController.getProductListByType);

// api: Xoá 1 sản phẩm theo id
adminApi.delete('/products/remove', adminController.removeProduct);

// api: thêm 1 sản phẩm
adminApi.post('/products/add', adminController.addProduct);

// api: cập nhật 1 sản phẩm
adminApi.put('/products/update', adminController.updateProduct);

module.exports = adminApi;
