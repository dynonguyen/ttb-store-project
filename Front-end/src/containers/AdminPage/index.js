import {
  BarChartOutlined,
  DashboardOutlined,
  HomeOutlined,
  IdcardOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductPage from './ProductPage';
import './index.scss';

const mainColor = '#000';
const menuList = [
  {
    key: 0,
    title: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    key: 1,
    title: 'Products',
    icon: <ShoppingCartOutlined />,
  },
  {
    key: 2,
    title: 'Customers',
    icon: <UserOutlined />,
  },
  {
    key: 3,
    title: 'Amin Users',
    icon: <IdcardOutlined />,
  },
  {
    key: 4,
    title: 'Statistic',
    icon: <BarChartOutlined />,
  },
  {
    key: 5,
    title: 'Marketing',
    icon: <NotificationOutlined />,
  },
];

function AdminPage() {
  const [optionSelected, setOptionSelected] = useState(0);

  const handleSelected = (e) => {
    const { key } = e;
    setOptionSelected(key);
  };

  return (
    <div className="Admin-Page" style={{ backgroundColor: '#e5e5e5' }}>
      {/* header */}
      <div
        className="d-flex align-i-center"
        style={{ height: '72px', backgroundColor: mainColor }}>
        <div className="logo" style={{ flexBasis: '180px' }}>
          <img
            className="m-t-5 m-l-50"
            width="44x"
            height="44px"
            src="https://seeklogo.com/images/T/ton-tb-logo-DE07849F3E-seeklogo.com.gif"
          />
        </div>
        <div className="flex-grow-1 d-flex align-i-center">
          <h2 className="t-color-primary flex-grow-1 p-l-44 main-title">
            <span>Admin Page &gt; </span>
            <span className="option-title">
              {menuList[optionSelected].title}
            </span>
          </h2>
          <Link
            to="/"
            className="p-r-24 t-color-primary font-weight-500 p-b-10">
            <HomeOutlined
              className="font-size-28px t-color-primary m-r-10"
              style={{ transform: 'translateY(3px)' }}
            />
            <span className="open-web-title">Open the website</span>
          </Link>
          <Link
            to="/"
            className="user-admin p-r-44 t-color-primary font-weight-500">
            <Avatar
              size={36}
              className="m-r-10"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/113736806_2750904441808448_2237668902459956508_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=7jA_Oa30G0QAX848MyJ&_nc_ht=scontent.fsgn2-5.fna&oh=f4269f202a1622280a45c184a73bbb32&oe=5FD3C97A"
            />
            <span className="user-admin-title">Tuấn Nguyễn</span>
          </Link>
        </div>
      </div>

      <div className="d-flex">
        {/* menu dashboard */}
        <Menu
          className="menu"
          theme="dark"
          onClick={handleSelected}
          style={{
            width: '100%',
            height: '100vh',
            backgroundColor: mainColor,
            flexBasis: '150px',
          }}
          selectedKeys={optionSelected}
          mode="inline">
          {menuList.map((item) => (
            <Menu.Item className="menu-item" key={item.key} icon={item.icon}>
              <span className="menu-item-title">{item.title}</span>
            </Menu.Item>
          ))}
        </Menu>

        {/* main contents */}
        <div className="flex-grow-1">
          <ProductPage />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
