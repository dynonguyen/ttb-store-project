import { Col, Form, Row, Select } from 'antd';
import React from 'react';

const MOUSE_TYPES = [
  { type: 0, label: 'Có dây' },
  { type: 1, label: 'Không dây' },
];

const MOUSE_LEDS = [
  { type: true, label: 'Có led' },
  { type: false, label: 'Không Led' },
];

function Mouse() {
  return (
    <Row gutter={[16, 16]}>
      {/* Loại Chuột */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="type"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Loại Chuột *">
            {MOUSE_TYPES.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      {/* Đèn Led */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="isLed"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Đèn Led *">
            {MOUSE_LEDS.map((item, index) => (
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

export default Mouse;
