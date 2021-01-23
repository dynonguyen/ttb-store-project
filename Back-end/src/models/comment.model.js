const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  // chủ comment
  author: { name: String, avt: String },
  // Cho sản phẩm nào
  productId: { type: Schema.Types.ObjectId, required: true },
  // thời gian
  time: { type: Date, required: true, default: new Date().getTime() },
  // đánh giá
  rate: { type: Number, enum: [-1, 0, 1, 2, 3, 4] },
  // nội dung
  content: { type: String, trim: true, maxlength: 1000 },
});

const CommentModel = mongoose.model('comment', commentSchema, 'comments');

module.exports = CommentModel;
