const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliveryAddressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  list: [
    {
      // tên người nhận
      name: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
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
  ],
});

const DeliveryAddressModel = mongoose.model(
  'deliveryAddress',
  deliveryAddressSchema,
  'deliveryAddresses',
);

module.exports = DeliveryAddressModel;
