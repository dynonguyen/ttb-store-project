import React from 'react';
import { List, Avatar, Card, Row, Col, Image } from 'antd';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import './index.scss';

const { Meta } = Card;

function totalPrice(list) {
  console.log(list);
  return list.reduce((total, item) => {
    total += item.price * item.amount;
    return total;
  }, 0);
}

const list = [
  // {
  //   avt:
  //     'https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg',
  //   name: 'Macbook Pro 16',
  //   amount: 5,
  //   price: 10,
  //   code: 'SKU200500854',
  // },
  // {
  //   avt:
  //     'https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg',
  //   name: 'Macbook Pro 16',
  //   amount: 5,
  //   price: 10,
  //   code: 'SKU200500854',
  // },
  // {
  //   avt:
  //     'https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg',
  //   name: 'Macbook Pro 16',
  //   amount: 5,
  //   price: 10,
  //   code: 'SKU200500854',
  // },
  // {
  //   avt:
  //     'https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg',
  //   name: 'Macbook Pro 16',
  //   amount: 5,
  //   price: 10,
  //   code: 'SKU200500854',
  // },
  // {
  //   avt:
  //     'https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg',
  //   name: 'Macbook Pro 16',
  //   amount: 5,
  //   price: 10,
  //   code: 'SKU200500854',
  // },
  // {
  //   avt:
  //     'https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg',
  //   name: 'Macbook Pro 16',
  //   amount: 5,
  //   price: 10,
  //   code: 'SKU200500854',
  // },
  // {
  //   avt:
  //     'https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg',
  //   name: 'Macbook Pro 16',
  //   amount: 5,
  //   price: 10,
  //   code: 'SKU200500854',
  // },
];

function CartOverview(props) {
  // const { list } = props;
  return (
    // <div className="Cart-View">
    //   <h2 className="font-weight-700">Giỏ hàng của bạn</h2>
    //   <List
    //     itemLayout="vertical"
    //     size="large"
    //     dataSource={list}
    //     renderItem={(item) => (
    //       <Card style={{ width: 300 }}>
    //         <Meta
    //           avatar={
    //             <Avatar style={{ width: 80, height: 50 }} src={item.avt} />
    //           }
    //           title={item.name}
    //           description={`Số lượng: ${item.amount}`}
    //         />
    //         <p className="product-price">
    //           {helpers.formatProductPrice(item.price)}
    //         </p>
    //       </Card>
    //     )}
    //   />
    // </div>

    <div className="Cart-Overview">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={list}
        renderItem={(item) => (
          // <Card style={{ maxWidth: 900 }}>
          //   <Meta
          //     avatar={
          //       <Avatar style={{ width: 80, height: 50 }} src={item.avt} />
          //     }
          //     title={item.name}
          //     description={`Số lượng: ${item.amount}`}
          //   />
          //   <p className="product-price">
          //     {helpers.formatProductPrice(item.price)}
          //   </p>
          // </Card>
          <div className="d-flex justify-content-between bg-white m-b-16">
            {/* Tên, mã sản phẩm */}
            <div>
              <Card style={{ maxWidth: 900 }} bordered={false}>
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
              <p className="product-amount">{`Số lượng: ${item.amount}`}</p>
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
