import axiosClient from './axiosClient';

const ADDRESS_API_ENDPOINT = '/address';

const addressApi = {
  // api: lấy danh sách các tỉnh thành
  getProvince: () => {
    const url = ADDRESS_API_ENDPOINT + '/province';
    return axiosClient.get(url);
  },

  // api: lấy danh sách huyện/quận theo id tỉnh
  getDistrict: (provinceId) => {
    const url = ADDRESS_API_ENDPOINT + '/district';
    return axiosClient.get(url, { params: { id: provinceId } });
  },

  // api: lấy danh sách huyện/quận theo id tỉnh
  getWardStreetList: (provinceId, districtId) => {
    const url = ADDRESS_API_ENDPOINT + '/street';
    return axiosClient.get(url, {
      params: { id: provinceId, district: districtId },
    });
  },

  // api: Lấy danh sách địa chỉ nhận hàng
  getDeliveryAddressList: (userId) => {
    const url = ADDRESS_API_ENDPOINT + '/delivery';
    return axiosClient.get(url, { params: { userId } });
  },

  // api: Thêm địa chỉ nhận hàng
  postAddDeliveryAddress: (userId, newAddress) => {
    const url = ADDRESS_API_ENDPOINT + '/delivery';
    return axiosClient.post(url, { userId, newAddress });
  },
};

export default addressApi;
