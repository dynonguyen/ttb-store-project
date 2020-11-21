import { Col, Form, InputNumber, Row, Select } from 'antd';
import React from 'react';

const MANUFACTURERS = [
  { type: 0, label: 'NVIDIA' },
  { type: 1, label: 'AMD' },
];

function Display() {
  return (
    <Row gutter={[16, 16]}>
      {/* Dung lượng (GB) */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="capacity"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <InputNumber
            style={{ width: '100%' }}
            step={1}
            size="large"
            min={0}
            max={100}
            placeholder="Dung lượng (GB) *"
          />
        </Form.Item>
      </Col>
      {/* Nhà sản xuất */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="manufacturer"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Nhà sản xuất *">
            {MANUFACTURERS.map((item, index) => (
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

export default Display;
