// Note: reducer xử lý việc xác thực người dùng

import loginApi from 'apis/loginApi';
import constants from 'constants/index';

// ! import

// ! constants
const SET_IS_AUTH = 'SET_IS_AUTH';

// ! action requests (call API)

//======= actions request (call API) =======//

// refresh token nếu access token hết hạn không có
const refreshToken = () => {
  return async (dispatch) => {
    try {
      const refToken = localStorage.getItem(constants.REFRESH_TOKEN_KEY);
      //if not exist refresh token in local storage -> set isAuth: false
      if (!refToken) {
        return dispatch(setIsAuth(false));
      }
      //else request refresh token
      const result = await loginApi.postRefreshToken({
        refresh_token: refToken,
      });
      //if success
      if (result.status === 200) {
        dispatch(setIsAuth(true));
      } else {
        dispatch(setIsAuth(false));
      }
    } catch (error) {
      dispatch(setIsAuth(false));
    }
  };
};

// xác thực mã access token
const getIsAuth = () => {
  return async (dispatch) => {
    try {
      const result = await loginApi.getAuth();
      dispatch(setIsAuth(result.data.isAuth));
    } catch (error) {
      if (error.response) {
        //Unauthorized -> refresh token
        if (error.response.status === 401) {
          dispatch(refreshToken());
        }
      } else {
        dispatch(setIsAuth(false));
      }
    }
  };
};

// ! normal action

// fn: set authentication cho người dùng
const setIsAuth = (isAuth) => {
  return { type: SET_IS_AUTH, payload: { isAuth } };
};

// ! reducers
const initialState = { isAuth: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      const { isAuth } = action.payload;
      return { ...state, isAuth };
    default:
      return { ...state };
  }
};

// ! exports
export default {
  authReducer,
  SET_IS_AUTH,
  setIsAuth,
  getIsAuth,
};
