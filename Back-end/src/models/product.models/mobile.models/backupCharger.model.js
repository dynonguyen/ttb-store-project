const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const backupChargerSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // dung lượng tính theo mAh
  capacity: { type: Number, required: true, default: 5000 },

  // khối lượng tính theo g
  weight: { type: Number, default: 0 },

  // số cổng sạc
  numberOfPort: { type: Number, default: 1, max: 8 },

  // màu của sạc
  color: { type: String, trim: true },

  // điện áp, vd { in: '5V/1A', out: '5V/1A, 2A' }
  voltage: { type: String, trim: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const BackupChargerModel = mongoose.model(
  'backupCharger',
  backupChargerSchema,
  'backupChargers',
);

module.exports = BackupChargerModel;
