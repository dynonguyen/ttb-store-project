const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routerSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // băng thông: 0 - '2.4 GHz', 1 - '2.4 GHz/5 GHz'
  bandwidth: { type: Number, enum: [0, 1], default: 0 },

  // độ mạnh của ăng ten tính theo dBi
  strong: { type: Number, default: 2 },

  // số cổng kết nối: '1xWAN Gigabit'
  numberOfPort: { type: String, trim: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const RouterModel = mongoose.model('router', routerSchema, 'routers');

module.exports = RouterModel;
