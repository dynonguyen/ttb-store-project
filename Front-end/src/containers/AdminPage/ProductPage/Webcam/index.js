import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Form, Input, Row, Select, Tooltip } from 'antd';
import React from 'react';
const suffixColor = '#aaa';
const CONNECTION_STD = [
  { type: 0, label: 'USB' },
  { type: 1, label: 'USB 2.0' },
];
const RESOLUTION = [
  { type: 0, label: '720p' },
  { type: 1, label: '1280x720' },
  { type: 2, label: '1920x1080' },
];

function Webcam() {
  return (
    <Row gutter={[16, 16]}>
      {/* Chuẩn kết nối */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="connectionStd"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Chuẩn kết nối *">
            {CONNECTION_STD.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      {/* Tốc độ khung hình */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="frameSpeed"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Tốc độ khung hình *"
            suffix={
              <Tooltip title="30fps">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Độ phân giải */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="resolution"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Độ phân giải *">
            {RESOLUTION.map((item, index) => (
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

export default Webcam;
