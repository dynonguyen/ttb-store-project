import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import ProductView from 'components/ProductView';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

// rendering ...
function RelatedProductList(props) {
  const { list, title } = props;
  const span = { span: 24, xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 4 };

  const perPage = useRef(1);
  const [page, setPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  // fn: phân trang
  const paginate = (list) => {
    const windowSize = helpers.convertWidthScreen(windowWidth);
    if (span.hasOwnProperty(windowSize))
      perPage.current = 24 / span[windowSize];
    else {
      const spanValues = Object.values(span);
      let min = Math.min(...spanValues);
      perPage.current = 24 / min;
    }

    return list.slice(perPage.current * (page - 1), perPage.current * page);
  };

  // fn: Hiển thị danh sách sản phẩm
  const showProductList = (list) => {
    const listSliced = paginate(list);

    return listSliced.map((product, index) => {
      const { name, avt, price, discount, stock, _id } = product;
      return (
        <Col key={index} {...span}>
          <Link to={`/product/${_id}`} className="item">
            <ProductView
              name={name}
              avtUrl={avt}
              discount={discount}
              stock={stock}
              price={price}
              height={420}
            />
          </Link>
        </Col>
      );
    });
  };

  return (
    <Row
      className="Related-Products bg-white p-16"
      gutter={[16, 8]}
      style={{ borderRadius: 8 }}>
      <Col span={24} className="p-8">
        <h2 className="font-weight-700">{title}</h2>
        <div className="underline-title"></div>
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]} className="m-t-16">
          {showProductList(list, span)}
        </Row>
      </Col>

      {/* Mũi tên chuyển trang */}
      <LeftCircleOutlined
        className={`arrow arrow-left ${page <= 1 ? 'disabled' : ''}`}
        onClick={() => setPage(page - 1)}
      />
      <RightCircleOutlined
        className={`arrow arrow-right ${
          page >= Math.ceil(list.length / perPage.current) ? 'disabled' : ''
        }`}
        onClick={() => setPage(page + 1)}
      />
    </Row>
  );
}

RelatedProductList.defaultProps = {
  list: [],
  title: 'Sản phẩm liên quan',
};

RelatedProductList.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
};

export default RelatedProductList;
