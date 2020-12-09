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
  const { products } = props;
  const { productDetail, productDesc } = products;
  const { catalogs, ...restDetail } = productDetail;
  const { name, brand } = products.product;
  // rendering...
  return (
    <div className="Product-Detail-View container m-t-20">
      <Row gutter={[16, 32]}>
        {/* Hiển thị đường dẫn trang */}
        <Col span={24} className="d-flex page-position">
          <Link to="/">
            <HomeOutlined className="p-12 icon-home font-size-16px bg-white" />
          </Link>
          <span className="r-arrow p-lr-8 font-weight-500">{`>`}</span>
          <span className="pro-name p-8 font-weight-500 bg-white">{name}</span>
        </Col>

        {/* Thông tin cơ bản của sản phẩm */}
        <Col span={24} md={18}>
          <ProductOverview products={products} />
        </Col>

        {/* Chính sách */}
        <Col span={24} md={6}>
          <ProductPolicy />
        </Col>

        {/* Mô tả chi tiết sản phẩm */}
        <Col span={24}>
          <Description
            specification={{ brand, ...restDetail }}
            desc={productDesc}
          />
        </Col>
      </Row>
    </div>
  );
}

ProductDetail.propTypes = {
  products: PropTypes.object,
};

export default ProductDetail;
