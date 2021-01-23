import { Button, message, Popconfirm, Spin, Table } from 'antd';
import adminApi from 'apis/adminApi';
import React, { useEffect, useState } from 'react';

function CustomerList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // event: xoá tài khoản
  const onDelCustomer = async (id) => {
    try {
      const response = await adminApi.delCustomer(id);
      if (response && response.status === 200) {
        message.success('Xoá tài khoản thành công');
        setData(data.filter((item) => item.id !== id));
      }
    } catch (error) {
      message.error('Xoá tài khoản thất bại');
    }
  };

  const columns = [
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
      render: (v) => <a>{v}</a>,
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Loại tài khoản',
      key: 'authType',
      dataIndex: 'authType',
    },
    {
      title: 'Họ tên',
      key: 'fullName',
      dataIndex: 'fullName',
    },
    {
      title: 'Quê quán',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Ngày sinh',
      key: 'birthday',
      dataIndex: 'birthday',
    },
    {
      title: 'Giới tính',
      key: 'gender',
      dataIndex: 'gender',
      render: (gender) => (gender ? 'Nam' : 'Nữ'),
    },
    {
      title: '',
      render: (_v, records) => (
        <Popconfirm
          title="Bạn có chắc muốn xoá ?"
          placement="left"
          cancelText="Huỷ bỏ"
          okText="Xoá"
          onConfirm={() => onDelCustomer(records.id)}>
          <Button danger>Xoá</Button>
        </Popconfirm>
      ),
    },
  ];

  useEffect(() => {
    let isSubscribe = true;
    async function getCustomerList() {
      try {
        setIsLoading(true);
        const response = await adminApi.getCustomerList();
        if (isSubscribe && response) {
          const { list } = response.data;
          const newList = list.map((item, index) => {
            return {
              key: index,
              id: item._id,
              email: item.accountId.email,
              birthday: item.birthday,
              fullName: item.fullName,
              address: item.address,
              gender: item.gender,
              authType: item.accountId.authType,
            };
          });
          setData([...newList]);
          setIsLoading(false);
        }
      } catch (error) {
        if (isSubscribe) setIsLoading(false);
      }
    }
    getCustomerList();
    return () => {
      isSubscribe = false;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin className="trans-center" tip="Đang lấy danh sách ..." />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ showLessItems: true, position: ['bottomCenter'] }}
        />
      )}
    </>
  );
}

export default CustomerList;
