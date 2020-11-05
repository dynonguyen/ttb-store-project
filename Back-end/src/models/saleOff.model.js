const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleOffSchema = new Schema({
  // danh sách sản phẩm khuyến mãi
  productList: {
    type: [
      {
        idProduct: Schema.Types.ObjectId,
        // phần trăm giảm giá theo sản phẩm, vd: 0,6
        discount: { type: Number, max: 1 },
      },
    ],
    required: true,
  },

  // Nội dung chính của đợt giảm giá
  content: { type: String, trim: true, required: true },

  // thời gian bắt đầu và kết thúc
  time: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
});

const SaleOffModel = mongoose.model('saleOff', saleOffSchema, 'saleOffs');

module.exports = SaleOffModel;
