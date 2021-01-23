const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keyboardSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // kiểu bàn phím: 0 - thường, 1 - giả cơ, 2 - cơ
  type: {
    type: Number,
    enum: [...Array(3).keys()],
    required: true,
    default: 0,
  },

  // màu bàn phím: 0 - đen, 1 - bạc, 2 - trắng, 3 - hồng, 4 - khác
  color: { type: Number, enum: [...Array(5).keys()], default: 0 },

  // màu led bàn phím: 0 - không led, 1- đơn sắc, 2 - rainbow, 3 - RGB
  ledColor: { type: Number, enum: [...Array(4).keys()], default: 0 },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const KeyboardModel = mongoose.model('keyboard', keyboardSchema, 'keyboards');

module.exports = KeyboardModel;
