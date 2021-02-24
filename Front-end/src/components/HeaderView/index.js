import {
  MenuOutlined,
  ReconciliationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  AutoComplete,
  Badge,
  Button,
  Drawer,
  Dropdown,
  Input,
  Menu,
  message,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import loginApi from 'apis/loginApi';
import defaultAvt from 'assets/imgs/default-avt.png';
import logoUrl from 'assets/imgs/logo.png';
import constants from 'constants/index';
import helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import CartView from './CartView';
import './index.scss';

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
  const locations = useLocation().pathname;
  const initLink = '/search?keyword=';
  const [linkSearch, setLinkSearch] = useState('');
  const [isMdDevice, setIsMdDevice] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isSmDevice, setIsSmDevice] = useState(false);

  // event: log out
  const onLogout = async () => {
    try {
      const response = await loginApi.postLogout();
      if (response) {
        message.success('Đăng xuất thành công', 2);
        localStorage.removeItem(constants.REFRESH_TOKEN_KEY);
        if (process.env.NODE_ENV === 'production')
          localStorage.removeItem(constants.ACCESS_TOKEN_KEY);

        location.reload();
      }
    } catch (error) {
      message.error('Đăng xuất thất bại', 2);
    }
  };

  // event: get event change window width
  useEffect(() => {
    const w = window.innerWidth;
    if (w <= 992) setIsMdDevice(true);
    if (w <= 480) setIsSmDevice(true);
    window.addEventListener('resize', function() {
      const width = window.innerWidth;
      if (width <= 992) {
        setIsMdDevice(true);
      } else {
        setIsMdDevice(false);
      }
      if (width <= 480) setIsSmDevice(true);
      else setIsSmDevice(false);
    });

    return () => {
      window.removeEventListener('resize');
    };
  }, []);

  // event: close drawer to redirect
  useEffect(() => {
    setDrawerVisible(false);
  }, [locations]);

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
          <Button size="large" className="w-100 btn-secondary" type="default">
            Đăng ký
          </Button>
        </Link>
      </Menu.Item>
      {isAuth && (
        <Menu.Item>
          <Button size="large" className="w-100 btn-secondary" type="default">
            <Link to={constants.ROUTES.ACCOUNT + '/'}>Quản lý Tài khoản</Link>
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );

  // rendering...
  return (
    <div
      className="wrap-header container-fluid bg-white w-100vw"
      style={{ height: isSmDevice ? 76 : 104 }}>
      <div className="header container h-100 d-flex justify-content-between align-i-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logoUrl}
            width={isSmDevice ? 78 : 112}
            height={isSmDevice ? 36 : 48}
          />
        </Link>

        {/* thanh tìm kiếm */}
        <div className="t-right search-bar-wrapper w-100">
          <div className="search-bar pos-relative">
            <AutoComplete
              className="trans-center w-100"
              options={options}
              onChange={(value) =>
                setLinkSearch(helpers.formatQueryString(value))
              }
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }>
              <Input
                maxLength={200}
                size={isSmDevice ? 'middle' : 'large'}
                placeholder={!isSmDevice ? 'Nhập từ khoá cần tìm' : 'Tìm kiếm'}
              />
            </AutoComplete>
            <Button type="primary" size={isSmDevice ? 'middle' : 'large'}>
              <Link to={linkSearch === '' ? locations : initLink + linkSearch}>
                <SearchOutlined /> {!isSmDevice ? 'Tìm kiếm' : ''}
              </Link>
            </Button>
          </div>
        </div>

        {/* thanh công cụ navbar */}
        {isMdDevice ? (
          <>
            <Drawer
              title="Menu"
              placement="right"
              closable={true}
              onClose={() => setDrawerVisible(false)}
              maskClosable={true}
              visible={drawerVisible}>
              <ul className="m-0">
                <li className="m-b-18">
                  <Dropdown overlay={userActionMenu} placement="bottomLeft">
                    <Link
                      to={
                        isAuth
                          ? `${constants.ROUTES.ACCOUNT}/`
                          : constants.ROUTES.LOGIN
                      }>
                      {!isAuth ? (
                        <div className="d-flex navbar-tool-item p-l-0">
                          <UserOutlined className="icon m-r-12" />
                          <span className="title">Đăng nhập</span>
                        </div>
                      ) : (
                        <div className="d-flex navbar-tool-item p-l-0">
                          <Avatar src={defaultAvt} className="m-r-12" />
                          <span className="title">
                            {helpers.reduceProductName(user.fullName, 12)}
                          </span>
                        </div>
                      )}
                    </Link>
                  </Dropdown>
                </li>
                <li className="m-b-18">
                  <Link
                    className="d-flex navbar-tool-item p-l-0"
                    to={constants.ROUTES.ACCOUNT + '/orders'}>
                    <ReconciliationOutlined className="icon m-r-12" />
                    <span className="title">Đơn hàng</span>
                  </Link>
                </li>

                <li className="m-b-18">
                  <Dropdown
                    overlay={<CartView list={carts} />}
                    placement="bottomLeft"
                    arrow>
                    <Link
                      className="d-flex navbar-tool-item p-l-0"
                      to={constants.ROUTES.CART}>
                      <ShoppingCartOutlined className="icon m-r-12" />
                      <Badge
                        className="pos-absolute"
                        size="default"
                        style={{ color: '#fff' }}
                        count={totalItemCarts(carts)}
                        overflowCount={9}
                        offset={[18, -10]}
                      />

                      <span className="title">Giỏ hàng</span>
                    </Link>
                  </Dropdown>
                </li>
              </ul>
            </Drawer>
            <MenuOutlined
              className="menu-icon"
              onClick={() => setDrawerVisible(true)}
            />
          </>
        ) : (
          <ul className="d-flex m-0">
            <li>
              <Link
                className="d-flex flex-direction-column navbar-tool-item p-l-0"
                to={constants.ROUTES.ACCOUNT + '/orders'}>
                <ReconciliationOutlined className="icon" />
                <span className="title">Đơn hàng</span>
              </Link>
            </li>
            <li>
              <Dropdown overlay={userActionMenu} placement="bottomRight">
                <Link
                  to={
                    isAuth
                      ? `${constants.ROUTES.ACCOUNT}/`
                      : constants.ROUTES.LOGIN
                  }>
                  {!isAuth ? (
                    <div className="d-flex flex-direction-column navbar-tool-item">
                      <UserOutlined className="icon" />
                      <span className="title">Đăng nhập</span>
                    </div>
                  ) : (
                    <div className="d-flex flex-direction-column navbar-tool-item">
                      <Avatar src={defaultAvt} className="m-auto" />
                      <span className="title">
                        {helpers.reduceProductName(user.fullName, 12)}
                      </span>
                    </div>
                  )}
                </Link>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                overlay={<CartView list={carts} />}
                placement="bottomRight"
                arrow>
                <Link
                  className="d-flex flex-direction-column navbar-tool-item"
                  to={constants.ROUTES.CART}>
                  <ShoppingCartOutlined className="icon" />
                  <Badge
                    className="pos-absolute"
                    size="default"
                    style={{ color: '#fff' }}
                    count={totalItemCarts(carts)}
                    overflowCount={9}
                    offset={[36, -5]}
                  />

                  <span className="title">Giỏ hàng</span>
                </Link>
              </Dropdown>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default HeaderView;
