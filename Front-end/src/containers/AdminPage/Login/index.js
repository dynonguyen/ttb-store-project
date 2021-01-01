import PropTypes from 'prop-types';
import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import adminApi from 'apis/adminApi';

function Login(props) {
  const { onLogin } = props;

  const onFinish = async (account) => {
    try {
      const response = await adminApi.postLogin(account);
      if (response) {
        message.success('Đăng nhập thành công', 2);
        onLogin(true, response.data.name);
      }
    } catch (error) {
      message.error('Tài khoản không tồn tại hoặc sai mật khẩu', 2);
      onLogin(false);
    }
  };

  return (
    <Form name="form" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="userName"
        rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button className="w-100 m-t-8" htmlType="submit" type="primary">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
