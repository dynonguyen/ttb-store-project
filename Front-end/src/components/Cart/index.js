import { HomeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';
import CartOverview from './Overview';
import CartPayment from './Payment';

// const list = [];
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
  const carts = useSelector((state) => state.carts);

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
        <Col span={24} md={16}>
          <CartOverview list={carts} />
        </Col>

        {/* Thanh toán */}
        <Col span={24} md={8}>
          <CartPayment list={carts} />
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
