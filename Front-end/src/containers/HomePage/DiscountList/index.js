import { Col, Row } from 'antd';
import Countdown from 'components/Countdown';
import RelatedProduct from 'containers/ProductDetailPage/RelatedProduct';
import React, { useState } from 'react';
import './index.scss';

// chuyển thời gian thành chuỗi + số ngày quy định
// để làm deadline (nDate là số ngày)
function convertTime(nDate) {
  const milisec = nDate * 24 * 60 * 60 * 1000;
  const time = new Date(Date.now() + milisec);
  const m = time.getMonth() + 1;
  const d = time.getDate();
  const y = time.getFullYear();
  const h = time.getHours() % 12;
  return `${m} ${d} ${y}, ${h}:00 am`;
}

// Do cả chương trình chỉ có 1 list carousels
// Nên lưu thẳng vào đây để đỡ tốn chi phí query
const list = [
  {
    title: 'Loa, âm thanh',
    type: 12,
    content: 'Giảm đến 36%',
    deadline: convertTime(6),
  },
  {
    title: 'Laptop',
    type: 0,
    content: 'Giảm trực tiếp 1.5tr',
    deadline: convertTime(2),
  },
  {
    title: 'Phụ kiện',
    type: 10,
    content: 'Giảm đến 35%',
    deadline: convertTime(3),
  },
  {
    title: 'Bàn phím',
    type: 8,
    content: 'Giảm đến 49%',
    deadline: convertTime(15),
  },
  {
    title: 'Thiết bị mạng',
    type: 11,
    content: 'Sale sập tiệm 90%',
    deadline: convertTime(4),
  },
];

function DiscountList() {
  const [indexHeader, setIndexHeader] = useState(0);
  return (
    <div
      className={`Discount-List box-sha-home d-flex flex-direction-column bg-${indexHeader}`}>
      {/* menu header */}
      <div className="d-flex justify-content-between header">
        {list.map((item, index) => {
          let className = `header-item w-100 d-flex flex-direction-column align-i-center font-weight-500 bg-white`;
          return (
            <div
              key={index}
              onClick={() => {
                setIndexHeader(index);
              }}
              className={
                index !== indexHeader ? className : className + ' active'
              }>
              <h2>{item.title}</h2>
              <span>{item.content}</span>
            </div>
          );
        })}
      </div>

      {/* content & product list */}
      <Row className="flex-grow-1">
        {/* countdown */}
        <Col
          span={24}
          md={6}
          className="d-flex flex-direction-column justify-content-center countdown">
          <Countdown
            timeTillDate={list[indexHeader].deadline}
            timeFormat="MM DD YYYY, h:mm a"
          />
        </Col>
        {/* product list */}
        <Col span={24} md={18}>
          <RelatedProduct
            type={list[indexHeader].type}
            span={{ span: 24, xs: 24, sm: 12, md: 12, lg: 6, xl: 6, xxl: 6 }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default DiscountList;
