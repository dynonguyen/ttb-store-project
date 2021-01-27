import axiosClient from './axiosClient';

const STATISTIC_URL_ENDPOINT = '/statistic';

const statisticApi = {
  // api: thống kê doanh thu theo tháng
  getStaMonthlyRevenue: (year = new Date().getFullYear()) => {
    const url = STATISTIC_URL_ENDPOINT + '/monthly-revenue';
    return axiosClient.get(url, { params: { year } });
  },
};

export default statisticApi;
