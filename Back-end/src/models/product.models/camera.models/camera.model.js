const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cameraSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // khẩu dộ: 'f/4-5.6 IS STM'
  aperture: { type: String, trim: true },

  // tiêu cự tính theo mm
  focalLength: { type: String, trim: true },

  // cảm biến: 'CMOS APS-C 24.2MP'
  sensor: { type: String, trim: true },

  // số điểm ảnh
  numberOfPixel: { type: Number, default: 24.2 },

  // độ phần giải (có nhiều đpg),
  //vd: 6000 x 4000 (L) 3984 x 2656 (M) 2976 x 1984 (S1) 2400 x 1600 (S2) 6000 x 4000 (RAW)
  resolution: { type: String, trim: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const CameraModel = mongoose.model('camera', cameraSchema, 'cameras');

module.exports = CameraModel;
