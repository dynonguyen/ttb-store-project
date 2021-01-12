const addressApi = require('express').Router();
const addressController = require('../controllers/address.controller');

// api: lấy danh sách các tỉnh thành phố
addressApi.get('/province', addressController.getProvince);

// api: lấy danh sách huyện/quận theo id tỉnh
addressApi.get('/district', addressController.getDistrict);

// api: lấy danh sách phường, đường theo id huyện
addressApi.get('/street', addressController.getWardStreetList);

module.exports = addressApi;
