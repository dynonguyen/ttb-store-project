import {
  InfoCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button, Col, Menu, Row, Select, Tooltip, Upload } from 'antd';
import InputField from 'components/Custom/Field/InputField';
import constants from 'constants/index';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import Laptop from './Laptop';
import './index.scss';

// Note: Constant local
const suffixColor = '#aaa';
const initialValue = {
  code: '',
  name: '',
  price: null,
  stock: null,
  brand: '',
};
// validate form
const validationSchema = Yup.object().shape({
  code: Yup.string()
    .trim()
    .required('Bắt buộc nhập !')
    .max(30, 'Tối đa 30 ký tự'),
  name: Yup.string()
    .trim()
    .required('Bắt buộc'),
  price: Yup.number()
    .required('Bắt buộc')
    .min(0)
    .max(1000000000, 'số quá lớn'),
  stock: Yup.number()
    .required('Bắt buộc')
    .min(0)
    .max(100000, 'số quá lớn'),
  brand: Yup.string()
    .trim()
    .required('Bắt buộc'),
  warranty: Yup.number().required('Bắt buộc'),

  // Note: laptop
  chipBrand: Yup.string()
    .trim()
    .required('Bắt buộc'),
  processorCount: Yup.number().required('Bắt buộc'),
  series: Yup.number().required('Bắt buộc'),
  details: Yup.string().trim(),
  displaySize: Yup.string()
    .trim()
    .required('Bắt buộc'),
  display: Yup.string()
    .trim()
    .required('Bắt buộc'),
  operating: Yup.string()
    .trim()
    .required('Bắt buộc'),
  disk: Yup.string()
    .trim()
    .required('Bắt buộc'),
  ram: Yup.string()
    .trim()
    .required('Bắt buộc'),
  pin: Yup.string()
    .trim()
    .required('Bắt buộc'),
  weight: Yup.number()
    .required('Bắt buộc')
    .min(0, 'Số âm')
    .max(100, 'Số quá lớn'),
});

function ProductPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setTypeSelected(value);
  };

  // fn: handle submit
  const onAddProduct = async (product) => {
    try {
      console.log('DEBUG: ', product);
    } catch (error) {
      throw error;
    }
  };

  //returning...
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
        placeholder="Loại sản phẩm">
        {constants.PRODUCT_TYPES.map((item, index) => (
          <Select.Option value={item.type} key={index}>
            {item.label}
          </Select.Option>
        ))}
      </Select>

      {/* các thông số cơ bản */}
      {typeSelected >= 0 && (
        <div className="p-20">
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onAddProduct}>
            {(formikProps) => {
              return (
                <Form>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <h2>Thông tin cơ bản sản phẩm</h2>
                    </Col>
                    {/* // Note: thông tin cơ bản của 1 sản phẩm */}
                    {/* mã sản phẩm */}
                    <Col span={12} md={8} xl={6} xxl={4}>
                      <FastField
                        name="code"
                        component={InputField}
                        className="input-form-common"
                        placeholder="Mã sản phẩm *"
                        size="large"
                        suffix={
                          <Tooltip title="SKU200500854">
                            <InfoCircleOutlined
                              style={{ color: suffixColor }}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                    {/* tên sản phẩm */}
                    <Col span={12} md={8} xl={6} xxl={4}>
                      <FastField
                        name="name"
                        component={InputField}
                        className="input-form-common"
                        placeholder="Tên sản phẩm *"
                        size="large"
                        suffix={
                          <Tooltip title="Laptop APPLE MacBook Pro 2020">
                            <InfoCircleOutlined
                              style={{ color: suffixColor }}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                    {/* giá sản phẩm */}
                    <Col span={12} md={8} xl={6} xxl={4}>
                      <FastField
                        name="price"
                        component={InputField}
                        className="input-form-common"
                        placeholder="Giá *"
                        size="large"
                        suffix={
                          <Tooltip title="28500000">
                            <InfoCircleOutlined
                              style={{ color: suffixColor }}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                    {/* số hàng tồn kho */}
                    <Col span={12} md={8} xl={6} xxl={4}>
                      <FastField
                        name="stock"
                        component={InputField}
                        className="input-form-common"
                        placeholder="Số lượng hàng tồn kho *"
                        size="large"
                        suffix={
                          <Tooltip title="20">
                            <InfoCircleOutlined
                              style={{ color: suffixColor }}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                    {/* thương hiệu */}
                    <Col span={12} md={8} xl={6} xxl={4}>
                      <FastField
                        name="brand"
                        component={InputField}
                        className="input-form-common"
                        placeholder="Thương hiệu *"
                        size="large"
                        suffix={
                          <Tooltip title="Apple">
                            <InfoCircleOutlined
                              style={{ color: suffixColor }}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                    {/* bảo hành */}
                    <Col span={12} md={8} xl={6} xxl={4}>
                      <FastField
                        name="warranty"
                        component={InputField}
                        className="input-form-common"
                        placeholder="Thời gian bảo hành *"
                        size="large"
                        suffix={
                          <Tooltip title="12 (theo tháng)">
                            <InfoCircleOutlined
                              style={{ color: suffixColor }}
                            />
                          </Tooltip>
                        }
                      />
                    </Col>
                    {/* avatar */}
                    <Col span={12} md={8} xl={6} xxl={4}>
                      <Upload>
                        <Button
                          className="w-100 h-100"
                          icon={<UploadOutlined />}>
                          Upload Avatar
                        </Button>
                      </Upload>
                    </Col>
                    {/* mô tả */}
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
                    <Col span={24}>
                      <h2>
                        Thông tin chi tiết cho&nbsp;
                        <b>{constants.PRODUCT_TYPES[typeSelected].label}</b>
                      </h2>
                    </Col>
                    <Col span={24}>
                      <Laptop />
                    </Col>

                    {/* // Note: hình ảnh sản phẩm */}
                    <Col span={24}>
                      <h2>Hình ảnh của sản phẩm</h2>
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
                    {/* Button submit */}
                    <Col span={24}>
                      <Button
                        htmlType="submit"
                        size="large"
                        type="primary"
                        loading={isSubmitting}>
                        Thêm sản phẩm
                      </Button>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
