import axiosClient from './axiosClient';

const ADMIN_API_ENDPOINT = '/admin';

const adminApi = {
  // fn: thêm sản phẩm
  postAddProduct: (product) => {
    const url = ADMIN_API_ENDPOINT + '/products/add';
    return axiosClient.post(url, product);
  },
  // fn: lấy danh sách sản phẩm theo loại và trang
  getProductListByType: (type = 0, page = 1, perPage = 1) => {
    const url = ADMIN_API_ENDPOINT + '/';
    return axiosClient.get(url, {
      params: { type, page, perPage },
    });
  },

  // fn: Xoá 1 sản phẩm (admin page)
  removeProduct: (id) => {
    const url = ADMIN_API_ENDPOINT;
    return axiosClient.delete(url, { params: { id } });
  },
};

export default adminApi;
