const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verifySchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Number,
    required: true,
  },
});

const VerifyModel = mongoose.model('verify', verifySchema, 'verifies');

module.exports = VerifyModel;
