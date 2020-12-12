//=== Sign Up Page
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Button, Col, message, Row, Tooltip } from 'antd';
import InputField from 'components/Custom/Field/InputField';
import Delay from 'components/Delay';
import constants from 'constants/index';
import { FastField, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import accountApi from 'apis/accountApi';
import * as Yup from 'yup';
import './index.scss';

function ForgotPassword() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const emailRef = useRef('');
  // fn: gửi mã xác nhận
  const onSendCode = async () => {
    try {
      // kiểm tra email
      const email = emailRef.current;
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (!regex.test(email)) {
        message.error('Email không hợp lệ !');
        return;
      }
      // set loading, tránh việc gửi liên tục
      setIsSending(true);

      // tiến hành gửi mã
      const result = await accountApi.postSendCodeForgotPW({ email });
      if (result.status === 200) {
        message.success('Gửi thành công, kiểm tra email');
        setIsSending(false);
      }
    } catch (error) {
      setIsSending(false);
      if (error.response) {
        message.error(error.response.data.message);
      } else {
        message.error('Gửi thất bại, thử lại');
      }
    }
  };

  // fn: thay đổi mật khẩu
  const onChangePassword = async (account) => {
    try {
      setIsSubmitting(true);
      const result = await accountApi.postResetPassword({ account });
      if (result.status === 200) {
        setIsSubmitting(false);
        setIsSuccess(true);
        message.success('Thay đổi mật khẩu thành công.');
      }
    } catch (error) {
      setIsSubmitting(false);
      if (error.response) {
        message.error(error.response.data.message);
      } else {
        message.error('Cập nhật thất bại. Thử lại');
      }
    }
  };

  // giá trọ khởi tạo cho formik
  const initialValue = {
    email: '',
    password: '',
    verifyCode: '',
  };

  // validate form trước submit với yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('* Email bạn là gì ?')
      .email('* Email không hợp lệ !'),
    password: Yup.string()
      .trim()
      .required('* Mật khẩu của bạn là gì ?'),
    verifyCode: Yup.string()
      .trim()
      .required('* Nhập mã xác nhận')
      .length(
        constants.MAX_VERIFY_CODE,
        `* Mã xác nhận có ${constants.MAX_VERIFY_CODE} ký tự`,
      ),
  });

  //return...
  return (
    <div className="ForgotPW container">
      {/* chuyển về home khi đã login */}
      {isSuccess && (
        <Delay wait={constants.DELAY_TIME}>
          <Redirect to={constants.ROUTES.LOGIN} />
        </Delay>
      )}

      <h1 className="Login-title m-b-20 m-t-20 underline-title">
        <b>Thay đổi mật khẩu</b>
      </h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onChangePassword}>
        {(formikProps) => {
          emailRef.current = formikProps.values.email;
          const suffixColor = 'rgba(0, 0, 0, 0.25)';
          return (
            <Form className="bg-form">
              <Row
                className="input-border p-l-20 p-r-20"
                gutter={[0, 24]}
                justify="center"
                style={{ margin: 0 }}>
                {/* Form thông tin đăng nhập */}
                <Col span={24} className="m-t-20">
                  <FastField
                    name="email"
                    component={InputField}
                    className="input-form-common"
                    placeholder="Email *"
                    size="large"
                    suffix={
                      <Tooltip title="Email của bạn">
                        <InfoCircleOutlined
                          style={{
                            color: suffixColor,
                          }}
                        />
                      </Tooltip>
                    }
                  />
                </Col>
                <Col span={24}>
                  <FastField
                    name="password"
                    component={InputField}
                    className="input-form-common"
                    type="password"
                    placeholder="Mật khẩu mới *"
                    size="large"
                    autocomplete="on"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Col>
                <Col span={12}>
                  {/* user name field */}
                  <FastField
                    name="verifyCode"
                    component={InputField}
                    className="input-form-common"
                    placeholder="Mã xác nhận *"
                    size="large"
                    suffix={
                      <Tooltip title="Click gửi mã để nhận mã qua email">
                        <InfoCircleOutlined style={{ color: suffixColor }} />
                      </Tooltip>
                    }
                  />
                </Col>
                <Col span={12}>
                  <Button
                    className="w-100 verify-btn"
                    type="primary"
                    size="large"
                    onClick={onSendCode}
                    loading={isSending}>
                    Gửi mã
                  </Button>
                </Col>

                {/* Button submit */}
                <Col className="p-t-8 m-b-20 t-center" span={24}>
                  <Button
                    className="ForgotPW-submit-btn w-100"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}>
                    Thay đổi mật khẩu
                  </Button>
                  <div className="m-t-10">
                    Quay lại &nbsp;
                    <Link to={constants.ROUTES.LOGIN}>Đăng nhập</Link>
                    &nbsp; Hoặc &nbsp;
                    <Link to={constants.ROUTES.SIGNUP}>Đăng ký</Link>
                  </div>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ForgotPassword;
