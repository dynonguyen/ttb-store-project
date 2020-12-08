import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import './index.scss';

function Description(props) {
  return (
    <Row className="Product-Desc bg-white p-16">
      <Col span={24} md={16}>
        <h2 className="font-weight-700">Mô tả sản phẩm</h2>
        <div className="underline-title"></div>
      </Col>
      <Col span={24} md={8}>
        <h2 className="font-weight-700">Thông số kỹ thuật</h2>
        <div className="underline-title"></div>
      </Col>
    </Row>
  );
}

Description.propTypes = {};

export default Description;
