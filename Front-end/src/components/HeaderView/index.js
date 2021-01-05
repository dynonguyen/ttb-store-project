import {
  MenuOutlined,
  ReconciliationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  AutoComplete,
  Avatar,
  Badge,
  Button,
  Dropdown,
  Input,
  Layout,
  Menu,
  message,
} from 'antd';
import loginApi from 'apis/loginApi';
import defaultAvt from 'assets/imgs/default-avt.png';
import constants from 'constants/index';
import helpers from 'helpers';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartView from './CartView';
import './index.scss';
const { Header } = Layout;
const { Search } = Input;

function totalItemCarts(carts) {
  if (carts) {
    return carts.reduce((total, item) => total + item.amount, 0);
  }
}

function HeaderView() {
  const { isAuth } = useSelector((state) => state.authenticate);
  const user = useSelector((state) => state.user);
  const carts = useSelector((state) => state.carts);
  const options = helpers.autoSearchOptions();

  // event: log out
  const onLogout = async () => {
    try {
      console.log('logout');
      const response = await loginApi.postLogout();
      if (response) {
        message.success('Đăng xuất thành công', 2);
        localStorage.removeItem(constants.REFRESH_TOKEN_KEY);
        location.reload();
      }
    } catch (error) {
      message.error('Đăng xuất thất bại', 2);
    }
  };

  // Menu for user action
  const userActionMenu = (
    <Menu className="m-t-24" style={{ width: 244 }}>
      <Menu.Item>
        {isAuth ? (
          <Button
            onClick={onLogout}
            size="large"
            className="w-100"
            type="primary"
            danger={isAuth}>
            Đăng xuất
          </Button>
        ) : (
          <Button size="large" className="w-100" type="primary">
            <Link to={constants.ROUTES.LOGIN}>Đăng nhập</Link>
          </Button>
        )}
      </Menu.Item>
      <Menu.Item>
        <Link to={constants.ROUTES.SIGNUP}>
          <Button size="large" className="w-100" type="default">
            Đăng ký
          </Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Button size="large" className="w-100" type="default">
          Quản lý Tài khoản
        </Button>
      </Menu.Item>
    </Menu>
  );

  const onSearch = (value) => console.log(value);
  return (
    <Header className="container-fluid Header-View">
      <div className="container d-flex justify-content-between">
        {/* Logo */}
        <div className="col- logo-TTB p-r-20">
          <Link to="/">
            <img
              src="https://previews.123rf.com/images/putracetol/putracetol1805/putracetol180502182/101179920-science-computer-logo-icon-design.jpg"
              width="48"
              height="48"
            />
          </Link>
        </div>

        {/* thanh tìm kiếm */}
        <div className="flex-grow-1 t-right search-bar-wrapper">
          <div className="search-bar pos-relative flex-grow-1 m-r-8">
            <AutoComplete
              className="trans-center w-100"
              options={options}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }>
              <Search
                placeholder="Tìm kiếm"
                onSearch={onSearch}
                maxLength={200}
                enterButton
              />
            </AutoComplete>
          </div>
          <div className="Header-View-icon search-icon">
            <SearchOutlined />
          </div>
        </div>

        {/* Thanh công cụ Navbar */}
        <div>
          <Menu
            className="t-right"
            theme="light"
            mode="horizontal"
            overflowedIndicator={
              <MenuOutlined
                style={{
                  fontSize: 28,
                  transform: 'translateY(7px)',
                }}
              />
            }>
            <Menu.Item key="0">
              <Link to="/">
                <span className="font-weight-500 m-r-5 Header-View-text">
                  Đơn hàng
                </span>
                <ReconciliationOutlined className="Header-View-icon" />
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Dropdown overlay={userActionMenu} placement="bottomRight">
                <Link
                  to={
                    isAuth ? constants.ROUTES.ACCOUNT : constants.ROUTES.LOGIN
                  }>
                  {!isAuth ? (
                    <>
                      <span className="font-weight-500 m-r-5 Header-View-text">
                        Đăng nhập
                      </span>
                      <UserOutlined className="Header-View-icon" />
                    </>
                  ) : (
                    <>
                      <span className="font-weight-500 m-r-5 Header-View-text">
                        {helpers.reduceProductName(user.fullName, 10)}
                      </span>
                      <Avatar src={user.avt ? user.avt : defaultAvt} />
                    </>
                  )}
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="2">
              <Dropdown
                overlay={<CartView list={carts} />}
                placement="bottomLeft"
                arrow>
                <Link to={constants.ROUTES.CART}>
                  <span className="font-weight-500 m-r-5 Header-View-text">
                    Giỏ hàng
                  </span>
                  <ShoppingCartOutlined className="Header-View-icon" />
                  <Badge
                    size="small"
                    count={totalItemCarts(carts)}
                    overflowCount={9}
                    offset={[-10, -20]}
                  />
                </Link>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
      </div>

      <div className="search-bar-responsive">
        <AutoComplete
          className="w-100"
          options={options}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }>
          <Search
            placeholder="Tìm kiếm"
            maxLength={200}
            onSearch={onSearch}
            enterButton
          />
        </AutoComplete>
      </div>
    </Header>
  );
}

export default HeaderView;
