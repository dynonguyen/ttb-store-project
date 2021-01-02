import { Col, Row } from 'antd';
import React from 'react';
import DetailFilter from './DetailFilter';
import './index.scss';
import MenuFilter from './MenuFilter';

function Filter() {
  return (
    <div className="Filter">
      <Row>
        <Col span={2} sm={4} md={6} xl={4}>
          <MenuFilter />
        </Col>
        <Col span={22} sm={20} md={18} xl={20}>
          <DetailFilter />
        </Col>
      </Row>
    </div>
  );
}

export default Filter;
