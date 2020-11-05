const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// @ lưu thông tin đơn hàng, chờ user model
const orderSchema = new Schema({});

const OrderModel = mongoose.model('order', orderSchema, 'orders');

module.exports = OrderModel;
