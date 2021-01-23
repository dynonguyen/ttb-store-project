const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainboardSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // loại chipset: vd 'Z490'
  chipset: { type: String, trim: true, maxlength: 10 },

  // series mainboard: vd 'KHT'
  series: { type: String, trim: true },

  // loại socket: 0 - 1151-v2, 1 - 1200, 2 - AM4, 3 - 1151, 4 - sTRX
  socketType: { type: Number, enum: [...Array(5).keys()], default: 0 },

  // chuẩn kích thước: 0 - Micro-ATX, 1 - ATX, 2 - Extended-ATX, 3 - Mini-ATX, 4 - XL-ATX
  sizeStd: { type: Number, enum: [...Array(5).keys()], default: 0 },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const MainboardModel = mongoose.model(
  'mainboard',
  mainboardSchema,
  'mainboards',
);

module.exports = MainboardModel;
