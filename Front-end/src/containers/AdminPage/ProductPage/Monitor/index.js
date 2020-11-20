import {
  InfoCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Menu,
  Row,
  Select,
  Tooltip,
  Upload,
} from 'antd';

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
  { type: 0, label: '' },
]

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

    </Row>
  );
}

export default Monitor;
