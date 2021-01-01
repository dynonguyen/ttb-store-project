import {
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
} from 'antd';
import adminApi from 'apis/adminApi';
import constants from 'constants/index';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function EditProductModal(props) {
  const { visible, onClose, product } = props;
  const { _id, code, name, brand, discount, price, stock, type } = product
    ? product
    : {};
  const initValues = { _id, code, name, brand, discount, price, stock, type };
  const [isUpdating, setIsUpdating] = useState(false);

  // event: Sửa chữa sản phẩm
  const onEdit = async (value) => {
    try {
      setIsUpdating(true);
      const response = await adminApi.updateProduct(value);
      if (response && response.status === 200) {
        message.success('Cập nhật thành công');
        onClose(value);
      }
    } catch (error) {
      message.error('Cập nhật thất bại');
    }
    setIsUpdating(false);
  };

  return (
    <Modal
      className="edit-product-modal"
      destroyOnClose={false}
      maskClosable={false}
      visible={visible}
      okText="Cập nhật"
      cancelText="Huỷ bỏ"
      onCancel={onClose}
      okButtonProps={{ form: 'editForm', htmlType: 'submit' }}
      title="Chỉnh sửa thông tin sản phẩm"
      confirmLoading={isUpdating}
      width={1000}
      centered>
      <Form
        initialValues={initValues}
        name="editForm"
        onFinish={(value) => onEdit(value)}>
        <Row gutter={[16, 16]}>
          {/* Id */}
          <Col span={12}>
            <Form.Item name="_id">
              <Input disabled size="large" placeholder="ID" />
            </Form.Item>
          </Col>

          {/* Mã sản phẩm */}
          <Col span={12}>
            <Form.Item
              name="code"
              rules={[
                { required: true, message: 'Bắt buộc', whitespace: true },
              ]}>
              <Input size="large" placeholder="Mã sản phẩm *" />
            </Form.Item>
          </Col>

          {/* Tên sản phẩm */}
          <Col span={12}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Bắt buộc', whitespace: true },
              ]}>
              <Input size="large" placeholder="Tên sản phẩm *" />
            </Form.Item>
          </Col>

          {/* Giá sản phẩm */}
          <Col span={12}>
            <Form.Item
              name="price"
              rules={[{ required: true, message: 'Bắt buộc' }]}>
              <InputNumber
                min={0}
                max={9000000000}
                step={100000}
                className="w-100"
                size="large"
                placeholder="Giá sản phẩm *"
              />
            </Form.Item>
          </Col>

          {/* Loại sản phẩm */}
          <Col span={12}>
            <Form.Item
              name="type"
              rules={[{ required: true, message: 'Bắt buộc' }]}>
              <Select size="large" placeholder="Loại sản phẩm *">
                {constants.PRODUCT_TYPES.map((item, index) => (
                  <Select.Option value={item.type} key={index}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Thương hiệu */}
          <Col span={12}>
            <Form.Item
              name="brand"
              rules={[
                { required: true, message: 'Bắt buộc', whitespace: true },
              ]}>
              <Input size="large" placeholder="Thương hiệu *" />
            </Form.Item>
          </Col>

          {/* Tồn kho */}
          <Col span={12}>
            <Form.Item
              name="stock"
              rules={[{ required: true, message: 'Bắt buộc' }]}>
              <InputNumber
                style={{ width: '100%' }}
                step={1}
                size="large"
                min={0}
                max={100000}
                placeholder="Tồn kho *"
              />
            </Form.Item>
          </Col>

          {/* Mức giảm giá */}
          <Col span={12}>
            <Form.Item
              name="discount"
              rules={[{ required: true, message: 'Bắt buộc' }]}>
              <InputNumber
                style={{ width: '100%' }}
                step={1}
                size="large"
                min={0}
                max={100}
                placeholder="Mức giảm giá *"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

EditProductModal.propTypes = {
  onClose: PropTypes.func,
  product: PropTypes.object,
  visible: PropTypes.bool,
};

export default EditProductModal;
