const ProductModel = require('../models/product.models/product.model');
const { cloudinary } = require('../configs/cloudinary.config');
const ProductDescModel = require('../models/product.models/description.model');
const constants = require('../constants');
const LaptopModel = require('../models/product.models/computer.models/laptop.model');
const DiskModel = require('../models/product.models/computer.models/disk.model');
const DisplayModel = require('../models/product.models/computer.models/display.model');
const MainboardModel = require('../models/product.models/computer.models/mainboard.model');
const RamModel = require('../models/product.models/computer.models/ram.model');
const MobileModel = require('../models/product.models/mobile.models/mobile.model');
const BackupChargerModel = require('../models/product.models/mobile.models/backupCharger.model');
const KeyboardModel = require('../models/product.models/peripherals.models/keyboard.model');
const HeadphoneModel = require('../models/product.models/peripherals.models/headphone.model');
const MonitorModel = require('../models/product.models/peripherals.models/monitor.model');
const MouseModel = require('../models/product.models/peripherals.models/mouse.model');
const RouterModel = require('../models/product.models/peripherals.models/router.model');
const SpeakerModel = require('../models/product.models/peripherals.models/speaker.model');
const CameraModel = require('../models/product.models/camera.models/camera.model');
const WebcamModel = require('../models/product.models/camera.models/webcam.model');
const helpers = require('../helpers');
const AdminModel = require('../models/account.models/admin.model');
const UserModel = require('../models/account.models/user.model');
const AccountModel = require('../models/account.models/account.model');
const OrderModel = require('../models/order.model');

// fn: upload product avatar to cloudinary
const uploadProductAvt = async (avtFile, productCode) => {
  try {
    const result = await cloudinary.uploader.upload(avtFile, {
      folder: `products/${productCode}`,
    });
    const { secure_url } = result;
    return secure_url;
  } catch (error) {
    throw error;
  }
};

// fn: upload product catalogs to cloudinary
const uploadProductCatalogs = async (catalogs, productCode) => {
  try {
    const urlCatalogs = [];
    for (let item of catalogs) {
      const result = await cloudinary.uploader.upload(item, {
        folder: `products/${productCode}`,
      });
      urlCatalogs.push(result.secure_url);
    }
    return urlCatalogs;
  } catch (error) {
    throw error;
  }
};

// fn: upload product desc photo to cloudinary
const uploadDescProductPhoto = async (desc, productCode) => {
  try {
    let result = [];
    for (let item of desc) {
      const { content, photo } = item;
      const resUpload = await cloudinary.uploader.upload(photo, {
        folder: `products/${productCode}/desc`,
      });
      result.push({ content, photo: resUpload.secure_url });
    }
    return result;
  } catch (error) {
    throw error;
  }
};

// fn: Tạo chi tiết cho một sản phẩm
const createProductDetail = async (type, product) => {
  try {
    switch (type) {
      case constants.PRODUCT_TYPES.LAPTOP: {
        const { chipBrand, processorCount, series, detail, ...rest } = product;
        const cpu = { chipBrand, processorCount, series, detail };
        return await LaptopModel.create({ cpu, ...rest });
      }
      case constants.PRODUCT_TYPES.DISK: {
        const { type } = product;
        let speed = null;
        if (type) {
          const { readSpeed, writeSpeed, ...rest } = product;
          speed = { readSpeed, writeSpeed };
          return await DiskModel.create({ speed, ...rest });
        } else {
          const { rpm, ...rest } = product;
          return await DiskModel.create({ speed: { rpm }, ...rest });
        }
      }
      case constants.PRODUCT_TYPES.DISPLAY:
        return await DisplayModel.create({ ...product });
      case constants.PRODUCT_TYPES.MAIN_BOARD:
        return await MainboardModel.create({ ...product });
      case constants.PRODUCT_TYPES.RAM:
        return await RamModel.create({ ...product });
      case constants.PRODUCT_TYPES.MOBILE: {
        const { afterCamera, beforeCamera, ...rest } = product;
        const cameras = { before: beforeCamera, after: afterCamera };
        return await MobileModel.create({ cameras, ...rest });
      }
      case constants.PRODUCT_TYPES.BACKUP_CHARGER:
        return await BackupChargerModel.create({ ...product });
      case constants.PRODUCT_TYPES.HEADPHONE:
        return await HeadphoneModel.create({ ...product });
      case constants.PRODUCT_TYPES.KEYBOARD:
        return await KeyboardModel.create({ ...product });
      case constants.PRODUCT_TYPES.MONITOR:
        return await MonitorModel.create({ ...product });
      case constants.PRODUCT_TYPES.MOUSE:
        return await MouseModel.create({ ...product });
      case constants.PRODUCT_TYPES.ROUTER:
        return await RouterModel.create({ ...product });
      case constants.PRODUCT_TYPES.SPEAKER:
        return await SpeakerModel.create({ ...product });
      case constants.PRODUCT_TYPES.CAMERA:
        return await CameraModel.create({ ...product });
      case constants.PRODUCT_TYPES.WEBCAM:
        return await WebcamModel.create({ ...product });
      default:
        throw new Error('Loại sản phẩm không hợp lệ');
    }
  } catch (error) {
    throw error;
  }
};

// api: Thêm sản phẩm
const addProduct = async (req, res, next) => {
  try {
    const { product, details, desc } = req.body;

    const { type, avatar, code, ...productRest } = product;
    const { warranty, catalogs, ...detailRest } = details;
    // kiểm tra sản phẩm đã tồn tại hay chưa
    const isExist = await ProductModel.exists({ code });
    if (isExist) {
      return res.status(400).json({ message: 'Mã sản phẩm đã tồn tại !' });
    }
    // upload product avatar to cloudinary
    const avtUrl = await uploadProductAvt(avatar, code);

    // upload ảnh khác của sản phẩm
    const urlCatalogs = await uploadProductCatalogs(catalogs, code);

    // upload ảnh bài viết mô tả
    let productDesc = desc
      ? await uploadDescProductPhoto(desc.detailDesList, code)
      : null;

    //Tạo sản phẩm mới
    const newProduct = await ProductModel.create({
      type,
      code,
      avt: avtUrl,
      ...productRest,
    });

    // Tạo sp thành công thì tạo chi tiết sản phẩm theo từng loại
    if (newProduct) {
      const { _id } = newProduct;
      // Tạo bài viết mô tả
      const newDesc = productDesc
        ? await ProductDescModel.create({
            idProduct: _id,
            title: desc.title,
            desc: productDesc,
          })
        : null;

      // Tạo chi tiết sản phẩm
      const newProductDetail = await createProductDetail(type, {
        idProduct: _id,
        details: newDesc ? newDesc._id : null,
        warranty,
        catalogs: urlCatalogs,
        ...detailRest,
      });

      if (newProductDetail) {
        return res.status(200).json({ message: 'Thêm sản phẩm thành công' });
      }
    }
  } catch (error) {
    return res.status(409).json({ message: 'Lỗi đường truyền, thử lại' });
  }
};

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
    const response = await ProductModel.findById(id).select('type');
    if (response) {
      // xoá sản phẩm
      await ProductModel.deleteOne({ _id: id });
      // xoá bài mô tả sản phẩm
      await ProductDescModel.deleteOne({ idProduct: id });
      const { type } = response;
      // xoá chi tiết sản phẩm
      const Model = helpers.convertProductType(type);
      await Model.deleteOne({ idProduct: id });
    }
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(409).json({ message: 'Xoá sản phẩm thất bại' });
  }
};

// api: Cập nhật sản phẩm
const updateProduct = async (req, res, next) => {
  try {
    const product = req.body;
    const { _id, ...rest } = product;
    const result = await ProductModel.updateOne(
      { _id: product._id },
      { ...rest },
    );
    if (result && result.ok === 1) {
      return res.status(200).json({ message: 'success' });
    }
  } catch (error) {
    console.error(error);
    return res.status(409).json({ message: 'failed' });
  }
};

// api: đăng nhập với admin
const postLogin = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const adminUser = await AdminModel.findOne({ userName, password });
    if (adminUser) {
      return res.status(200).json({ name: adminUser.fullName });
    } else {
      return res.status(400).json({ message: 'failed' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'failed' });
  }
};

// api: lấy danh sách user admin
const getUserAdminList = async (req, res, next) => {
  try {
    const list = await AdminModel.find({}).select('-password');
    if (list) {
      return res.status(200).json({ list });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'failed' });
  }
};

// api: lấy danh sách người dùng
const getCustomerList = async (req, res, next) => {
  try {
    const list = await UserModel.find({}).populate({
      path: 'accountId',
      select: 'email authType -_id',
    });
    return res.status(200).json({ list });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ list: [] });
  }
};

// api: xoá 1 người dùng
const delCustomer = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const customer = await UserModel.findById(userId);
    if (customer) {
      await AccountModel.deleteOne({ _id: customer.accountId });
      await UserModel.deleteOne({ _id: userId });
      return res.status(200).json({});
    }
  } catch (error) {
    return res.status(409).json({});
  }
};

// api: lấy danh sách đơn hàng
const getOrderList = async (req, res, next) => {
  try {
    const list = await OrderModel.find({}).select('-deliveryAdd -note');
    return res.status(200).json({ list });
  } catch (error) {
    console.error(error);
    return res.status(401).json({});
  }
};

// api: cập nhật trạng thái đơn hàng
const postUpdateOrderStatus = async (req, res, next) => {
  try {
    const { id, orderStatus } = req.body;
    const response = await OrderModel.updateOne({ _id: id }, { orderStatus });
    if (response) return res.status(200).json({});
  } catch (error) {
    return res.status(401).json({});
  }
};

module.exports = {
  addProduct,
  getProductListByType,
  removeProduct,
  updateProduct,
  postLogin,
  getUserAdminList,
  getCustomerList,
  delCustomer,
  getOrderList,
  postUpdateOrderStatus,
};
