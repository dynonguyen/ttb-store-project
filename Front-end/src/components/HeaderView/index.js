import {
  ReconciliationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Badge, Card, Col, Dropdown, Input, Layout, Menu, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import CartView from './CartView';
import './index.scss';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Meta } = Card;

function HeaderView() {
  return (
    <Header className="container-fluid Header-View">
      <div className="container-lg justify-content-between">
        <Row>
          <Col xs={4} sm={3} md={4} lg={2} xl={2}>
            <div className="col- logo-TTB p-r-20">
              <img
                src="https://previews.123rf.com/images/putracetol/putracetol1805/putracetol180502182/101179920-science-computer-logo-icon-design.jpg"
                width="48"
                height="48"
              />
            </div>
          </Col>
          <Col xs={16} sm={18} md={13} lg={11} xl={13}>
            <div className="Header-View-icon search-icon">
              <SearchOutlined />
            </div>
            <div className="search-bar pos-relative flex-grow-1 m-r-8">
              <Search
                className="trans-center"
                placeholder="Tìm kiếm"
                onSearch={onSearch}
                enterButton
              />
            </div>
          </Col>
          <Col xs={4} sm={3} md={7} lg={11} xl={9}>
            <div>
              <Menu
                theme="light"
                mode="horizontal"
                overflowedIndicator={<UnorderedListOutlined />}>
                <Menu.Item key="0">
                  <Link to="/">
                    <span className="font-weight-500 m-r-5 Header-View-text">
                      Đơn hàng
                    </span>
                    <ReconciliationOutlined className="Header-View-icon" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="1">
                  <Link to="/login">
                    <span className="font-weight-500 m-r-5 Header-View-text">
                      Đăng nhập
                    </span>
                    <UserOutlined className="Header-View-icon" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Dropdown overlay={CartView} placement="bottomLeft" arrow>
                    <Link to="/login">
                      <span className="font-weight-500 m-r-5 Header-View-text">
                        Giỏ hàng
                      </span>
                      <ShoppingCartOutlined className="Header-View-icon" />
                      <Badge
                        size="small"
                        count={5}
                        overflowCount={9}
                        offset={[-15, -22]}
                      />
                    </Link>
                  </Dropdown>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
      </div>
      <div className="search-bar-responsive">
        <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      </div>
    </Header>
  );
}

export default HeaderView;
