import axiosClient from './axiosClient';

const ADMIN_API_ENDPOINT = '/admin';

const adminApi = {
  // fn: thêm sản phẩm
  postAddProduct: (product) => {
    const url = ADMIN_API_ENDPOINT + '/products/add';
    return axiosClient.post(url, product);
  },
};

export default adminApi;
