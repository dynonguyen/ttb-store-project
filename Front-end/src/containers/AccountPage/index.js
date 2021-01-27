import {
  CompassOutlined,
  NotificationOutlined,
  ReconciliationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Col, Result, Row } from 'antd';
import userLogo from 'assets/icon/user_32px.png';
import constants from 'constants/index';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';
import './index.scss';
import OrderList from './OrderList';
import UpdateAccountForm from './UpdateForm';
import AddressUserList from './UserAddressList';

function AccountPage() {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const [activeKey, setActiveKey] = useState(() =>
    pathname.replace(`${constants.ROUTES.ACCOUNT}/`, ''),
  );
  // menu list
  const menu = [
    {
      Icon: <UserOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Thông tin tài khoản',
      key: '',
    },
    {
      Icon: <ReconciliationOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Quản lý đơn hàng',
      key: 'orders',
    },
    {
      Icon: <CompassOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Địa chỉ giao hàng',
      key: 'addresses',
    },
    {
      Icon: <NotificationOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Thông báo',
      key: 'notifications',
    },
  ];

  // render component with key
  function renderComponent(key = '') {
    switch (key) {
      case '':
        return (
          <>
            <h2 className="m-b-16">Thông tin tài khoản</h2>
            <UpdateAccountForm />
          </>
        );
      case 'orders':
        return (
          <>
            <h2 className="m-b-16">Các đơn hàng của bạn</h2>
            <OrderList />
          </>
        );
      case 'addresses':
        return (
          <>
            <h2 className="m-b-16">Danh sách địa chỉ giao hàng của bạn</h2>
            <AddressUserList />
          </>
        );
      case 'notifications':
        return (
          <>
            <h2 className="m-b-16">Thông báo</h2>
            <Result
              icon={<NotificationOutlined />}
              title="Hiện tại, không có thông báo nào"
            />
            ,
          </>
        );
      default:
        <>
          <h2 className="m-b-16">Thông tin tài khoản</h2>
          <UpdateAccountForm />
        </>;
    }
  }

  // event: lấy lại key khi bấm vào đơn hàng menu
  useEffect(() => {
    if (pathname === `${constants.ROUTES.ACCOUNT}/orders`)
      setActiveKey('orders');
  }, [pathname]);

  // rendering ...
  return (
    <>
      {!isAuth ? (
        <div style={{ minHeight: '82vh' }}>
          <Result
            title="Đăng nhập để xem thông tin"
            extra={[
              <Button type="primary" key="signup" className="btn-secondary">
                <Link to={constants.ROUTES.SIGNUP}>Đăng ký</Link>
              </Button>,
              <Button type="primary" key="login">
                <Link to={constants.ROUTES.LOGIN}>Đăng nhập</Link>
              </Button>,
            ]}
          />
        </div>
      ) : (
        <Row className="account-page container m-tb-32">
          <Col className="p-r-16" span={24} md={6}>
            {/* giới thiệu */}
            <div className="d-flex p-b-4 m-b-12 intro">
              <img src={userLogo} width={32} height={32} className="m-r-12" />
              <div>
                <span className="m-b-0 font-size-16px">Tài khoản của</span>
                <h3>
                  <b className="name">{user.fullName}</b>
                </h3>
              </div>
            </div>

            {/* menu */}
            <ul className="account-page-menu m-t-12">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  to={constants.ROUTES.ACCOUNT + '/' + item.key}>
                  <li
                    className={`account-page-menu-item p-b-20 ${
                      item.key === activeKey ? 'active' : ''
                    }`}
                    onClick={() => setActiveKey(item.key)}>
                    {item.Icon}
                    <span className="font-size-16px">{item.title}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </Col>

          <Col className="p-lr-8" span={24} md={18}>
            {renderComponent(activeKey)}
          </Col>
        </Row>
      )}
    </>
  );
}

export default AccountPage;
