import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import productApi from 'apis/productApi';
import ProductView from 'components/ProductView';
import PropTypes from 'prop-types';
import React from 'react';

function ProductItem(props) {
  // Các nút action
  const action = [
    <Button
      key="0"
      onClick={() => removeProduct(props.id)}
      className="m-r-8"
      danger
      icon={<DeleteOutlined />}>
      Xoá
    </Button>,
    <Button
      key="1"
      type="primary"
      onClick={() => message.warning('Tính năng đang được cập nhật.')}
      icon={<EditOutlined />}>
      Sửa
    </Button>,
  ];

  // fn: hàm xoá sản phẩm
  const removeProduct = async (id) => {
    try {
      const response = await productApi.removeProduct(id);
      if (response) {
        message.success(`Xoá thành công sản phẩm ${id}`);
        // xoá sản phẩm ở state trên client
        props.onDelete(id);
      }
    } catch (error) {
      message.error('Xoá sản phẩm thất bại. Thử lại');
    }
  };

  return <ProductView {...props} action={action} />;
}

ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ProductItem;
