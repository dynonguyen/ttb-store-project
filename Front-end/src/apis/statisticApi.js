import axiosClient from './axiosClient';

const STATISTIC_URL_ENDPOINT = '/statistic';

const statisticApi = {
  // api: thống kê doanh thu theo tháng
  getStaMonthlyRevenue: (year = new Date().getFullYear()) => {
    const url = STATISTIC_URL_ENDPOINT + '/monthly-revenue';
    return axiosClient.get(url, { params: { year } });
  },

  // api: thống kê doanh thu theo năm
  getStaAnnualRevenue: (
    startYear = new Date().getFullYear(),
    endYear = new Date().getFullYear(),
  ) => {
    const url = STATISTIC_URL_ENDPOINT + '/annual-revenue';
    return axiosClient.get(url, { params: { startYear, endYear } });
  },

  // api: thống kê đơn hàng tỉnh nào nhiều nhất
  getTopProvinceOrder: () => {
    const url = STATISTIC_URL_ENDPOINT + '/top-order';
    return axiosClient.get(url);
  },
};

export default statisticApi;
