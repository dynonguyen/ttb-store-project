const OrderModel = require('../models/order.model');

// api: lấy danh sách đơn hàng
const getOrderList = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const orderList = await OrderModel.find({ owner: userId })
      .populate({ path: 'orderProd', select: 'name' })
      .select('-owner -deliveryAdd -numOfProd -paymentMethod');
    if (orderList) {
      return res.status(200).json({ list: orderList });
    }
    return res.status(200).json({ list: [] });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ list: [] });
  }
};

module.exports = {
  getOrderList,
};
