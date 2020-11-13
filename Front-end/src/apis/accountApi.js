import axiosClient from './axiosClient';

const ACCOUNT_API_ENDPOINT = '/accounts';

const accountApi = {
  // fn: gửi mã xác nhận
  postSendVerifyCode: (email) => {
    const url = ACCOUNT_API_ENDPOINT + '/verify';
    return axiosClient.post(url, email);
  },
  // fn: đăng ký
  postSignUp: (account) => {
    const url = ACCOUNT_API_ENDPOINT + '/signup';
    return axiosClient.post(url, account);
  },
  // fn: đăng nhập
  postLogin: (account) => {
    const url = ACCOUNT_API_ENDPOINT + '/login';
    return axiosClient.post(url, account);
  },
};

export default accountApi;
