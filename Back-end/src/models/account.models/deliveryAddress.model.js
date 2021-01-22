const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliveryAddressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  list: {
    type: Array,
    // tên người nhận
    name: { type: String, required: true, trim: true, maxLength: 40 },
    phone: { type: String, required: true, trim: true, maxLength: 10 },
    // địa chỉ
    address: {
      type: Object,
      required: true,
      province: String,
      district: String,
      wards: String,
      street: String,
      details: { type: String, default: '' },
    },
  },
});

const DeliveryAddressModel = mongoose.model(
  'deliveryAddress',
  deliveryAddressSchema,
  'deliveryAddresses',
);

module.exports = DeliveryAddressModel;
