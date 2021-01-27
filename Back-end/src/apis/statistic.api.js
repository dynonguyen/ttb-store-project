const statisticApi = require('express').Router();
const statisticController = require('../controllers/statistic.controller');

// api: thống kê doanh thu theo tháng
statisticApi.get('/monthly-revenue', statisticController.getStaMonthlyRevenue);

module.exports = statisticApi;
