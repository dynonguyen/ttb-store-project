import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import './index.scss';
import { Link } from 'react-router-dom';
import ProductOverview from './Overview';
import ProductPolicy from './Policy';
import Description from './Description';

function ProductDetail(props) {
  return (
    <div className="Product-Detail-View container m-t-20">
      <Row gutter={[16, 32]}>
        {/* Hiển thị đường dẫn trang */}
        <Col span={24} className="d-flex page-position">
          <Link to="/">
            <HomeOutlined className="p-12 icon-home font-size-16px bg-white" />
          </Link>
          <span className="r-arrow p-lr-8 font-weight-500">{`>`}</span>
          <span className="pro-name p-8 font-weight-500 bg-white">
            Laptop Apple MacBook Air 2018 13 MRE82 (13.3/Core i5/8GB/128GB
            SSD/UHD 617/macOS/1.2 kg)
          </span>
        </Col>

        {/* Thông tin cơ bản của sản phẩm */}
        <Col span={24} md={18}>
          <ProductOverview />
        </Col>

        {/* Chính sách */}
        <Col span={24} md={6}>
          <ProductPolicy />
        </Col>

        {/* Mô tả chi tiết sản phẩm */}
        <Col span={24}>
          <Description />
        </Col>
      </Row>
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
