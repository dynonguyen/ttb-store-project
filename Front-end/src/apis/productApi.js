import axiosClient from './axiosClient';

const PRODUCT_API_URL = '/products';

const productApi = {
  // fn: lấy danh sách sản phẩm theo loại và trang
  getProductListByType: (type = 0, page = 1, perPage = 1) => {
    const url = PRODUCT_API_URL;
    return axiosClient.get(url, {
      params: { type, page, perPage },
    });
  },

  // fn: Xoá 1 sản phẩm
  removeProduct: (id) => {
    const url = PRODUCT_API_URL;
    return axiosClient.delete(url, { params: { id } });
  },
};

export default productApi;
