import axiosClient from './axiosClient';

const LOGIN_API_ENDPOINT = '/login';

const loginApi = {
  // fn: đăng nhập
  postLogin: (account) => {
    const url = LOGIN_API_ENDPOINT;
    return axiosClient.post(url, account);
  },
};

export default loginApi;
