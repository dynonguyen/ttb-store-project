import { Col, Row } from 'antd';
import React from 'react';
import AnnualRevenue from './AnnualRevenue';
import MonthlyRevenue from './MonthlyRevenue';
import TopOrders from './TopOrders';

function Dashboard() {
  return (
    <Row className="p-32" gutter={[32, 32]}>
      {/* doanh thu theo tháng */}
      <Col span={24} xl={12}>
        <div className="bg-white p-12 bor-rad-8 box-sha-home">
          <MonthlyRevenue />
        </div>
      </Col>
      {/* Doanh thu theo năm */}
      <Col span={24} xl={12}>
        <div className="bg-white p-12 bor-rad-8 box-sha-home">
          <AnnualRevenue />
        </div>
      </Col>
      {/* Đơn hàng ở tỉnh nào nhiều nhất */}
      <Col span={24} xl={12}>
        <div className="bg-white p-12 bor-rad-8 box-sha-home">
          <TopOrders />
        </div>
      </Col>
    </Row>
  );
}

export default Dashboard;
