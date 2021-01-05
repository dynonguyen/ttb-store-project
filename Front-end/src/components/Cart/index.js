import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { List, Avatar, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import CartOverview from './Overview';
import CartPayment from './Payment';
import './index.scss';

function Cart() {
  return (
    <div className="Cart-Detail-View container m-t-20">
      <Row gutter={[16, 32]}>
        {/* Hiển thị đường dẫn trang */}
        <Col span={24} className="d-flex page-position">
          <Link to="/">
            <HomeOutlined className="p-12 icon-home font-size-16px bg-white" />
          </Link>
          <span className="r-arrow p-lr-8 font-weight-500">{`>`}</span>
          <span className="cart-name p-8 font-weight-500 bg-white">
            Giỏ hàng
          </span>
        </Col>

        <Col span={24} md={18}>
          <h2 className="font-weight-700">Giỏ hàng của bạn</h2>
        </Col>

        {/* Chi tiết giỏ hàng */}
        <Col span={24} md={18}>
          <CartOverview list={[]} />
        </Col>

        {/* Thanh toán */}
        <Col span={24} md={6}>
          <CartPayment list={[]} />
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
