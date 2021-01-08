const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webcamSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // chuẩn kết nối: 0 - USB, 1 - USB 2.0
  connectionStd: { type: Number, enum: [0, 1], default: 0 },

  // tốc độ khung hình: 30fps
  frameSpeed: { type: String, trim: true },

  // độ phân giải: 0 - 720, 1 - 1280x720, 2 - 1920x1800
  resolution: { type: Number, enum: [...Array(3).keys()], default: 0 },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const WebcamModel = mongoose.model('webcam', webcamSchema, 'webcams');

module.exports = WebcamModel;
