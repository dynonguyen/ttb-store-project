import { EyeOutlined } from '@ant-design/icons';
import { Button, Spin, Table, Tooltip } from 'antd';
import orderApi from 'apis/orderApi';
import helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderDetail from './OrderDetail';

// fn: tạo danh sách lọc cho trạng thái đơn hàng
function generateOrderStaFilter() {
  let result = [];
  for (let i = 0; i < 7; ++i) {
    result.push({ value: i, text: helpers.convertOrderStatus(i) });
  }
  return result;
}

function OrderList() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    isOpen: false,
    orderId: '',
  });
  const user = useSelector((state) => state.user);

  // các cột cho bảng danh sách đơn hàng
  const orderColumns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'orderCode',
      key: 'orderCode',
      render: (orderCode, records) => (
        <Button
          type="link"
          onClick={() =>
            setOrderDetails({ isOpen: true, orderId: records._id })
          }>
          <b>{orderCode}</b>
        </Button>
      ),
    },
    {
      title: 'Ngày mua',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (orderDate) => helpers.formatOrderDate(orderDate),
      sorter: (a, b) => {
        if (a.orderDate < b.orderDate) return -1;
        if (a.orderDate > b.orderDate) return 1;
        return 0;
      },
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'orderProd',
      key: 'orderProd',
      render: (orderProd) => (
        <Link to={`/product/${orderProd.id}`}>
          <Tooltip title={orderProd.name}>
            {helpers.reduceProductName(orderProd.name, 30)}
          </Tooltip>
        </Link>
      ),
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'totalMoney',
      key: 'totalMoney',
      render: (value, records) => {
        const total = helpers.calTotalOrderFee(records);
        return helpers.formatProductPrice(total);
      },
      sorter: (a, b) =>
        helpers.calTotalOrderFee(a) - helpers.calTotalOrderFee(b),
    },
    {
      title: 'Trạng thái đơn hàng',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      filters: generateOrderStaFilter(),
      onFilter: (value, record) => record.orderStatus === value,
      render: (orderStatus) => helpers.convertOrderStatus(orderStatus),
    },
  ];
  // fn: hiển thị danh sách đơn hàng
  function showOrderList(list) {
    return list && list.length === 0 ? (
      <h3 className="m-t-16 t-center" style={{ color: '#888' }}>
        Hiện tại bạn chưa có đơn hàng nào
      </h3>
    ) : (
      <Table
        columns={orderColumns}
        dataSource={list}
        pagination={{
          pageSize: 8,
          showSizeChanger: false,
          position: ['bottomRight'],
        }}
      />
    );
  }

  // event: Lấy danh sách
  useEffect(() => {
    let isSubscribe = true;
    async function getOrderList() {
      try {
        setIsLoading(true);
        const response = await orderApi.getOrderList(user._id);
        if (response && isSubscribe) {
          const { list } = response.data;
          setOrderList(
            list.map((item, index) => {
              return { ...item, key: index };
            }),
          );
          setIsLoading(false);
        }
      } catch (error) {
        if (isSubscribe) {
          setIsLoading(false);
          setOrderList([]);
        }
      }
    }
    if (user) getOrderList();
    return () => {};
  }, [user]);

  // rendering ...
  return (
    <>
      {isLoading ? (
        <div className="t-center m-tb-48">
          <Spin tip="Đang tải danh sách đơn hàng của bạn ..." size="large" />
        </div>
      ) : (
        showOrderList(orderList)
      )}
      {orderDetails.isOpen && (
        <OrderDetail
          orderId={orderDetails.orderId}
          onClose={() => setOrderDetails({ isOpen: false })}
        />
      )}
    </>
  );
}

export default OrderList;
