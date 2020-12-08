import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Image, Input, InputNumber, Radio, Row } from 'antd';
import ImgLoadFailed from 'assets/imgs/loading-img-failed.png';
import './index.scss';
import { CheckOutlined } from '@ant-design/icons';

const imgList = [
  'https://lh3.googleusercontent.com/wvTKdND7Id7_BK4vr7uOAauDghL7A85nBV3ia-dBOdReBYzs4AaWK_a3_YnplqhhCPXuoQ4VPuMheoSaUgU=w1000-rw',
  'https://lh3.googleusercontent.com/wvTKdND7Id7_BK4vr7uOAauDghL7A85nBV3ia-dBOdReBYzs4AaWK_a3_YnplqhhCPXuoQ4VPuMheoSaUgU=w1000-rw',
  'https://lh3.googleusercontent.com/qD_1Okucq1UTADP4TGYIJXscP4_Wsyq1QtP5ur4wpmwNFEfSLyLbfBUOY6Kn6_4Y9_R8JgifKYX88LGzShb_=w1000-rw',
  'https://lh3.googleusercontent.com/wvTljkn1mAbQV6exz9IjcQ3LS_v2GdSWqGpW3U_r3AJX53njp-99iO0Aoule40aaPNixKBvGInJU6fEruT8=w1000-rw',
  'https://lh3.googleusercontent.com/u5liQdRFIBYZoL3kAvkUKaEq9AY4s9uAceBzxXTsC5QA87AZxXlCD-mKiKDc0GoEkqI2_GjijpM8spAWXg=w1000-rw',
];

function ProductOverview(props) {
  const [avtIndex, setAvtIndex] = useState(0);

  // hiên thị danh sách hình ảnh sp
  const showCatalogs = (catalog) => {
    return catalog.map((item, index) => (
      <Image
        key={index}
        src={item}
        width={48}
        className={`catalog-item p-8 ${index === avtIndex ? 'active' : ''}`}
        onMouseEnter={() => setAvtIndex(index)}
      />
    ));
  };

  return (
    <Row className="Product-Overview bg-white p-16">
      {/* Hình ảnh và thông số cơ bản sản phẩm */}
      <Col span={24} md={8}>
        <Image fallback={ImgLoadFailed} src={imgList[avtIndex]} />
        <div className="d-flex w-100 bg-white justify-content-around p-b-16">
          {showCatalogs(imgList)}
        </div>
        <div className="p-l-16 p-t-16 product-info">
          <p className="m-b-8">
            - CPU: Intel Core i3, CPU: Intel Core i3.CPU: Intel Core i3
          </p>
          <p className="m-b-8">- CPU: Intel Core i3</p>
          <p className="m-b-8">- CPU: Intel Core i3</p>
          <p className="m-b-8">- CPU: Intel Core i3</p>
          <p className="m-b-8">- CPU: Intel Core i3</p>
        </div>
      </Col>

      {/* Tên và thông tin cơ bản */}
      <Col span={24} md={16} className="p-l-16">
        {/* Tên sp */}
        <h2 className="font-size-24px ">
          Laptop APPLE MacBook Air 2020 MWTJ2SA/A MWTJ2SA/A ( 13.3 Intel Core
          i3/8GB/256GB SSD/macOS/1.3kg)
        </h2>

        {/* Mã, thương hiệu */}
        <div
          className="font-size-16px font-weight-400"
          style={{ color: '#aaa' }}>
          Thương hiệu:
          <span className="product-brand font-weight-500">&nbsp;Apple</span>
          &nbsp; | &nbsp;<span>SKU: 200500597</span>
        </div>

        {/* Giá */}
        <h1 className="product-price font-weight-700 p-tb-8">35.990.000đ</h1>
        <h3 className="font-weight-700" style={{ color: '#333' }}>
          Bạn có 1 mã giảm giá 10% cho sản phẩm này
        </h3>
        <div className="d-flex flex-direction-column m-t-8 m-b-16 p-tb-8 p-lr-16 discount">
          <span className="discount-price font-size-16px font-weight-700">
            Giá: 32.990.000đ
          </span>
          <span>
            Đã giảm thêm:&nbsp;
            <span className="discount-decr">2.000.000đ</span>
          </span>
          <div className="discount-mark"></div>
          <CheckOutlined className="discount-mark-icon" />
        </div>

        {/* Chọn option */}
        <div className="p-t-12 option">
          <h3 className="m-r-8 font-size-16px">Chọn màu: </h3>
          <Radio.Group defaultValue={0}>
            <Radio.Button value={0} className="m-r-8">
              Xanh
            </Radio.Button>
            <Radio.Button value={1} className="m-r-8">
              Đen
            </Radio.Button>
          </Radio.Group>
          <h3 className="m-r-8 m-t-8 font-size-16px">Chọn số lượng: </h3>
          <InputNumber size="middle" defaultValue={1} min={1} max={20} />
        </div>

        {/* Button*/}
        <div className="btn-group p-tb-16 d-flex justify-content-around">
          <Button
            size="large"
            className="m-r-16 w-100 btn-group-item"
            style={{ backgroundColor: '#3555c5' }}>
            THÊM GIỎ HÀNG
          </Button>
          <Button
            size="large"
            className="w-100 btn-group-item"
            style={{ backgroundColor: '#39B3D7' }}>
            MUA NGAY LUÔN
          </Button>
        </div>
      </Col>
    </Row>
  );
}

ProductOverview.propTypes = {};

export default ProductOverview;
