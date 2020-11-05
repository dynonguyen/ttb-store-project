const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// @ Chưa hoàn thành, chờ hoá đơn, chương trình khuyến mãi...
const userSchema = new Schema({
  // id liên kết với account của user này
  accountId: { type: Schema.Types.ObjectId, required: true },
  historyPays: [Object],
  discount: [Object],
});

const UserModel = mongoose.model('user', userSchema, 'users');

module.exports = UserModel;
