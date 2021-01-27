import { Col, Row } from 'antd';
import React from 'react';
import AnnualRevenue from './AnnualRevenue';
import MonthlyRevenue from './MonthlyRevenue';
function Dashboard() {
  return (
    <Row className="p-32" gutter={[32, 32]}>
      {/* doanh thu theo tháng */}
      <Col span={24} md={12}>
        <MonthlyRevenue />
      </Col>
      {/* Doanh thu theo năm */}
      <Col span={24} md={12}>
        <AnnualRevenue />
      </Col>
    </Row>
  );
}

export default Dashboard;
