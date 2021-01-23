import { Avatar, Button, Card, Empty, InputNumber, List } from 'antd';
import constants from 'constants/index';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const { Meta } = Card;

function totalPrice(list) {
  console.log(list);
  return list.reduce((total, item) => {
    total += item.price * item.amount;
    return total;
  }, 0);
}
function CartOverview(props) {
  const { list } = props;
  return (
    <div className="Cart-Overview">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={list}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Giỏ hàng chưa có sản phẩm">
              <Link to={constants.ROUTES.HOME}>
                <Button
                  className="m-tb-8 d-block m-lr-auto w-50"
                  type="primary"
                  size="large">
                  Mua sắm ngay
                </Button>
              </Link>
            </Empty>
          ),
        }}
        renderItem={(item) => (
          <div className="d-flex justify-content-between bg-white m-b-16">
            {/* Tên, mã sản phẩm */}
            <div>
              <Card style={{ maxWidth: 400 }} bordered={false}>
                <Meta
                  avatar={
                    <Avatar style={{ width: 80, height: 50 }} src={item.avt} />
                  }
                  title={item.name}
                  description={`Mã: ${item.code}`}
                />
              </Card>
            </div>
            <div className="p-24">
              {/* <p className="product-amount">{`Số lượng: ${item.amount}`}</p> */}
              <InputNumber min={1} max={10} defaultValue={`${item.amount}`} />
            </div>

            <div className="p-24">
              <p className="product-price">
                {helpers.formatProductPrice(item.price)}
              </p>
            </div>
          </div>
        )}
      />
    </div>
  );
}

CartOverview.propTypes = {
  list: PropTypes.array,
};

export default CartOverview;
