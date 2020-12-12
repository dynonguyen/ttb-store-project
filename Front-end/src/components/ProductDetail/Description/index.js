import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row } from 'antd';
import './index.scss';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Posts from './Posts';
import Specification from './Specification';

function Description(props) {
  const { specification, desc } = props;
  const [isHideDesc, setIsHideDesc] = useState(false);
  const [isShowSeeMore, setIsShowSeeMore] = useState(false);

  // ev: hiển thị xem thêm bài viết chi tiết
  const onSeeMore = () => {
    setIsHideDesc(!isHideDesc);
  };

  // ev: lấy kích thước bài viết mô tả sau khi render
  useEffect(() => {
    const height = document.getElementById('descId').clientHeight;
    // Nếu chiều cao bài viết > 200px thì ẩn bớt
    if (height >= 200) {
      setIsShowSeeMore(true);
    }
  }, []);

  return (
    <Row className="Product-Desc bg-white p-8" id="descId">
      {/* Bài viết chi tiết */}
      <Col
        span={24}
        md={16}
        className={`p-8 ${!isHideDesc ? 'hide-desc' : ''}`}>
        <h2 className="font-weight-700">Mô tả sản phẩm</h2>
        <div className="underline-title"></div>
        <Posts content={desc} />
      </Col>

      {/* Thông số kỹ thuật */}
      <Col span={24} md={8} className={`p-8 ${!isHideDesc ? 'hide-desc' : ''}`}>
        <h2 className="font-weight-700">Thông số kỹ thuật</h2>
        <div className="underline-title"></div>
        <Specification data={specification} />
      </Col>

      {/* hiển thị chế độ xem thêm */}
      {isShowSeeMore && (
        <h3
          className="trans-margin p-tb-16 see-more ease-trans"
          onClick={onSeeMore}>
          {isHideDesc ? 'Thu gọn ' : 'Xem thêm '}
          nội dung &nbsp;
          {isHideDesc ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </h3>
      )}
    </Row>
  );
}

Description.propTypes = {
  specification: PropTypes.object,
  desc: PropTypes.object,
};

export default Description;
