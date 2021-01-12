const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Address Collection: Lưu thông tin các tỉnh thành... ở Việt Nam
const addressSchema = new Schema({
  // id tỉnh
  id: { type: String, required: true, unique: true },

  // mã code
  code: { type: String, required: true, trim: true },

  // tên tỉnh, thành phố trực thuộc trung ương
  name: { type: String, required: true, trim: true, unique: true },

  // Mảng các huyện, thị xã
  districts: [
    {
      id: { type: String, required: true, unique: true },
      name: { type: String, required: true, trim: true },
      // Mảng các phường, thị trấn
      wards: [
        {
          id: { type: String, required: true, unique: true },
          name: { type: String, required: true, trim: true },
          // Tiền tố của nó. Ví dụ: Phường
          prefix: { type: String, required: true, trim: true },
        },
      ],
      streets: [
        {
          id: { type: String, required: true, unique: true },
          name: { type: String, required: true, trim: true },
          // Tiền tố của nó. Ví dụ: Đường
          prefix: { type: String, required: true, trim: true },
        },
      ],
    },
  ],
});

const AddressModel = mongoose.model('address', addressSchema, 'addresses');

module.exports = AddressModel;
