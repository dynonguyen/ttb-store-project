import {
  BarChartOutlined,
  DashboardOutlined,
  EyeOutlined,
  HomeOutlined,
  IdcardOutlined,
  NotificationOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AddProduct from './ProductPage/ProductAddForm';
import ProductViewPage from './ProductPage/ProductViewPage';

const mainColor = '#000';
const menuList = [
  {
    key: 'd',
    title: 'Dashboard',
    icon: <DashboardOutlined />,
    children: [],
  },
  {
    key: 'p',
    title: 'Products',
    icon: <ShoppingCartOutlined />,
    children: [
      { key: 'p0', title: 'See', icon: <EyeOutlined /> },
      { key: 'p1', title: 'Add', icon: <PlusCircleOutlined /> },
    ],
  },
  {
    key: 'c',
    title: 'Customers',
    icon: <UserOutlined />,
    children: [],
  },
  {
    key: 'a',
    title: 'Amin Users',
    icon: <IdcardOutlined />,
    children: [],
  },
  {
    key: 's',
    title: 'Statistic',
    icon: <BarChartOutlined />,
    children: [],
  },
  {
    key: 'm',
    title: 'Marketing',
    icon: <NotificationOutlined />,
    children: [],
  },
];

function AdminPage() {
  const [keyMenu, setKeyMenu] = useState('p0');

  // fn: Xử lý khi chọn item
  const handleSelected = (e) => {
    const { key } = e;
    setKeyMenu(key);
  };

  // fn: Show Title Selected
  const showTitleSelected = (key) => {
    let result = 'Dashboard';
    menuList.forEach((item) => {
      if (item.key === key) result = item.title;
      item.children.forEach((child) => {
        if (child.key === key) result = `${item.title} > ${child.title}`;
      });
    });
    return result;
  };

  // fn: render menu
  const renderMenuItem = () => {
    // return MenuItem if children = null
    return menuList.map((item, index) => {
      const { key, title, icon, children } = item;
      if (children.length === 0)
        return (
          <Menu.Item className="menu-item" key={key} icon={icon}>
            <span className="menu-item-title">{title}</span>
          </Menu.Item>
        );
      // else render SubMenu
      return (
        <SubMenu className="menu-item" key={key} icon={icon} title={title}>
          {children.map((child, index) => (
            <Menu.Item className="menu-item" key={child.key} icon={child.icon}>
              <span className="menu-item-title">{child.title}</span>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    });
  };

  // fn: render component tương ứng
  const renderMenuComponent = (key) => {
    switch (key) {
      case 'd':
        break;
      case 'p0':
        return <ProductViewPage />;
      case 'p1':
        return <AddProduct />;
      case 'a':
        break;
      case 'm':
        break;
      default:
        break;
    }
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
            <span className="option-title">{showTitleSelected(keyMenu)}</span>
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
            height: 'inherit',
            minHeight: '100vh',
            backgroundColor: mainColor,
            flexBasis: '150px',
          }}
          defaultSelectedKeys={keyMenu}
          mode="inline">
          {renderMenuItem()}
        </Menu>

        {/* main contents */}
        <div className="flex-grow-1">{renderMenuComponent(keyMenu)}</div>
      </div>
    </div>
  );
}

export default AdminPage;
