import { HomeOutlined } from '@ant-design/icons';
import { Button, Col, Popconfirm, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartReducer from 'reducers/carts';
import './index.scss';
import CartOverview from './Overview';
import CartPayment from './Payment';

function Cart() {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  // event: Xoá tất cả sản phẩm trong cart
  const onDelAllCarts = () => {
    dispatch(cartReducer.resetCart());
  };

  // rendering ...
  return (
    <div
      className="Cart-Detail-View container m-t-20"
      style={{ minHeight: '80vh' }}>
      <Row gutter={[16, 32]}>
        {/* Hiển thị đường dẫn trang */}
        <Col span={24} className="d-flex page-position">
          <Link to="/">
            <HomeOutlined className="p-12 icon-home font-size-16px bg-white" />
          </Link>
          <span className="r-arrow p-lr-8 font-weight-500">{`>`}</span>
          <span className="cart-name p-8 font-weight-500 bg-white">
            Giỏ hàng của bạn
          </span>
        </Col>

        {carts.length > 0 ? (
          <>
            {/* Tổng sản phẩm */}
            <Col span={24} className="d-flex justify-content-between">
              <h2>
                Giỏ hàng của bạn
                <b>{` ${carts.reduce(
                  (a, b) => a + parseInt(b.amount),
                  0,
                )} `}</b>
                sản phẩm
              </h2>
              <Popconfirm
                title="Bạn có chắc muốn xoá toàn bộ sản phẩm trong giỏ hàng ?"
                placement="left"
                okButtonProps={{ type: 'primary' }}
                onConfirm={onDelAllCarts}
                okText="Đồng ý"
                cancelText="Huỷ bỏ">
                <Button type="link" danger size="large">
                  Xoá tất cả
                </Button>
              </Popconfirm>
            </Col>

            {/* Chi tiết giỏ hàng */}
            <Col span={24} md={16}>
              <CartOverview carts={carts} />
            </Col>

            {/* Thanh toán */}
            <Col span={24} md={8}>
              <CartPayment carts={carts} />
            </Col>
          </>
        ) : (
          <Col span={24} className="t-center" style={{ minHeight: '90vh' }}>
            <h2 className="m-tb-16" style={{ color: '#888' }}>
              Hiện tại bạn chưa có sản phẩm nào trong giỏ hàng
            </h2>
            <Link to="/">
              <Button type="primary" size="large">
                Mua sắm ngay nào
              </Button>
            </Link>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Cart;
