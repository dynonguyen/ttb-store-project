import { Menu } from 'antd';
import React from 'react';
import ProductAddForm from './ProductAddForm';
import './index.scss';
import ProductDetail from './ProductAddForm/ProductDetailModal';

function ProductPage() {
  // returning...
  return (
    <div className="Admin-Product-Page">
      {/* menu */}
      <Menu
        theme="dark"
        className="nav-menu"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ backgroundColor: 'rgb(5, 5, 15)' }}>
        <Menu.Item key="1">Xem</Menu.Item>
        <Menu.Item key="2">Thêm</Menu.Item>
      </Menu>

      <ProductAddForm />
    </div>
  );
}

export default ProductPage;
