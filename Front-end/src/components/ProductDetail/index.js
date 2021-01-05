import { HomeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import Evaluation from 'containers/ProductDetailPage/Evaluation';
import RelatedProduct from 'containers/ProductDetailPage/RelatedProduct';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import './index.scss';
import ProductOverview from './Overview';
import ProductPolicy from './Policy';

function ProductDetail(props) {
  const { products } = props;
  const { productDetail, productDesc } = products;
  let { catalogs, ...restDetail } = productDetail;
  const { name, brand, type, _id, rate, otherInfo } = products.product;
  restDetail = helpers.convertProductValue(type, restDetail);
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
            specification={{ brand, otherInfo, ...restDetail }}
            desc={productDesc}
          />
        </Col>

        {/* Nhận xét của khách hàng */}
        <Col span={24} id="evaluation">
          <Evaluation rates={rate} productId={_id} />
        </Col>

        {/* danh sách sản phẩm tương tự */}
        <Col span={24}>
          <RelatedProduct
            title="Sản phẩm tương tự"
            type={type}
            brand={brand}
            id={_id}
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
