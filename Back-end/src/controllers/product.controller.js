const ProductModel = require('../models/product.models/product.model');

// api: Lấy danh sách sản phẩm theo loại và trang
const getProductListByType = async (req, res, next) => {
  try {
    const { type, page, perPage } = req.query;
    const nSkip = (parseInt(page) - 1) * perPage;
    const numOfProduct = await ProductModel.countDocuments({ type });
    const result = await ProductModel.find({ type })
      .skip(nSkip)
      .limit(parseInt(perPage));
    return res.status(200).json({ count: numOfProduct, data: result });
  } catch (error) {
    throw error;
  }
};

// api: Xoá một sản phẩm
const removeProduct = async (req, res, next) => {
  try {
    const { id } = req.query;
    const response = await ProductModel.deleteOne({ _id: id });
    if (response) {
      return res.status(200).json({ message: 'success' });
    }
  } catch (error) {
    return res.status(409).json({ message: 'Xoá sản phẩm thất bại' });
  }
};

module.exports = {
  getProductListByType,
  removeProduct,
};
