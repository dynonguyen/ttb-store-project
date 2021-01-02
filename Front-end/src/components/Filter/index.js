import { Col, Row } from 'antd';
import React, { useState } from 'react';
import DetailFilter from './DetailFilter';
import './index.scss';
import MenuFilter from './MenuFilter';

const listDetails = [
  {
    key: 0,
    data: [
      {
        title: 'Laptop theo thương hiệu',
        subFilters: [
          {
            title: 'Apple',
            to: '/',
          },
          {
            title: 'Acer',
            to: '/',
          },
          {
            title: 'ASUS',
            to: '/',
          },
          {
            title: 'Dell',
            to: '/',
          },
          {
            title: 'HP',
            to: '/',
          },
          {
            title: 'lenovo',
            to: '/',
          },
          {
            title: 'LG',
            to: '/',
          },
          {
            title: 'MSI',
            to: '/',
          },
        ],
      },
      {
        title: 'Laptop theo kích thước',
        subFilters: [
          {
            title: 'Dưới 13 inch',
            to: '/',
          },
          {
            title: 'Từ 13 đến 15 inch',
            to: '/',
          },
          {
            title: 'Trên 15 inch',
            to: '/',
          },
        ],
      },
      {
        title: 'Laptop theo giá',
        subFilters: [
          {
            title: 'Dưới 10 triệu',
            to: '/',
          },
          {
            title: 'Từ 10 - 15 triệu',
            to: '/',
          },
          {
            title: 'Từ 15 - 20 triệu',
            to: '/',
          },
          {
            title: 'Từ 20 - 30 triệu',
            to: '/',
          },
          {
            title: 'Từ 30 - 50 triệu',
            to: '/',
          },
          {
            title: 'Trên 50 triệu',
            to: '/',
          },
        ],
      },
      {
        title: 'Laptop theo cấu hình chip',
        subFilters: [
          {
            title: 'Intel Core i3',
            to: '/',
          },
          {
            title: 'Intel Core i5',
            to: '/',
          },
          {
            title: 'Intel Core i7',
            to: '/',
          },
          {
            title: 'Intel Core i9',
            to: '/',
          },
          {
            title: 'AMD Ryzen 3',
            to: '/',
          },
          {
            title: 'AMD Ryzen 5',
            to: '/',
          },
          {
            title: 'AMD Ryzen 7',
            to: '/',
          },
          {
            title: 'Pentium',
            to: '/',
          },
          {
            title: 'Celeron',
            to: '/',
          },
        ],
      },
      {
        title: 'Linh kiện laptop',
        subFilters: [
          {
            title: 'Bàn phím',
            to: '/',
          },
          {
            title: 'RAM máy tính',
            to: '/',
          },
          {
            title: 'Ổ cứng',
            to: '/',
          },
          {
            title: 'Chuột máy tính',
            to: '/',
          },
        ],
      },
    ],
  },
];

function Filter() {
  const [filterDetails, setFilterDetails] = useState({
    visible: false,
    list: [],
  });
  // event: hiển thị chi tiết filter menu
  const onShowDetails = (key) => {
    const list = listDetails.find((item) => item.key === key);
    if (list) setFilterDetails({ visible: true, list: list.data });
    else setFilterDetails({ visible: false, list: [] });
  };

  // event: tắt chi tiết filter menu
  const onCloseDetails = () => {
    setFilterDetails({ visible: false, list: [] });
  };

  // rendering ...
  return (
    <Row className="Filter" onMouseLeave={onCloseDetails}>
      <Col span={2} sm={4} md={8} xl={6}>
        <MenuFilter onShow={onShowDetails} />
      </Col>
      <Col span={22} sm={20} md={16} xl={18}>
        <DetailFilter
          visible={filterDetails.visible}
          list={filterDetails.list}
        />
      </Col>
    </Row>
  );
}

export default Filter;
