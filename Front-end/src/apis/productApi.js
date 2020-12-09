import axiosClient from './axiosClient';

const PRODUCT_API_URL = '/products';

const productApi = {
  // fn: Lấy 1 sản phẩm
  getProduct: (id) => {
    const url = PRODUCT_API_URL + '/' + id;
    return axiosClient.get(url);
  },
};

export default productApi;
