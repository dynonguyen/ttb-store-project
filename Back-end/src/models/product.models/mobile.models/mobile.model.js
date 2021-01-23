const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },
  cpu: { type: String, trim: true },
  cameras: {
    before: { type: String, trim: true },
    after: { type: String, trim: true },
  },
  color: { type: String, trim: true },
  displaySize: { type: String, trim: true },
  operating: { type: Number, enum: [0, 1], required: true, default: 0 },
  rom: { type: Number, required: true },
  ram: { type: Number, required: true },
  pin: { type: String, trim: true },
  catalogs: [String],
  details: Schema.Types.ObjectId,
});

const MobileModel = mongoose.model('mobile', mobileSchema, 'mobiles');

module.exports = MobileModel;
