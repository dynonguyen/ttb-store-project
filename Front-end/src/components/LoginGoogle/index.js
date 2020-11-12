import React from 'react';
import GoogleLogin from 'react-google-login';
import ggIcon from 'assets/icon/gg-icon.png';
import PropTypes from 'prop-types';
import './index.scss';

function LoginGoogle(props) {
  //login with Google
  const loginWithGoogle = async (res) => {
    try {
      const { accessToken } = res;
      // const response = await loginApi.loginWithGoogle({
      //   access_token: accessToken,
      // });
      const { status, data } = response;
      //login success -> redirect home
      if (status === 200) {
        onHandleSuccess(data.refreshToken);
      }
    } catch (error) {
      const { message } = error.response.data;
      if (message) {
        setError(message);
      } else {
        setError('Đăng nhập thất bại. Thử lại !');
      }
    }
  };

  return (
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
      onSuccess={loginWithGoogle}
      onFailure={loginWithGoogle}
      cookiePolicy={'single_host_origin'}
    />
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
