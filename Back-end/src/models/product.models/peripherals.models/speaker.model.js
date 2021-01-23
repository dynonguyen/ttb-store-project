const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const speakerSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // công suất tổng tính theo W
  wattage: { type: Number, default: 3 },

  // loại cổng kết nối
  connectionPort: { type: String, default: '3.5 mm', trim: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const SpeakerModel = mongoose.model('speaker', speakerSchema, 'speakers');

module.exports = SpeakerModel;
