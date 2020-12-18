import { Col, Row } from 'antd';
import RelatedProduct from 'containers/ProductDetailPage/RelatedProduct';
import React from 'react';
import AllProduct from './AllProduct';
import DiscountList from './DiscountList';
import FamousBrand from './FamousBrand';
import './index.scss';
import SaleOff from './SaleOff';

function HomePage() {
  return (
    <div className="Home">
      {/* Carousel cho sale off */}
      <SaleOff />

      <Row className="container">
        {/* Danh sách sản phẩm khuyến mãi */}
        <Col className="m-tb-32" span={24}>
          <DiscountList />
        </Col>

        <Col span={24} className="adv box-sha-home bor-rad-8 m-b-32">
          <img
            className="adv-img w-100 bor-rad-8"
            src="https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268459/others/1_iorzsj.webp"
          />
        </Col>

        {/* Thương hiệu nổi bật */}
        <Col span={24} className="m-b-32 bg-white box-sha-home bor-rad-8">
          <FamousBrand />
        </Col>

        {/* Sản phẩm bán chạy */}
        <Col span={24} className="m-b-32 hot-products box-sha-home bor-rad-8">
          <RelatedProduct title="Sản phẩm bán chạy" type={0} />
        </Col>

        <Col span={24} className="adv box-sha-home bor-rad-8 m-b-32">
          <img
            className="adv-img w-100 bor-rad-8"
            src="https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268459/others/2_wapowv.webp"
          />
        </Col>

        {/* Tổng hợp sản phẩm */}
        <Col span={24} className="m-b-32 bg-white box-sha-home bor-rad-8">
          <AllProduct />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
