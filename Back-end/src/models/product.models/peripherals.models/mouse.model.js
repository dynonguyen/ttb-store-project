const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mouseSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // loại chuột: 0 - có dây, 1 - không dây
  type: { type: Number, enum: [0, 1], default: 0 },

  // có led hay không
  isLed: { type: Boolean, default: false },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const MouseModel = mongoose.model('mouse', mouseSchema, 'mouses');

module.exports = MouseModel;
