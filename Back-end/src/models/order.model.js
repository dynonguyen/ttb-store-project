const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Note: 1 record đơn hàng chỉ có 1 sản phẩm
const orderSchema = new Schema({
  // chủ đơn hàng
  owner: { type: Schema.Types.ObjectId, required: true, ref: 'user' },

  // địa chỉ giao nhận
  deliveryAdd: {
    name: { type: String, required: true, trim: true, maxLength: 40 },
    phone: { type: String, required: true, trim: true, maxLength: 10 },
    // địa chỉ
    address: {
      type: Object,
      required: true,
      province: String,
      district: String,
      wards: String,
      street: String,
      details: { type: String, default: '' },
    },
  },

  // mã đơn hàng
  orderCode: { type: String, unique: true, required: true },

  // ngày mua
  orderDate: { type: Date, required: true, default: new Date() },

  // sản phẩm lúc mua
  orderProd: {
    id: { type: Schema.Types.ObjectId, required: true, ref: 'product' },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, default: 0 },
    discount: { type: Number, required: true, default: 0 },
  },

  // số lượng
  numOfProd: { type: Number, required: true, default: 1 },

  // trạng thái đơn hàng
  // 0 - Đặt hàng thành công, 1 - TTB đã tiếp nhận, 2 - Đang lấy hàng, 3 - Đóng gói xong
  // 4 - Bàn giao vận chuyển, 5 - Đang vận chuyển, 6 - Giao hàng thành công
  orderStatus: {
    type: Number,
    enum: [...Array(7).keys()],
    required: true,
    default: 0,
  },

  // hình thức thanh toán
  // 0 - thanh toán tiền mặt khi nhận hàng
  // 1 - thanh toán qua VNPay
  paymentMethod: { type: Number, required: true, enum: [0, 1], default: 0 },

  // phí vận chuyển
  transportFee: { type: Number, required: true, default: 0 },

  // hình thức giao hàng
  // 0 - tiêu chuẩn, 1 - tiết kiệm, 2 - nhanh
  transportMethod: {
    type: Number,
    enum: [0, 1, 2],
    required: true,
    default: 0,
  },

  // ghi chú cho đơn hàng
  note: { type: String, trim: true, maxlength: 200 },
});

const OrderModel = mongoose.model('order', orderSchema, 'orders');

module.exports = OrderModel;
