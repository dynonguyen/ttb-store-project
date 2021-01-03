import { Col, Form, Row, Select } from 'antd';
import React from 'react';

const suffixColor = '#aaa';
const HEADPHONE_TYPES = [
  { type: 0, label: 'Over-ear' },
  { type: 1, label: 'In-ear' },
  { type: 2, label: 'On-ear' },
  { type: 3, label: 'KHT' },
];
const CONNECTION_STD = [
  { type: 0, label: '3.5mm' },
  { type: 1, label: 'bluetooth' },
  { type: 2, label: 'USB' },
  { type: 3, label: 'bluetooth 4.0' },
  { type: 4, label: 'bluetooth 5.0' },
  { type: 5, label: '2.4GHz Wireless' },
];

function Headphone() {
  return (
    <Row gutter={[16, 16]}>
      {/* Loại tai nghe */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="type"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Loại tai nghe *">
            {HEADPHONE_TYPES.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      {/* Chuẩn kết nối  */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="connectionStd"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Chuẩn kết nối  *">
            {CONNECTION_STD.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Headphone;
