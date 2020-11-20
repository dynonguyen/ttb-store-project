import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Form, Input, InputNumber, Row, Tooltip } from 'antd';
import React from 'react';
const suffixColor = '#aaa';

function Camera() {
  return (
    <Row gutter={[16, 16]}>
      {/* Khẩu độ */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="aperture"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Khẩu độ *"
            suffix={
              <Tooltip title="f/4-5.6 IS STM">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Tiêu cự */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="focalLength"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Tiêu cự *"
            suffix={
              <Tooltip title="35mm">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Cảm biến */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="sensor"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Cảm biến *"
            suffix={
              <Tooltip title="CMOS APS-C 24.2MP">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Số điểm ảnh */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="numberOfPixel"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <InputNumber
            style={{ width: '100%' }}
            step={1}
            size="large"
            min={0}
            max={1000}
            placeholder="Số điểm ảnh (24.2) *"
          />
        </Form.Item>
      </Col>
      {/* Độ phân giải */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="resolution"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Độ phân giải *"
            suffix={
              <Tooltip title="6000 x 4000 (L) 3984 x 2656 (M) 2976 x 1984 (S1) 2400 x 1600 (S2) 6000 x 4000 (RAW)">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Camera;
