const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// @ chưa tách ra, tìm cách lưu như lưu 1 bài blog để nhúng React sau
const descriptionSchema = new Schema({
  // chứa nội dung mô tả, có thể là file html
  content: { type: String, trim: true },
});

const DescriptionModel = mongoose.model(
  'description',
  descriptionSchema,
  'descriptions',
);

module.exports = DescriptionModel;
