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
import constants from 'constants/index';
import React, { useState } from 'react';
import Disk from './Disk';
import Laptop from './Laptop';
import './index.scss';

const suffixColor = '#aaa';

function ProductPage() {
  const [isTypeSelected, setIsTypeSelected] = useState(true);
  const [typeSelected, setTypeSelected] = useState(0);
  const [fileList, setFileList] = useState([]);

  // fn: preview ảnh upload
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  // fn: xử lý khi chọn loại sản phẩm
  const onProductTypeChange = (value) => {
    if (!isTypeSelected) setIsTypeSelected(true);
    setTypeSelected(value);
  };

  // fn: xử lý submit form
  const onSubmitForm = async (data) => {
    try {
      console.log(data);
      return null;
    } catch (error) {
      throw error;
    }
  };

  // fn: Xử lý khi form sai
  const onSubmitFormFailed = async (data) => {
    try {
      console.log('%cERROR: ', 'color: red; font-size: 24px', data);
      return null;
    } catch (error) {
      throw error;
    }
  };

  // returning...
  return (
    <div className="Admin-Product-Page">
      {/* menu */}
      <Menu
        theme="dark"
        className="nav-menu"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ backgroundColor: 'rgb(5, 5, 15)' }}>
        <Menu.Item key="1">Xem</Menu.Item>
        <Menu.Item key="2">Thêm</Menu.Item>
      </Menu>

      <h1 className="t-center">
        <b>Thêm sản phẩm</b>
      </h1>

      {/* chọn loại sản phẩm */}
      <Select
        className="m-l-20"
        size="large"
        style={{ width: 250 }}
        onChange={onProductTypeChange}
        placeholder="Chọn loại sản phẩm *">
        {constants.PRODUCT_TYPES.map((item, index) => (
          <Select.Option value={item.type} key={index}>
            {item.label}
          </Select.Option>
        ))}
      </Select>

      {/* form thông tin sản phẩm */}
      {isTypeSelected && (
        <div className="p-20">
          <Form
            name="laptop-form"
            onFinish={onSubmitForm}
            onFinishFailed={onSubmitFormFailed}>
            {/* các thông số cơ bản */}
            <Row gutter={[16, 16]}>
              {/* // Note: tổng quan một sản phẩm */}
              <Col span={24}>
                <h2>Thông tin cơ bản sản phẩm</h2>
              </Col>
              {/* mã sản phẩm */}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Form.Item
                  name="code"
                  rules={[
                    { required: true, message: 'Bắt buộc', whitespace: true },
                  ]}>
                  <Input
                    size="large"
                    placeholder="Mã sản phẩm *"
                    suffix={
                      <Tooltip title="SKU200500854">
                        <InfoCircleOutlined style={{ color: suffixColor }} />
                      </Tooltip>
                    }
                  />
                </Form.Item>
              </Col>
              {/* tên sản phẩm */}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: 'Bắt buộc', whitespace: true },
                  ]}>
                  <Input
                    size="large"
                    placeholder="Tên sản phẩm *"
                    suffix={
                      <Tooltip title="Laptop Apple MacBook Air 13 2019 MVFM2SA/A (Core i5/8GB/128GB SSD/UHD 617/macOS/1.3 kg)">
                        <InfoCircleOutlined style={{ color: suffixColor }} />
                      </Tooltip>
                    }
                  />
                </Form.Item>
              </Col>
              {/* giá sản phẩm */}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Form.Item
                  name="price"
                  rules={[{ required: true, message: 'Bắt buộc' }]}>
                  <InputNumber
                    style={{ width: '100%' }}
                    step={10000}
                    size="large"
                    placeholder="Giá *"
                    min={0}
                    max={1000000000}
                  />
                </Form.Item>
              </Col>
              {/* số hang tồn kho */}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Form.Item
                  name="stock"
                  rules={[{ required: true, message: 'Bắt buộc' }]}>
                  <InputNumber
                    style={{ width: '100%' }}
                    step={5}
                    size="large"
                    min={0}
                    max={100000}
                    placeholder="Số lượng hàng tồn kho *"
                  />
                </Form.Item>
              </Col>
              {/* thương hiệu */}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Form.Item
                  name="brand"
                  rules={[
                    { required: true, message: 'Bắt buộc', whitespace: true },
                  ]}>
                  <Input
                    size="large"
                    placeholder="Thương hiệu *"
                    suffix={
                      <Tooltip title="Apple">
                        <InfoCircleOutlined style={{ color: suffixColor }} />
                      </Tooltip>
                    }
                  />
                </Form.Item>
              </Col>
              {/*Thời gian bảo hành*/}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Form.Item
                  name="warranty"
                  rules={[{ required: true, message: 'Bắt buộc' }]}>
                  <InputNumber
                    style={{ width: '100%' }}
                    step={6}
                    size="large"
                    min={0}
                    max={240}
                    placeholder="Tg bảo hành (Theo tháng) *"
                  />
                </Form.Item>
              </Col>
              {/* avatar */}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Upload>
                  <Button className="w-100 h-100" icon={<UploadOutlined />}>
                    Upload Avatar
                  </Button>
                </Upload>
              </Col>
              {/* mô tả chi tiết */}
              <Col span={12} md={8} xl={6} xxl={4}>
                <Button
                  className="w-100"
                  size="large"
                  icon={<PlusOutlined />}
                  type="dashed">
                  Thêm mô tả chi tiết
                </Button>
              </Col>

              {/* // Note: chi tiết một sản phẩm */}
              {isTypeSelected && (
                <Col span={24}>
                  <h2 className="m-b-10">
                    Thông tin chi tiết cho&nbsp;
                    <b>{constants.PRODUCT_TYPES[typeSelected].label}</b>
                  </h2>
                  <Disk />
                </Col>
              )}

              {/* // Note: hình ảnh sản phẩm */}
              <Col span={24}>
                <h2 className="m-b-10">Hình ảnh của sản phẩm</h2>
                <Upload
                  listType="picture-card"
                  multiple={true}
                  fileList={fileList}
                  onChange={({ fileList: newFileList }) => {
                    setFileList(newFileList);
                  }}
                  onPreview={onPreview}>
                  {fileList.length < 10 && '+ Thêm ảnh'}
                </Upload>
              </Col>

              {/* submit button */}
              <Col span={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Thêm sản phẩm
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
