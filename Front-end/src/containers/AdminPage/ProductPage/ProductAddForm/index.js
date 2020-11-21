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
  message,
  Row,
  Select,
  Tooltip,
  Upload,
} from 'antd';
import Compressor from 'compressorjs';
import constants from 'constants/index';
import React, { useRef, useState } from 'react';
import BackupCharger from './BackupCharger';
import Camera from './Camera';
import Disk from './Disk';
import Display from './Display';
import Headphone from './Headphone';
import Keyboard from './Keyboard';
import Laptop from './Laptop';
import MainBoard from './MainBoard';
import Mobile from './Mobile';
import Monitor from './Monitor';
import Mouse from './Mouse';
import Ram from './Ram';
import Router from './Router';
import Speaker from './Speaker';
import Webcam from './Webcam';
const suffixColor = '#aaa';

function ProductAddForm() {
  const [form] = Form.useForm();
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [typeSelected, setTypeSelected] = useState(-1);
  // avt file chưa nén
  const [avtFileList, setAvtFileList] = useState([]);
  // avt đã nén
  const [avatar, setAvatar] = useState(null);
  // danh sách hình ảnh sp chưa nén
  const [fileList, setFileList] = useState([]);
  // danh sách hình ảnh sp đã nén
  const fileCompressedList = useRef([]);

  // fn: xử lý khi chọn loại sản phẩm
  const onProductTypeChange = (value) => {
    if (!isTypeSelected) setIsTypeSelected(true);
    setTypeSelected(value);
  };

  // fn: Render ra component tương ứng khi chọn loại sp
  const onRenderProduct = (value) => {
    switch (value) {
      case 0:
        return <Laptop />;
      case 1:
        return <Disk />;
      case 2:
        return <Display />;
      case 3:
        return <MainBoard />;
      case 4:
        return <Ram />;
      case 5:
        return <Mobile />;
      case 6:
        return <BackupCharger />;
      case 7:
        return <Headphone />;
      case 8:
        return <Keyboard />;
      case 9:
        return <Monitor />;
      case 10:
        return <Mouse />;
      case 11:
        return <Router />;
      case 12:
        return <Speaker />;
      case 13:
        return <Camera />;
      case 14:
        return <Webcam />;
      default:
        break;
    }
  };

  // fn: nén ảnh sản phẩm, type: 0 - avt, type: 1 - picture List
  const onCompressFile = async (file, type = 0) => {
    new Compressor(file, {
      quality: constants.COMPRESSION_RADIO,
      convertSize: constants.COMPRESSION_RADIO_PNG,
      success(fileCompressed) {
        const reader = new FileReader();
        reader.readAsDataURL(fileCompressed);
        reader.onloadend = async () => {
          if (type === 0) setAvatar(reader.result);
          else if (fileCompressedList.current.length < 10)
            fileCompressedList.current.push({
              data: reader.result,
              uid: file.uid,
            });
        };
      },
      error(err) {
        message.error('Lỗi: ', err);
      },
    });
  };

  // fn: Reset form
  const onResetForm = () => {
    form.resetFields();
    fileCompressedList.current = [];
    setAvtFileList([]);
    setAvatar(null);
    setFileList([]);
  };

  // fn: xử lý submit form
  const onSubmitForm = async (data) => {
    try {
      if (!avatar) {
        message.error('Thêm avatar !', 2);
        return;
      }
      console.log({
        ...data,
        avatar,
        productPicList: fileCompressedList.current,
      });
    } catch (error) {
      throw error;
    }
  };

  // returning...
  return (
    <div className="Product-Add-Form">
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
            name="form"
            form={form}
            onFinish={onSubmitForm}
            onFinishFailed={() => message.error('Lỗi. Kiểm tra lại form')}>
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
                <Upload
                  listType="picture"
                  fileList={avtFileList}
                  onChange={({ fileList }) => {
                    if (avtFileList.length < 1) setAvtFileList(fileList);
                  }}
                  onRemove={() => setAvatar(null)}
                  beforeUpload={(file) => {
                    onCompressFile(file, 0);
                    return false;
                  }}>
                  <Button
                    disabled={avatar !== null ? true : false}
                    className="w-100 h-100"
                    icon={<UploadOutlined />}>
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
                  {onRenderProduct(typeSelected)}
                </Col>
              )}

              {/* // Note: hình ảnh sản phẩm */}
              <Col span={24}>
                <h2 className="m-b-10">
                  Hình ảnh của sản phẩm (Tối đa 10 sản phẩm)
                </h2>

                <Upload
                  listType="picture-card"
                  multiple={true}
                  onRemove={(file) => {
                    fileCompressedList.current = fileCompressedList.current.filter(
                      (item) => item.uid !== file.uid,
                    );
                  }}
                  fileList={fileList}
                  onChange={({ fileList }) => setFileList(fileList)}
                  beforeUpload={(file) => {
                    onCompressFile(file, 1);
                    return false;
                  }}>
                  {fileList.length < 10 && '+ Thêm ảnh'}
                </Upload>
              </Col>

              {/* submit button */}
              <Col span={24} className="d-flex justify-content-end">
                <Button size="large" type="primary" htmlType="submit">
                  Thêm sản phẩm
                </Button>
                <Button
                  className="m-l-20"
                  size="large"
                  danger
                  type="primary"
                  onClick={onResetForm}>
                  Reset Form
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </div>
  );
}

export default ProductAddForm;
