import {
  Layout,
  Menu,
  Input,
  Badge,
  Row,
  Col,
  Dropdown,
  Card,
  Avatar,
} from 'antd';
import {
  ReconciliationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Meta } = Card;

const menu = (
  <div style={{ backgroundColor: '#fff' }}>
    <Card style={{ width: 300, marginTop: 16 }}>
      <Meta
        avatar={
          <Avatar src="https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg" />
        }
        title="Laptop Apple MacBook Pro 16 2019 (MVVK2SA/A) (Core i9/16GB/1TB SSD/AMD Radeon Pro 5500M/macOS/2kg)"
        description="This is the description"
      />
    </Card>

    <div className="additional">
      <h3 className="price">
        Tổng tiền: <span className="price">60M</span>
      </h3>
      <h3>
        Phí vận chuyển: <span className="ship-cost">100K</span>
      </h3>
      <Link to="/login">
        <span className="font-weight-500 m-r-5">Đến giỏ hàng</span>
      </Link>
    </div>
  </div>
);

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
                  <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Link to="/">
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
        <Search
          // className="trans-center"
          placeholder="Tìm kiếm"
          onSearch={onSearch}
          enterButton
        />
      </div>
    </Header>

    // <Header className="Header-View">
    //   <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    //     <Menu.Item key="1">nav 1</Menu.Item>
    //     <Menu.Item key="2">nav 2</Menu.Item>
    //     <Menu.Item key="3">nav 3</Menu.Item>
    //   </Menu>
    // </Header>
  );
}

export default HeaderView;
