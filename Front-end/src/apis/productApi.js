import axiosClient from './axiosClient';

const PRODUCT_API_URL = '/products';

const productApi = {
  // api: Lấy 1 sản phẩm
  getProduct: (id) => {
    const url = PRODUCT_API_URL;
    return axiosClient.get(url, { params: { id } });
  },

  // api: Lấy danh sách sp, type = -1 : all, trừ sản phẩm có id
  getProductList: (type = -1, brand = '', limit = 1, id) => {
    const url = PRODUCT_API_URL + '/list/related';
    return axiosClient.get(url, { params: { type, brand, limit, id } });
  },
};

export default productApi;
