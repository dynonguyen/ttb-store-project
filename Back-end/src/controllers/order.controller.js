const OrderModel = require('../models/order.model');
const helpers = require('../helpers');

// api: lấy danh sách đơn hàng
const getOrderList = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const orderList = await OrderModel.find({ owner: userId }).select(
      '-owner -deliveryAdd -paymentMethod -note',
    );
    if (orderList) {
      return res.status(200).json({ list: orderList });
    }
    return res.status(200).json({ list: [] });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ list: [] });
  }
};

// api: lấy chi tiết 1 đơn hàng
const getOrderDetails = async (req, res, next) => {
  try {
    const { orderId } = req.query;
    const order = await OrderModel.findById(orderId).select('-_id -owner');
    if (order) {
      const { deliveryAdd } = order;
      const { name, phone, address } = deliveryAdd;
      const addressStr = await helpers.convertAddress(address);
      let newOrder = {
        ...order._doc,
        deliveryAdd: { name, phone, address: addressStr },
      };
      return res.status(200).json({ order: newOrder });
    }
    return res.status(400).json({});
  } catch (error) {
    console.error(error);
    return res.status(400).json({});
  }
};

// api: tạo 1 đơn hàng (tách nhiều sản phẩm ra mỗi sp 1 đơn)
const postCreateOrder = async (req, res, next) => {
  try {
    const data = req.body;
    const {
      owner,
      deliveryAdd,
      paymentMethod,
      orderStatus,
      transportMethod,
      transportFee,
      orderDate,
      productList,
      note,
    } = data;

    let response = {};
    for (let i = 0; i < productList.length; ++i) {
      response = await OrderModel.create({
        owner,
        orderCode: helpers.generateVerifyCode(6),
        deliveryAdd,
        paymentMethod,
        orderStatus,
        transportMethod,
        transportFee,
        orderDate,
        orderProd: productList[i].orderProd,
        numOfProd: productList[i].numOfProd,
        note,
      });
    }
    if (response) return res.status(200).json({});
  } catch (error) {
    console.error(error);
    return res.status(401).json({});
  }
};

module.exports = {
  getOrderList,
  getOrderDetails,
  postCreateOrder,
};
