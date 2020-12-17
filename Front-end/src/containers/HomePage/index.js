import { Col, Row } from 'antd';
import HeaderView from 'components/HeaderView';
import React from 'react';
import DiscountList from './DiscountList';
import SaleOff from './SaleOff';

function HomePage() {
  return (
    <>
      {/* Carousel cho sale off */}
      <SaleOff />
      {/* Danh sách sản phẩm khuyến mãi */}
      <Row className="container">
        <Col className="m-tb-32" span={24}>
          <DiscountList />
        </Col>
      </Row>
    </>
  );
}

HomePage.propTypes = {};

export default HomePage;
