const helpers = require('../helpers');
const ProductDescModel = require('../models/product.models/description.model');
const ProductModel = require('../models/product.models/product.model');

// api: Lấy 1 sản phẩm theo id
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.query;

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
    console.error(error);
    return res.status(400).json({ message: 'Không thể lấy dữ liệu' });
  }
};

// api: Lấy danh sách sản phẩm liên quan loại hoặc nhãn hiệu
const getProductList = async (req, res, next) => {
  try {
    const { type, brand, limit, id } = req.query;
    let query = {};
    if (type !== -1) query = { type };
    if (brand !== '') query = { $or: [{ ...query }, { brand }] };
    if (id !== '') query = { ...query, _id: { $ne: id } };
    const list = await ProductModel.find(query).limit(parseInt(limit));
    return res.status(200).json({ data: list });
  } catch (error) {
    return res.status(400).json({ message: 'Không thể lấy dữ liệu' });
  }
};

// api: Lấy tất cả sản phẩm và phân trang
const getAllProducts = async (req, res, next) => {
  try {
    let { page, perPage } = req.query;
    if (!page) page = 1;
    if (!perPage) perPage = 8;
    const nSkip = (parseInt(page) - 1) * perPage;
    const numOfProduct = await ProductModel.countDocuments({});
    const result = await ProductModel.find({})
      .skip(nSkip)
      .limit(parseInt(perPage));
    return res.status(200).json({ count: numOfProduct, data: result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getProduct,
  getProductList,
  getAllProducts,
};
