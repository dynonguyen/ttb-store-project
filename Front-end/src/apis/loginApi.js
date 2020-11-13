import axiosClient from './axiosClient';

const LOGIN_API_ENDPOINT = '/login';

const loginApi = {
  // fn: đăng nhập
  postLogin: (account) => {
    const url = LOGIN_API_ENDPOINT;
    return axiosClient.post(url, account);
  },

  // fn: đăng nhập với google
  postLoginWithGoogle: (accessToken) => {
    const url = LOGIN_API_ENDPOINT + '/gg';
    return axiosClient.post(url, accessToken);
  },
};

export default loginApi;
