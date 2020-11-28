import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Form, Input, InputNumber, Row, Select, Tooltip } from 'antd';
import React from 'react';
const suffixColor = '#aaa';
const CPU_SERIES = [
  { type: 0, label: 'Core i3' },
  { type: 1, label: 'Core i5' },
  { type: 2, label: 'Core i7' },
  { type: 3, label: 'Core i9' },
  { type: 4, label: 'Ryzen 3' },
  { type: 5, label: 'Ryzen 5' },
  { type: 6, label: 'Ryzen 7' },
  { type: 7, label: 'Pentium' },
  { type: 8, label: 'Celeron' },
];

function Laptop() {
  return (
    <Row gutter={[16, 16]}>
      {/*thương hiệu chip*/}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="chipBrand"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Nhãn hiệu của chip cpu *"
            suffix={
              <Tooltip title="Intel">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Số lương core */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="processorCount"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <InputNumber
            style={{ width: '100%' }}
            step={2}
            size="large"
            min={0}
            max={32}
            placeholder="Số Lượng core *"
          />
        </Form.Item>
      </Col>
      {/* series CPU */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="series"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <Select size="large" placeholder="Chọn series chip *">
            {CPU_SERIES.map((item, index) => (
              <Select.Option value={item.type} key={index}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      {/* chi tiết chip cpu */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="detail"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Chi tiết của cpu *"
            suffix={
              <Tooltip title="9750H up to 4.5 GHz">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* kích thước màn hình */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="displaySize"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Kích thước màn hình *"
            suffix={
              <Tooltip title={`15.6" (1920 x 1080), 60Hz`}>
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Card màn hình */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="display"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Card màn hình *"
            suffix={
              <Tooltip title="NVIDIA GeForce RTX 2080 Super 8GB GDDR6">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Hệ điều hành */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="operating"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Hệ điều hành *"
            suffix={
              <Tooltip title="Windows 10 Pro 64-bit">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Ổ cứng */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="disk"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Ổ cứng *"
            suffix={
              <Tooltip title="1TB SSD M.2 NVMe">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* RAM */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="ram"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="RAM *"
            suffix={
              <Tooltip title="2 x 16GB DDR4 2933MHz">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Pin */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="pin"
          rules={[{ required: true, message: 'Bắt buộc', whitespace: true }]}>
          <Input
            size="large"
            placeholder="Dung lượng pin *"
            suffix={
              <Tooltip title="4 cell 84 Wh Pin liền">
                <InfoCircleOutlined style={{ color: suffixColor }} />
              </Tooltip>
            }
          />
        </Form.Item>
      </Col>
      {/* Khối lượng */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <Form.Item
          name="weight"
          rules={[{ required: true, message: 'Bắt buộc' }]}>
          <InputNumber
            style={{ width: '100%' }}
            step={1}
            size="large"
            min={0}
            max={10}
            placeholder="Khối lượng *"
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Laptop;
