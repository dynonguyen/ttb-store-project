const { Model } = require('mongoose');
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
    const list = await ProductModel.find(query)
      .limit(parseInt(limit))
      .select('-otherInfo -code');
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
    // lấy toàn bộ danh sách cho trang admin
    if (parseInt(page) === -1) {
      const result = await ProductModel.find({}).select('-otherInfo');
      return res.status(200).json({ data: result });
    } else {
      const nSkip = (parseInt(page) - 1) * perPage;
      const numOfProduct = await ProductModel.countDocuments({});
      const result = await ProductModel.find({})
        .skip(nSkip)
        .limit(parseInt(perPage))
        .select('-otherInfo -code');
      return res.status(200).json({ count: numOfProduct, data: result });
    }
  } catch (error) {
    console.error(error);
  }
};

// api: tìm kiếm sản phẩm
const getSearchProducts = async (req, res, next) => {
  try {
    let { value, page, perPage } = req.query;
    const typeList = helpers.typeOfProduct(value);
    const typeQuery = typeList.map((item) => {
      return { type: item };
    });
    // pagination
    if (!page) page = 1;
    if (!perPage) perPage = 8;
    const nSkip = (parseInt(page) - 1) * perPage;

    // query
    let numOfProduct = 0;
    let result = [];
    let query;
    if (typeQuery.length > 0)
      query = {
        $text: { $search: `${value}` },
        $or: typeQuery,
      };
    else
      query = {
        $text: {
          $search: `${value}`,
        },
      };
    // lọc theo điều kiện nếu có
    if (value !== '') {
      numOfProduct = await ProductModel.find(query).countDocuments();
      result = await ProductModel.find(query)
        .skip(nSkip)
        .limit(parseInt(perPage))
        .select('-otherInfo -code');
    } else {
      // trả về tất cả
      numOfProduct = await ProductModel.find({}).countDocuments();
      result = await ProductModel.find({})
        .skip(nSkip)
        .limit(parseInt(perPage))
        .select('-otherInfo -code');
    }

    // return
    if (result) {
      return res.status(200).json({ count: numOfProduct, list: result });
    }
  } catch (error) {
    console.error('Search product error: ', error);
    return res.status(400).json({ count: 0, list: [] });
  }
};

// api: lọc sản phẩm
const getFilterProducts = async (req, res, next) => {
  try {
    // pOption: product query option, dOption: detail query option
    let { type, pOption, dOption, page, perPage } = req.query;
    type = parseInt(type);
    if (type == undefined || !Number.isInteger(type)) type = 0;
    if (pOption == undefined) pOption = '{}';
    if (dOption == undefined) dOption = '{}';

    // convert to object
    let pOptionQuery = helpers.convertObjectContainsRegex(JSON.parse(pOption));
    const dOptionQuery = helpers.convertObjectContainsRegex(
      JSON.parse(dOption),
    );

    // pagination
    if (!page) page = 1;
    if (!perPage) perPage = 8;
    const nSkip = (parseInt(page) - 1) * perPage;

    // get model with type
    const Model = helpers.convertProductType(type);
    // populate query
    const joinQuery = {
      path: 'idProduct',
      match: pOptionQuery,
      select: '-otherInfo -code',
    };
    // query and populate with product model
    let products = await Model.find(dOptionQuery)
      .populate(joinQuery)
      .select('idProduct -_id');

    // giữ lại thuộc tính chung sản phẩm và lọc giá trị null được tạo ra khi populate
    products = products.map((item) => item.idProduct);
    products = products.filter((item) => item !== null);

    // return
    if (products) {
      return res.status(200).json({
        count: products.length,
        list: products.slice(nSkip, parseInt(perPage) + nSkip),
      });
    }
  } catch (error) {
    console.error('GET FILTER PRODUCT ERROR: ', error);
    return res.status(400).json({ error });
  }
};

module.exports = {
  getProduct,
  getProductList,
  getAllProducts,
  getSearchProducts,
  getFilterProducts,
};
