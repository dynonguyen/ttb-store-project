const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ramSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // dung lượng tính theo GB
  capacity: {
    type: Number,
    required: true,
    enum: [2, 4, 8, 16, 32, 64],
    default: 4,
  },

  // bus của ram MHz
  bus: {
    type: Number,
    required: true,
    enum: [1600, 2400, 2666, 3000, 3200, 3333, 3600],
    default: 1600,
  },

  // thế hệ RAM, hay loại RAM: 0 - DDR3, 1 - DDR3L, 2 - DDR4
  type: { type: Number, enum: [...Array(3).keys()], default: 0 },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const RamModel = mongoose.model('ram', ramSchema, 'rams');

module.exports = RamModel;
