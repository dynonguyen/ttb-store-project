import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { message, Pagination, Table, Tooltip } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import adminApi from 'apis/adminApi';
import productApi from 'apis/productApi';
import helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import EditProductModal from './EditProductModal';

function generateFilterType() {
  let result = [];
  for (let i = 0; i < 15; ++i) {
    result.push({ value: i, text: helpers.convertProductType(i) });
  }
  return result;
}

function SeeProduct() {
  const [editModal, setEditModal] = useState({ visible: false, product: null });
  const [modalDel, setModalDel] = useState({ visible: false, _id: '' });
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 10;

  // event: xoá sản phẩm
  const onDelete = async (_id) => {
    try {
      const response = await adminApi.removeProduct(_id);
      if (response && response.status === 200) {
        message.success('Xoá thành công.');
        const newList = list.filter((item) => item._id !== _id);
        setList(newList);
        setTotal(total - 1);
      }
    } catch (error) {
      message.error('Xoá thất bại, thử lại !');
    }
  };

  // event: cập nhật sản phẩm
  const onCloseEditModal = (newProduct) => {
    const newList = list.map((item) =>
      item._id !== newProduct._id ? item : { ...item, ...newProduct },
    );
    setList(newList);
    setEditModal({ visible: false });
  };

  // event: Lấy danh sách sản phẩm
  useEffect(() => {
    let isSubscribe = true;
    async function getProductList() {
      try {
        const response = await productApi.getAllProducts(page, perPage);
        if (response && isSubscribe) {
          const { data } = response.data;
          const list = data.map((item, index) => {
            return { ...item, key: index };
          });
          setList(list);
          setTotal(response.data.count);
        }
      } catch (error) {
        message.error('Lấy danh sách sản phẩm thất bại.');
      }
    }
    getProductList();

    return () => {
      isSubscribe = false;
    };
  }, [page]);

  // Cột của bảng
  const columns = [
    {
      title: 'Mã',
      key: 'code',
      dataIndex: 'code',
      render: (code, data) => (
        <a target="blank" href={`/product/${data._id}`}>
          {code}
        </a>
      ),
    },
    {
      title: 'Tên',
      key: 'name',
      dataIndex: 'name',
      render: (name) => (
        <Tooltip title={name}>{helpers.reduceProductName(name, 40)}</Tooltip>
      ),
    },
    {
      title: 'Giá',
      key: 'price',
      dataIndex: 'price',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.price - b.price,
      render: (price) => (
        <h3 style={{ color: '#4F55C5' }}>
          {helpers.formatProductPrice(price)}
        </h3>
      ),
    },
    {
      title: 'Loại',
      key: 'type',
      dataIndex: 'type',
      filters: generateFilterType(),
      onFilter: (value, record) => record.type === value,
      render: (type) => helpers.convertProductType(type),
    },
    {
      title: 'Thương hiệu',
      key: 'brand',
      dataIndex: 'brand',
      render: (brand) => (
        <Tooltip title={brand}>{helpers.reduceProductName(brand, 40)}</Tooltip>
      ),
    },
    {
      title: 'Tồn kho',
      key: 'stock',
      dataIndex: 'stock',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: 'Mức giảm giá',
      key: 'discount',
      dataIndex: 'discount',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.discount - b.discount,
      render: (discount) => `${discount} %`,
    },
    {
      title: 'Đánh giá',
      key: 'rate',
      dataIndex: 'rate',
      render: (rate) => helpers.calStar(rate).toFixed(1),
    },
    {
      title: 'Hành động',
      key: 'actions',
      fixed: 'right',
      width: 100,
      render: (text) => (
        <>
          <DeleteOutlined
            onClick={() => setModalDel({ visible: true, _id: text._id })}
            className="m-r-8 action-btn-product"
            style={{ color: 'red' }}
          />
          <Tooltip title="Chỉnh sửa" placement="left">
            <EditOutlined
              onClick={() => {
                setEditModal({ visible: true, product: { ...text } });
              }}
              className="m-r-8 action-btn-product"
              style={{ color: '#444' }}
            />
          </Tooltip>

          <Tooltip title="Xem chi tiết" placement="left">
            <a target="blank" href={`/product/${text._id}`}>
              <EyeOutlined
                className="action-btn-product"
                style={{ color: '#444' }}
              />
            </a>
          </Tooltip>
        </>
      ),
    },
  ];

  // rendering ...
  return (
    <>
      {/* modal confirm delete product */}
      <Modal
        title="Xác nhận xoá sản phẩm"
        visible={modalDel.visible}
        onOk={() => {
          onDelete(modalDel._id);
          setModalDel({ visible: false, _id: false });
        }}
        onCancel={() => setModalDel({ visible: false, _id: false })}
        okButtonProps={{ danger: true }}
        okText="Xoá"
        cancelText="Huỷ bỏ">
        <WarningOutlined style={{ fontSize: 28, color: '#F7B217' }} />
        <b> Không thể khôi phục được, bạn có chắc muốn xoá ?</b>
      </Modal>
      {/* table show product list */}
      <Table
        pagination={false}
        className="admin-see-product"
        columns={columns}
        dataSource={list}
      />
      {/* pagination */}
      <Pagination
        className="p-tb-32 t-center"
        current={page}
        onChange={(p) => setPage(p)}
        showSizeChanger={false}
        total={total}
        pageSize={perPage}
      />
      {/* edit product modal */}
      <EditProductModal
        visible={editModal.visible}
        onClose={(value) => onCloseEditModal(value)}
        product={editModal.product}
      />
    </>
  );
}

export default SeeProduct;
