const helpers = require('../helpers');
const ProductDescModel = require('../models/product.models/description.model');
const ProductModel = require('../models/product.models/product.model');

// api: Lấy 1 sản phẩm theo id
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Lấy tổng quan sản phẩm
    const product = await ProductModel.findById(id);

    // Lấy chi tiết sản phẩm theo loại
    const { _id, type } = product;
    const Model = helpers.convertProductType(type);
    const productDetail = await Model.findOne({
      idProduct: product._id,
    }).select('-_id -idProduct -__v -details');

    // Lấy mô tả sản phẩm
    const productDesc = await ProductDescModel.findOne({
      idProduct: _id,
    }).select('-_id -idProduct -__v');

    // Trả về
    return res.status(200).json({ product, productDetail, productDesc });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Không thể lấy dữ liệu' });
  }
};

module.exports = {
  getProduct,
};
