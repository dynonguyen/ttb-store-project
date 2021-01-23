const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displaySchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // dung lượng tính theo GB
  capacity: { type: Number, required: true, default: 1 },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // nhà sản xuất chipset: 0 - NVIDIA, 1 - AMD
  manufacturer: { type: Number, enum: [0, 1], default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const DisplayModel = mongoose.model('display', displaySchema, 'displays');

module.exports = DisplayModel;
