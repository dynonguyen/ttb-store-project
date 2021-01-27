const OrderModel = require('../models/order.model');

// api: thống kê doanh thu theo tháng
const getStaMonthlyRevenue = async (req, res, next) => {
  try {
    const { year } = req.query;
    // lấy danh sách đơn hàng trong năm thống kê (Chỉ lấy đơn hàng đã thanh toán)
    const thisYearOrder = await OrderModel.find({
      orderDate: {
        $gte: new Date(`${year}-01-01`),
        $lte: new Date(`${year}-12-31`),
      },
      orderStatus: 6,
    }).select('-_id orderDate numOfProd transportFee orderProd.price');

    // lấy danh sách đơn hàng năm trước đó
    const lastYearOrder = await OrderModel.find({
      orderDate: {
        $gte: new Date(`${parseInt(year) - 1}-01-01`),
        $lte: new Date(`${parseInt(year) - 1}-12-31`),
      },
      orderStatus: 6,
    }).select('-_id orderDate numOfProd transportFee orderProd.price');

    // kết quả sau thống kê
    let thisYear = [...Array(12).fill(0)],
      lastYear = [...Array(12).fill(0)];

    // thống kê
    if (thisYearOrder) {
      thisYearOrder.forEach((item) => {
        const month = new Date(item.orderDate).getMonth();
        const totalMoney =
          item.orderProd.price * item.numOfProd + item.transportFee;
        thisYear[month] += totalMoney;
      });
    }
    if (lastYearOrder) {
      lastYearOrder.forEach((item) => {
        const month = new Date(item.orderDate).getMonth();
        const totalMoney =
          item.orderProd.price * item.numOfProd + item.transportFee;
        lastYear[month] += totalMoney;
      });
    }

    if (thisYearOrder && lastYearOrder)
      return res.status(200).json({ thisYear, lastYear });
  } catch (error) {
    console.error(error);
    return res.status(400).json({});
  }
};

module.exports = {
  getStaMonthlyRevenue,
};
