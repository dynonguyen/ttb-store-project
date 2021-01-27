import { Col, Row } from 'antd';
import React from 'react';
import MonthlyRevenue from './MonthlyRevenue';
function Dashboard() {
  return (
    <Row className="p-32" gutter={[16, 16]}>
      {/* doanh thu theo tháng */}
      <Col span={12}>
        <MonthlyRevenue />
      </Col>
    </Row>
  );
}

export default Dashboard;
