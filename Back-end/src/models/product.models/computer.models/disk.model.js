const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diskSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // dung lượng tính theo GB
  capacity: { type: Number, required: true, default: 250 },

  // kích thước ổ đĩa.
  // 0 - 2.5", 1 - 3.5", 2 - M.2 2880, 3 - M.2
  size: {
    type: Number,
    enum: [...Array(4).keys()],
    required: true,
    default: 0,
  },

  // kiểu ổ cứng 0 - HDD, 1 - SSD
  type: { type: Number, enum: [0, 1], required: true, default: 0 },

  // chuẩn kết nối
  // 0 - SATA 3, 1 - USB 3.0, 2 - M.2 SATA, 3 - M.2 NVMe
  connectionStd: { type: Number, enum: [...Array(5).keys()], default: 0 },

  // tốc độ của đĩa (HDD thì có rpm)
  speed: {
    // tốc độ đọc tính theo MB/s
    readSpeed: { type: Number, default: 0 },
    // tốc độ ghi tính theo MB/s
    writeSpeed: { type: Number, default: 0 },
    // tốc độ vòng xoay tính theo RPM
    rpm: { type: Number, default: 1500 },
  },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const DiskModel = mongoose.model('disk', diskSchema, 'disks');

module.exports = DiskModel;
