import axiosClient from './axiosClient';

const ORDER_API_ENDPOINT = '/orders';

const orderApi = {
  // api: lấy danh sách đơn hàng
  getOrderList: (userId) => {
    const url = ORDER_API_ENDPOINT + '/list';
    return axiosClient.get(url, { params: { userId } });
  },
};

export default orderApi;
