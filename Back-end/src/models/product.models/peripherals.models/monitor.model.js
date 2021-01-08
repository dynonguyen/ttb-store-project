const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monitorSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // tấm nền màn hình: 0 - IPS, 1 - VA, 2 - TN, 3 - PLS, 4 - MVA, 5 - KHT
  bgPlate: { type: Number, enum: [...Array(6).keys()], default: 0 },

  // độ phân giải: 0 - 1920x1080, 1 - 2560x1440, 3 - 1366x768, 4 - 1600x900
  // 5 - 3840x2160, 6 - 2560x1080, 7 - 3440x1440
  resolution: { type: Number, enum: [...Array(7).keys()], default: 0 },

  // kích thước màn hình theo inch: vd 27.4"
  displaySize: { type: String, trim: true, maxlength: 5 },

  // tần số quét theo Hz
  frequency: { type: Number, default: 60 },

  // các công kết nối, vd: 1 x HDMI, 1 x DVI-D, 1 x VGA/D-sub
  port: { type: String, trim: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const MonitorModel = mongoose.model('monitor', monitorSchema, 'monitors');

module.exports = MonitorModel;
