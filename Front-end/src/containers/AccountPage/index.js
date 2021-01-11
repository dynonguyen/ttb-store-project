import {
  CompassOutlined,
  NotificationOutlined,
  ReconciliationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import userLogo from 'assets/icon/user_32px.png';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import UpdateAccountForm from './UpdateForm';

function AccountPage() {
  const user = useSelector((state) => state.user);
  const [activeKey, setActiveKey] = useState(0);
  // menu list
  const menu = [
    {
      Icon: <UserOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Thông tin tài khoản',
      key: 0,
    },
    {
      Icon: <ReconciliationOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Quản lý đơn hàng',
      key: 1,
    },
    {
      Icon: <CompassOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Địa chỉ giao hàng',
      key: 3,
    },
    {
      Icon: <NotificationOutlined className="icon m-r-12 font-size-24px" />,
      title: 'Thông báo',
      key: 4,
    },
  ];

  // rendering ...
  return (
    <Row className="account-page h-100vh container m-tb-32">
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
            <li
              key={index}
              className={`account-page-menu-item p-b-20 ${
                item.key === activeKey ? 'active' : ''
              }`}
              onClick={() => setActiveKey(item.key)}>
              {item.Icon}
              <span className="font-size-16px">{item.title}</span>
            </li>
          ))}
        </ul>
      </Col>
      <Col span={24} md={18}>
        <h2 className="m-b-16">Thông tin tài khoản</h2>
        <UpdateAccountForm />
      </Col>
    </Row>
  );
}

export default AccountPage;
