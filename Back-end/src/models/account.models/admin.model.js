const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  userName: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  fullName: { type: String, required: true, trim: true },
});

const AdminModel = mongoose.model('admin', adminSchema, 'admins');

module.exports = AdminModel;
