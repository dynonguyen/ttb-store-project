import axiosClient from './axiosClient';

const ORDER_API_ENDPOINT = '/orders';

const orderApi = {
  // api: lấy danh sách đơn hàng
  getOrderList: (userId) => {
    const url = ORDER_API_ENDPOINT + '/list';
    return axiosClient.get(url, { params: { userId } });
  },

  // api: lấy chi tiết đơn hàng
  getOrderDetails: (orderId) => {
    const url = ORDER_API_ENDPOINT;
    return axiosClient.get(url, { params: { orderId } });
  },

  // api: tạo đơn hàng
  postCreateOrder: (data) => {
    const url = ORDER_API_ENDPOINT;
    return axiosClient.post(url, data);
  },
};

export default orderApi;
