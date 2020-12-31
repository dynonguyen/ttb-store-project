import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { message, Pagination, Table, Tooltip } from 'antd';
import productApi from 'apis/productApi';
import helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function generateFilterType() {
  let result = [];
  for (let i = 0; i < 15; ++i) {
    result.push({ value: i, text: helpers.convertProductType(i) });
  }
  return result;
}

function SeeProduct() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 16;

  // event: xoá sản phẩm
  const onDelete = async (params) => {
    return null;
  };

  // event: sửa sản phẩm
  const onEdit = async (params) => {
    return null;
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
      render: (code, data) => <Link to={`/products/${data._id}`}>{code}</Link>,
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
      render: (text) => (
        <>
          <DeleteOutlined
            onClick={() => onDelete(text._id)}
            className="m-r-8 action-btn-product"
            style={{ color: 'red' }}
          />
          <EditOutlined
            onClick={() => onEdit(text)}
            className="m-r-8 action-btn-product"
            style={{ color: '#444' }}
          />
          <EyeOutlined
            onClick={() => onEdit(text)}
            className="action-btn-product"
            style={{ color: '#444' }}
          />
        </>
      ),
    },
  ];

  // rendering ...
  return (
    <>
      <Table
        pagination={false}
        className="admin-see-product"
        columns={columns}
        dataSource={list}
      />
      <Pagination
        className="p-tb-32 t-center"
        current={page}
        onChange={(p) => setPage(p)}
        showSizeChanger={false}
        total={total}
        pageSize={perPage}
      />
    </>
  );
}

export default SeeProduct;
