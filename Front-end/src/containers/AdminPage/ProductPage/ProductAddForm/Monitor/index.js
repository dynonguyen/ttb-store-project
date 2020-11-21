import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Form, Input, InputNumber, Row, Select, Tooltip } from 'antd';
import React from 'react';

const suffixColor = '#aaa';
const BG_PLATES = [
  { type: 0, label: 'IPS' },
  { type: 1, label: 'VA' },
  { type: 2, label: 'TN' },
  { type: 3, label: 'PLS' },
  { type: 4, label: 'MVA' },
  { type: 5, label: 'KHT' },
];
const MONITOR_RESOLUTIONS = [
  { type: 0, label: '1920x1080' },
  { type: 1, label: '2560x1440' },
  { type: 2, label: '1366x768' },
  { type: 3, label: '1600x900' },
  { type: 4, label: '3840x2160' },
  { type: 5, label: '2560x1080' },
  { type: 6, label: '3440x1440' },
];

function Monitor() {
  return (
    <Row gutter={[16, 16]}>
      {/* Tấm nền */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="bgPlate"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Tấm nền *">
            {BG_PLATES.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      {/* Độ phân giải */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="resolution"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Độ phân giải *">
            {MONITOR_RESOLUTIONS.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      {/* Kích thước màn hình */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="displaySize"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            maxLength={5}
            size="large"
            placeholder="Kích thước màn hình *"
            suffix={
              <Tooltip title={`24.7"`}>
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Tần số quét */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="frequency"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <InputNumber
            style={{ width: '100%' }}
            step={30}
            size="large"
            min={0}
            max={1000}
            placeholder="Tần số quét *"
          />
        </Form.Item>
      </Col>
      {/* Các cổng kết nối */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="port"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Các cổng kết nối *"
            suffix={
              <Tooltip title="1 x HDMI, 1 x DVI-D, 1 x VGA/D-sub">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Monitor;
