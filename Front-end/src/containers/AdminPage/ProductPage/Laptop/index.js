import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import InputField from 'components/Custom/Field/InputField';
import SelectField from 'components/Custom/Field/SelectField';
import { FastField } from 'formik';
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
      {/* thương hiệu của chip */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="chipBrand"
          component={InputField}
          className="input-form-common"
          placeholder="Nhãn hiệu của chip *"
          size="large"
          suffix={
            <Tooltip title="Intel">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* số lượng core */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="processorCount"
          component={InputField}
          className="input-form-common"
          placeholder="Số lượng core *"
          size="large"
          suffix={
            <Tooltip title="8">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* series cpu */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="series"
          component={SelectField}
          options={CPU_SERIES}
          className="input-form-common"
          placeholder="Chọn series chip *"
          size="large"
        />
      </Col>
      {/* chi tiết của chip */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="details"
          component={InputField}
          className="input-form-common"
          placeholder="Chi tiết chip cpu *"
          size="large"
          suffix={
            <Tooltip title="9750H up to 4.5 GHz">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* kích thước màn hình */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="displaySize"
          component={InputField}
          className="input-form-common"
          placeholder="Kích thước màn hình *"
          size="large"
          suffix={
            <Tooltip title={`15.6" (1920 x 1080), 60Hz`}>
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* card màn hình */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="display"
          component={InputField}
          className="input-form-common"
          placeholder="Card màn hình *"
          size="large"
          suffix={
            <Tooltip title="NVIDIA GeForce RTX 2080 Super 8GB GDDR6">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* hệ điều hành */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="operating"
          component={InputField}
          className="input-form-common"
          placeholder="Hệ điều hành *"
          size="large"
          suffix={
            <Tooltip title="Windows 10 Pro 64-bit">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* ổ cứng */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="disk"
          component={InputField}
          className="input-form-common"
          placeholder="Ổ cứng *"
          size="large"
          suffix={
            <Tooltip title="1TB SSD M.2 NVMe">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* RAM */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="ram"
          component={InputField}
          className="input-form-common"
          placeholder="RAM *"
          size="large"
          suffix={
            <Tooltip title="2 x 16GB DDR4 2933MHz">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* pin */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="pin"
          component={InputField}
          className="input-form-common"
          placeholder="Dung lượng pin *"
          size="large"
          suffix={
            <Tooltip title="4 cell 84 Wh Pin liền">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
      {/* khối lượng */}
      <Col span={12} md={8} xl={6} xxl={4}>
        <FastField
          name="weight"
          component={InputField}
          className="input-form-common"
          placeholder="Khối lượng *"
          size="large"
          suffix={
            <Tooltip title="2.3">
              <InfoCircleOutlined style={{ color: suffixColor }} />
            </Tooltip>
          }
        />
      </Col>
    </Row>
  );
}

export default Laptop;
