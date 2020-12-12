//======= imports =======//
import userApi from 'apis/userApi';
//======= constant action type =======//
const GET_USER = 'GET_USER';

//======= actions request (call API) =======//
const getUserRequest = () => {
  return async (dispatch) => {
    try {
      const response = await userApi.getUser();
      const { user } = response.data;
      dispatch(getUser(user));
    } catch (error) {
      throw error;
    }
  };
};

//======= actions =======//
const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};

//======= initial state =======//
const initialState = {};

//======= reducer =======//
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return { ...action.payload };
    }

    default:
      return { ...state };
  }
};

//======= exports =======//
export default {
  userReducer,
  getUserRequest,
  getUser,
  GET_USER,
};
