import { Card, Avatar, Button, List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import './index.scss';

const { Meta } = Card;

function totalPrice(list) {
  return list.reduce((total, item) => {
    total += item.price * item.amount;
    return total;
  }, 0);
}

function CartView(props) {
  const { list } = props;
  return (
    <div
      className="cart-view p-8"
      style={{ backgroundColor: '#fff', height: '500', width: '100' }}>
      <div className="cart-items p-8">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={list}
          renderItem={(item) => (
            <Card style={{ width: 300 }}>
              <Meta
                avatar={
                  <Avatar style={{ width: 80, height: 50 }} src={item.avt} />
                }
                title={item.name}
                description={`Số lượng: ${item.amount}`}
              />
              <p className="product-price">
                {helpers.formatProductPrice(item.price)}
              </p>
            </Card>
          )}
        />
      </div>

      <div className="cart-additional p-8">
        <h3>Tổng tiền: {helpers.formatProductPrice(totalPrice(list))}</h3>
        <Link to="/login">
          <Button
            className="m-tb-8 d-block m-lr-auto w-100"
            type="primary"
            size="large">
            Đến giỏ hàng
          </Button>
        </Link>
      </div>
    </div>
  );
}

CartView.propTypes = {
  list: PropTypes.array,
};

export default CartView;
