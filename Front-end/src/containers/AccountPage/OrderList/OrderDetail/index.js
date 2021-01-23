import { Col, Modal, Row, Spin, Table, Tooltip } from 'antd';
import orderApi from 'apis/orderApi';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function OrderDetail(props) {
  const { orderId, onClose } = props;
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState(null);

  // event: lấy chi tiết đơn hàng
  useEffect(() => {
    let isSubscribe = true;
    async function getOrderDetails() {
      try {
        const response = await orderApi.getOrderDetails(orderId);
        if (isSubscribe && response) {
          setOrder(response.data.order);
          setIsLoading(false);
        }
      } catch (error) {
        if (isSubscribe) {
          setIsLoading(false);
          setOrder(null);
        }
      }
    }
    getOrderDetails();
    return () => {
      isSubscribe = false;
    };
  }, [orderId]);

  // cột cho bảng chi tiết sản phẩm
  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'prod',
      key: 'prod',
      render: (v, record) => (
        <Link to={`/product/${record.orderProd.id}`}>
          <Tooltip title={record.orderProd.name}>
            {helpers.reduceProductName(record.orderProd.name, 40)}
          </Tooltip>
        </Link>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'prod',
      render: (v, record) => helpers.formatProductPrice(record.orderProd.price),
    },
    {
      title: 'Số lượng',
      dataIndex: 'numOfProd',
      key: 'numOfProd',
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discount',
      key: 'prod',
      render: (v, record) => `${record.orderProd.discount} %`,
    },
    {
      title: 'Tạm tính',
      dataIndex: 'totalMoney',
      key: 'totalMoney',
      render: (v, record) => {
        const { price, discount } = record.orderProd;
        return helpers.formatProductPrice(
          price * record.numOfProd -
            (price * record.numOfProd * discount) / 100,
        );
      },
    },
  ];

  // rendering...
  return (
    <Modal
      width={1000}
      centered
      visible={visible}
      onCancel={() => {
        setVisible(false);
        onClose();
      }}
      maskClosable={false}
      footer={null}
      title={
        <p className="font-size-18px m-b-0">
          Chi tiết đơn hàng
          {order && (
            <>
              <span style={{ color: '#4670FF' }}>{` #${order.orderCode}`}</span>
              <b>{` - ${helpers.convertOrderStatus(order.orderStatus)}`}</b>
            </>
          )}
        </p>
      }>
      <>
        {isLoading ? (
          <div className="pos-relative" style={{ minHeight: 180 }}>
            <Spin
              className="trans-center"
              tip="Đang tải chi tiết đơn hàng..."
              size="large"
            />
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {/* thời gian đặt hàng */}
            <Col span={24} className="t-right">
              <b className="font-size-14px">
                {`Ngày đặt hàng  ${helpers.formatOrderDate(
                  order.orderDate,
                  1,
                )}`}
              </b>
            </Col>

            {/* địa chỉ người nhận */}
            <Col span={12}>
              <h3 className="t-center m-b-12">ĐỊA CHỈ NGƯỜI NHẬN</h3>
              <div
                className="p-tb-12 p-lr-16 bg-gray bor-rad-8"
                style={{ minHeight: 150 }}>
                <h3 className="m-b-8">
                  <b>{order.deliveryAdd.name.toUpperCase()}</b>
                </h3>
                <p className="m-b-8">{`Địa chỉ: ${order.deliveryAdd.address}`}</p>
                <p className="m-b-8">
                  Số điện thoại: {order.deliveryAdd.phone}
                </p>
              </div>
            </Col>

            {/* Hình thức thanh toán */}
            <Col span={12}>
              <h3 className="t-center m-b-12">HÌNH THỨC THANH TOÁN</h3>
              <div
                className="p-tb-12 p-lr-16 bg-gray bor-rad-8"
                style={{ minHeight: 150 }}>
                <p className="m-b-8">
                  {helpers.convertPaymentMethod(order.paymentMethod)}
                </p>
              </div>
            </Col>

            {/* Chi tiết sản phẩm đã mua */}
            <Col span={24}>
              <Table
                pagination={false}
                columns={columns}
                dataSource={[{ key: 1, ...order }]}
              />
            </Col>

            {/* Tổng cộng */}
            <Col span={24} className="t-right">
              <div className="d-flex font-weight-500 justify-content-end">
                <p style={{ color: '#bbb' }}>Tạm tính</p>
                <span
                  className="m-l-32"
                  style={{ color: '#888', minWidth: 180 }}>
                  {helpers.formatProductPrice(
                    order.orderProd.price * order.numOfProd -
                      (order.orderProd.price *
                        order.numOfProd *
                        order.orderProd.discount) /
                        100,
                  )}
                </span>
              </div>
              <div className="d-flex font-weight-500 justify-content-end">
                <p style={{ color: '#bbb' }}>Phí vận chuyển</p>
                <span
                  className="m-l-32"
                  style={{ color: '#888', minWidth: 180 }}>
                  {helpers.formatProductPrice(order.transportFee)}
                </span>
              </div>
              <div className="d-flex font-weight-500 justify-content-end">
                <p style={{ color: '#bbb' }}>Tổng cộng</p>
                <span
                  className="m-l-32 font-size-18px"
                  style={{ color: '#ff2000', minWidth: 180 }}>
                  {helpers.formatProductPrice(helpers.calTotalOrderFee(order))}
                </span>
              </div>
            </Col>
          </Row>
        )}
      </>
    </Modal>
  );
}

OrderDetail.propTypes = {
  orderId: PropTypes.string,
  onClose: PropTypes.func,
};

export default OrderDetail;
