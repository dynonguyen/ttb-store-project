import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { List, Avatar, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import CartOverview from './Overview';
import CartPayment from './Payment';
import './index.scss';

const list = [];
// for (let i = 0; i < 10; i++) {
//   list.push({
//     avt:
//       'https://cdn.tgdd.vn/Files/2020/07/22/1272660/apple-macbook-pro-16-inch-01-_1680x964-800-resize.jpg',
//     name: 'Macbook Pro 16',
//     amount: 5,
//     price: 10,
//     code: 'SKU200500854',
//   });
// }

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

        {/* <Col span={24} md={18}>
          <h2 className="font-weight-700">Giỏ hàng của bạn</h2>
        </Col> */}

        {/* Chi tiết giỏ hàng */}
        <Col span={24} md={18}>
          <CartOverview list={list} />
        </Col>

        {/* Thanh toán */}
        <Col span={24} md={6}>
          <CartPayment list={list} />
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
