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

  // api: Lấy danh sách sản phẩm và phân trang
  getAllProducts: (page = 1, perPage = 8) => {
    const url = PRODUCT_API_URL + '/all';
    return axiosClient.get(url, { params: { page, perPage } });
  },

  // api: tìm kiếm sản phẩm
  getSearchProducts: (value = '', page = 1, perPage = 8) => {
    const url = PRODUCT_API_URL + '/search';
    return axiosClient.get(url, { params: { value, page, perPage } });
  },

  // api: lọc sản phẩm
  getFilterProducts: (
    type = 0,
    pOption = {},
    dOption = {},
    page = 0,
    perPage = 8,
  ) => {
    const url = PRODUCT_API_URL + '/filter';
    RegExp.prototype.toJSON = RegExp.prototype.toString;
    const params = {
      type,
      pOption: JSON.stringify(pOption),
      dOption: JSON.stringify(dOption),
      page,
      perPage,
    };
    return axiosClient.get(url, {
      params,
    });
  },
};

export default productApi;
