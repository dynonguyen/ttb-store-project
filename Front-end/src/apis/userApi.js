import axiosClient from './axiosClient';

const USER_API_URL = '/user';

const userApi = {
  //get admin user
  getUser: () => {
    const url = USER_API_URL;
    return axiosClient.get(url);
  },
};

export default userApi;
