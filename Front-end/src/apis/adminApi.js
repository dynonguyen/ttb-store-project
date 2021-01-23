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
    const url = ADMIN_API_ENDPOINT + '/products';
    return axiosClient.get(url, {
      params: { type, page, perPage },
    });
  },

  // fn: Xoá 1 sản phẩm (admin page)
  removeProduct: (id) => {
    const url = ADMIN_API_ENDPOINT + '/products/remove';
    return axiosClient.delete(url, { params: { id } });
  },

  // fn: Cập nhật 1 sản phẩm
  updateProduct: (product) => {
    const url = ADMIN_API_ENDPOINT + '/products/update';
    return axiosClient.put(url, product);
  },

  // fn: đăng nhập với quyền admin
  postLogin: (account) => {
    const url = ADMIN_API_ENDPOINT + '/login';
    return axiosClient.post(url, account);
  },

  // fn: lấy danh sách admin user
  getUserAdminList: () => {
    const url = ADMIN_API_ENDPOINT + '/users';
    return axiosClient.get(url);
  },

  // fn: lấy danh sách khách hàng
  getCustomerList: (page = 1) => {
    const url = ADMIN_API_ENDPOINT + '/customer';
    return axiosClient.get(url, { params: page });
  },

  // fn: xoá 1 khách hàng
  delCustomer: (userId) => {
    const url = ADMIN_API_ENDPOINT + '/customer/del';
    return axiosClient.delete(url, { params: { userId } });
  },

  // fn: Lấy danh sách đơn hàng
  getOrderList: () => {
    const url = ADMIN_API_ENDPOINT + '/order';
    return axiosClient.get(url);
  },

  // fn: cập nhật trạng thái đơn hàng
  postUpdateOrderStatus: (id, orderStatus) => {
    const url = ADMIN_API_ENDPOINT + '/order';
    return axiosClient.post(url, { id, orderStatus });
  },
};

export default adminApi;
