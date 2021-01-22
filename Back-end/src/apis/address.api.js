const addressApi = require('express').Router();
const addressController = require('../controllers/address.controller');

// api: lấy danh sách các tỉnh thành phố
addressApi.get('/province', addressController.getProvince);

// api: lấy danh sách huyện/quận theo id tỉnh
addressApi.get('/district', addressController.getDistrict);

// api: lấy danh sách phường, đường theo id huyện
addressApi.get('/street', addressController.getWardStreetList);

// api: Lấy danh sách địa chỉ nhận hàng
addressApi.get('/delivery', addressController.getDeliveryAddressList);

// api: Thêm địa chỉ nhận hàng
addressApi.post('/delivery', addressController.postAddDeliveryAddress);

// api: Xoá 1 địa chỉ nhận hàng
addressApi.delete('/delivery', addressController.delAddDeliveryAddress);

// api: cài mặc định 1 địa chỉ nhận hàng
addressApi.put('/delivery', addressController.putSetDefaultDeliveryAddress);

module.exports = addressApi;
