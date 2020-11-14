import { message } from 'antd';
import loginApi from 'apis/loginApi';
import ggIcon from 'assets/icon/gg-icon.png';
import Delay from 'components/Delay';
import constants from 'constants/index';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authReducers from 'reducers/auth';
import './index.scss';

function LoginGoogle(props) {
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);

  // xử lý khi đăng nhập thành công
  const onLoginSuccess = async (refreshToken) => {
    try {
      message.success('Đăng nhập thành công');
      // lưu refresh token vào local storage
      localStorage.setItem(constants.REFRESH_TOKEN, refreshToken);
      dispatch(authReducers.setIsAuth(true));
      setIsLogged(true);
    } catch (error) {
      message.error('Lỗi đăng nhập.');
    }
  };

  // login with Google
  const onLoginWithGoogle = async (res) => {
    try {
      const { accessToken } = res;
      const response = await loginApi.postLoginWithGoogle({
        access_token: accessToken,
      });
      const { status, data } = response;
      //login success -> redirect home
      if (status === 200) {
        onLoginSuccess(data.refreshToken);
      }
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message);
      } else {
        message.error('Đăng nhập thất bại, thử lại');
      }
    }
  };

  return (
    <>
      {/* đăng nhập thành công chuyển về home */}
      {isLogged && (
        <Delay wait={constants.DELAY_TIME}>
          <Redirect to="/" />
        </Delay>
      )}

      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <div
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={`${props.className} login-with gg login-input`}>
            <img src={ggIcon} className="login-with__icon " />
            <span className="login-with__title">{props.title}</span>
          </div>
        )}
        onSuccess={onLoginWithGoogle}
        onFailure={onLoginWithGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}

LoginGoogle.defaultProps = {
  title: 'Google+',
  className: '',
};

LoginGoogle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default LoginGoogle;
