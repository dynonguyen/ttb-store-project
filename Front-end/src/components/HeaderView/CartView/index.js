import { Card, Avatar, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import helpers from 'helpers';
import './index.scss';

const { Meta } = Card;

function CartView() {
  return (
    <div
      className="cart-view p-8"
      style={{ backgroundColor: '#fff', height: '500', width: '100' }}>
      <div className="cart-items p-8">
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar
                style={{ width: 80, height: 50 }}
                src="https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg"
              />
            }
            title={helpers.reduceProductName(
              'Laptop Apple MacBook Pro 16 2019 (MVVK2SA/A) (Core i9/16GB/1TB SSD/AMD Radeon Pro 5500M/macOS/2kg)',
            )}
            description={helpers.formatProductPrice('50000000')}
          />
        </Card>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar
                style={{ width: 80, height: 50 }}
                src="https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg"
              />
            }
            title={helpers.reduceProductName(
              'Laptop Apple MacBook Pro 16 2019 (MVVK2SA/A) (Core i9/16GB/1TB SSD/AMD Radeon Pro 5500M/macOS/2kg)',
            )}
            description={helpers.formatProductPrice('50000000')}
          />
        </Card>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar
                style={{ width: 80, height: 50 }}
                src="https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg"
              />
            }
            title={helpers.reduceProductName(
              'Laptop Apple MacBook Pro 16 2019 (MVVK2SA/A) (Core i9/16GB/1TB SSD/AMD Radeon Pro 5500M/macOS/2kg)',
            )}
            description={helpers.formatProductPrice('50000000')}
          />
        </Card>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar
                style={{ width: 80, height: 50 }}
                src="https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg"
              />
            }
            title={helpers.reduceProductName(
              'Laptop Apple MacBook Pro 16 2019 (MVVK2SA/A) (Core i9/16GB/1TB SSD/AMD Radeon Pro 5500M/macOS/2kg)',
            )}
            description={helpers.formatProductPrice('50000000')}
          />
        </Card>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar
                style={{ width: 80, height: 50 }}
                src="https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg"
              />
            }
            title={helpers.reduceProductName(
              'Laptop Apple MacBook Pro 16 2019 (MVVK2SA/A) (Core i9/16GB/1TB SSD/AMD Radeon Pro 5500M/macOS/2kg)',
            )}
            description={helpers.formatProductPrice('50000000')}
          />
        </Card>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar
                style={{ width: 80, height: 50 }}
                src="https://admin.thinkpro.vn//backend/uploads/product/color_images/2020/9/5/MacBook-Pro-16-2019.jpg"
              />
            }
            title={helpers.reduceProductName(
              'Laptop Apple MacBook Pro 16 2019 (MVVK2SA/A) (Core i9/16GB/1TB SSD/AMD Radeon Pro 5500M/macOS/2kg)',
            )}
            description={helpers.formatProductPrice('50000000')}
          />
        </Card>
      </div>

      <div className="cart-additional p-8">
        <h3>Tổng tiền: {helpers.formatProductPrice('50000000')}</h3>
        <Link to="/login">
          <Button
            className="m-tb-8 d-block m-lr-auto"
            type="primary"
            size="large">
            Đến giỏ hàng
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CartView;
