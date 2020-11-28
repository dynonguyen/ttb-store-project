import { Col, InputNumber, Row, Form, Input, Select } from 'antd';
import React from 'react';
const suffixColor = '#aaa';

// 0 - 2.5", 1 - 3.5", 2 - M.2 2880, 3 - M.2
const SIZE_OPTIONS = [
  {
    type: 0,
    label: '2.5"',
  },
  { type: 1, label: '3.5"' },
  { type: 2, label: 'M.2 2880' },
  { type: 3, label: 'M.2' },
];
// kiểu ổ cứng 0 - HDD, 1 - SSD
const DISK_TYPES = [
  { type: 0, label: 'HDD' },
  { type: 1, label: 'SSD' },
];
// 0 - SATA 3, 1 - USB 3.0, 2 - M.2 SATA, 3 - M.2 NVMe
const CONNECTION_STD = [
  { type: 0, label: 'SATA' },
  { type: 1, label: 'USB 3.0' },
  { type: 2, label: 'M.2 SATA' },
  { type: 3, label: 'M.2 NVMe' },
];

function Disk() {
  return (
    <Row gutter={[16, 16]}>
      {/* Dung lượng */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="capacity"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <InputNumber
            style={{ width: '100%' }}
            step={128}
            size="large"
            min={0}
            max={10000}
            placeholder="Dung lượng (GB) *"
          />
        </Form.Item>
      </Col>
      {/* Kích cỡ */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="size"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Kích cỡ *">
            {SIZE_OPTIONS.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
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
      {/* Loại ổ cứng */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="type"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Loại ổ cứng *">
            {DISK_TYPES.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      {/* Tốc độ đọc */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item name="readSpeed">
          <InputNumber
            style={{ width: '100%' }}
            step={100}
            size="large"
            min={0}
            max={10000}
            placeholder="Tốc độ đọc (MB/s)"
          />
        </Form.Item>
      </Col>
      {/* Tốc độ ghi */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item name="writeSpeed">
          <InputNumber
            style={{ width: '100%' }}
            step={100}
            size="large"
            min={0}
            max={10000}
            placeholder="Tốc độ ghi (MB/s)"
          />
        </Form.Item>
      </Col>
      {/* RPM (HDD) */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item name="rpm">
          <InputNumber
            style={{ width: '100%' }}
            step={100}
            size="large"
            min={0}
            max={100000}
            placeholder="RPM (* HDD)"
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Disk;
