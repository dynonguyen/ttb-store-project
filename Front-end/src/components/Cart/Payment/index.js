import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import constants from 'constants/index';
import helpers from 'helpers';
import PropTypes from 'prop-types';

function totalPrice(list) {
  console.log(list);
  return list.reduce((total, item) => {
    total += item.price * item.amount;
    return total;
  }, 0);
}

function CartPayment(props) {
  const { list } = props;
  return (
    <>
      {list && list.length > 0 ? (
        <div className="Payment bg-white p-16">
          <h3 className="font-weight-700">Thanh toán</h3>
          <div className="d-flex justify-content-between">
            <p>Thành tiền</p>
            <h3>{helpers.formatProductPrice(totalPrice(list))}</h3>
          </div>
          <div className="p-8">
            <Link to={constants.ROUTES.CART}>
              <Button
                className="m-tb-8 d-block m-lr-auto w-100"
                type="primary"
                size="large"
                style={{ backgroundColor: '#3555c5', color: '#fff' }}>
                THANH TOÁN
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

CartPayment.propTypes = {
  list: PropTypes.array,
};

export default CartPayment;
