const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Note: Lược đồ thông tin chung cho các loại sản phẩm
const productSchema = new Schema({
  // mã sản phẩm, vd: "SKU200500854"
  code: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  type: {
    type: Number,
    required: true,
    default: 0,
  },
  brand: {
    type: { type: Number, require: true },
    name: { type: String, require: true, trim: true },
  },
  avt: {
    type: String,
    required: true,
    trim: true,
  },
  // số lượng sản phẩm tồn kho
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  // đánh giá 1 - 5 sao, tương ứng với index element từ 0 - 4
  rate: {
    type: [Number],
    default: [0, 0, 0, 0, 0],
  },
});

const ProductModel = mongoose.model('product', productSchema, 'products');

module.exports = ProductModel;
