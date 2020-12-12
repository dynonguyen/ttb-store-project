import {
  EditOutlined,
  InfoCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Tooltip,
  Upload,
} from 'antd';
import constants from 'constants';
import React, { useRef, useState } from 'react';
import Compressor from 'compressorjs';

import PropTypes from 'prop-types';

function ProductDetail(props) {
  const { onGetDetailDes } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const compFileList = useRef(new Array(5));

  // fn: nén ảnh sản phẩm, type: 0 - avt, type: 1 - picture List
  const onCompressFile = async (file, index) => {
    new Compressor(file, {
      quality: constants.COMPRESSION_RADIO,
      convertSize: constants.COMPRESSION_RADIO_PNG,
      success(fileCompressed) {
        const reader = new FileReader();
        reader.readAsDataURL(fileCompressed);
        reader.onloadend = async () => {
          compFileList.current[index] = reader.result;
        };
      },
      error(err) {
        message.error('Lỗi: ', err);
      },
    });
  };

  // fn: Xử lý submit form
  const onHandleSubmit = (data) => {
    const { desList, title } = data;

    // Kiểm tra danh sách hình ảnh sản phẩm.
    for (let i = 0; i < desList.length; ++i)
      if (!compFileList.current[i]) {
        message.error('Upload đầy đủ hình ảnh');
        return;
      }

    // trả dữ liệu về form product
    const detailDesList = desList.map((item, index) => {
      return { content: item, photo: compFileList.current[index] };
    });

    onGetDetailDes({ title, detailDesList });

    // đóng Modal
    setIsVisible(false);
    setIsAdded(true);
  };

  return (
    <>
      <Col span={12} md={8} xl={6} xxl={4}>
        <Button
          className="w-100"
          size="large"
          icon={isAdded ? <EditOutlined /> : <PlusOutlined />}
          onClick={() => setIsVisible(true)}
          type="dashed">
          {isAdded ? 'Chỉnh sửa ' : 'Thêm '} mô tả chi tiết
        </Button>
      </Col>
      {/* main modal */}
      <Modal
        destroyOnClose={false}
        visible={isVisible}
        width={1000}
        centered
        title="Mô tả chi tiết sản phẩm"
        onCancel={() => setIsVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsVisible(false)}>
            Quay lại
          </Button>,
          <Button
            key="submit"
            htmlType="submit"
            form="detailForm"
            type="primary">
            Submit
          </Button>,
        ]}>
        <Form name="detailForm" onFinish={onHandleSubmit}>
          <Row gutter={[16, 0]}>
            {/* Tiêu đề, tên sp */}
            <Col span={24}>
              <Form.Item
                name="title"
                rules={[
                  { required: true, message: 'Bắt buộc', whitespace: true },
                ]}>
                <Input
                  size="large"
                  placeholder="Tiêu đề, tên sp *"
                  suffix={
                    <Tooltip title="Laptop Apple MacBook 13.3 MPXR2ZP/A">
                      <InfoCircleOutlined style={{ color: '#ccc' }} />
                    </Tooltip>
                  }
                />
              </Form.Item>
            </Col>
            {/* List mô tả */}
            <Col span={24}>
              <Form.List
                name="desList"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 2) {
                        return Promise.reject(
                          new Error('Ít nhất 2 đoạn mô tả'),
                        );
                      }
                    },
                  },
                ]}>
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {/* render des form */}
                    {fields.map((field, index) => (
                      <Row key={index}>
                        <Col span={24}>
                          <Form.Item
                            className="m-b-0"
                            {...field}
                            name={[field.name]}
                            rules={[
                              {
                                required: true,
                                message: 'Bắt buộc',
                                whitespace: true,
                              },
                            ]}>
                            <div className="d-flex">
                              <Input.TextArea
                                className="flex-grow-1"
                                rows={5}
                                placeholder={`Đoạn mô tả ${index + 1} *`}
                                maxLength={2000}
                                showCount
                              />
                              <MinusCircleOutlined
                                style={{
                                  flexBasis: '36px',
                                  alignSelf: 'center',
                                }}
                                onClick={() => {
                                  remove(field.name);
                                  compFileList.current[index] = null;
                                }}
                              />
                            </div>
                          </Form.Item>
                        </Col>
                        <Col span={24} className="m-b-16">
                          <Upload
                            listType="picture"
                            onRemove={() => {
                              compFileList.current[index] = null;
                            }}
                            beforeUpload={(file) => {
                              onCompressFile(file, index);
                              return false;
                            }}>
                            <Button size="large" icon={<UploadOutlined />}>
                              {`Thêm hình ảnh ${index + 1}`}
                            </Button>
                          </Upload>
                        </Col>
                      </Row>
                    ))}

                    {/* Add description button */}
                    <Form.ErrorList errors={errors} />
                    {fields.length < 5 && (
                      <Form.Item>
                        <Button
                          type="dashed"
                          className="w-100"
                          size="large"
                          onClick={() => add()}
                          icon={<PlusOutlined />}>
                          Thêm đoạn mô tả
                        </Button>
                      </Form.Item>
                    )}
                  </>
                )}
              </Form.List>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

// ! Check prop type
ProductDetail.propTypes = {
  onGetDetailDes: PropTypes.func,
};

export default ProductDetail;
