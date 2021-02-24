import { Card } from 'antd';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './index.scss';

// rendering ...
function ProductView(props) {
  const {
    className,
    name,
    price,
    avtUrl,
    discount,
    stock,
    action,
    height,
    maxWidth,
  } = props;

  // set height cho các avt của sản phẩm
  useEffect(() => {
    document
      .querySelectorAll('.ant-card-cover')
      .forEach((item) => (item.style.height = `${height / 2}px`));
  }, []);

  // rendering ...
  return (
    <Card
      className={`Product-View p-b-18 ${className}`}
      id="card-item"
      style={{ height, maxWidth }}
      loading={false}
      cover={
        <img className="max-w-100 max-h-100" src={avtUrl} alt="Product Photo" />
      }
      hoverable>
      {/* Tên sản phẩm */}
      <div className="font-size-16px m-b-10">
        {helpers.reduceProductName(name)}
      </div>

      {/* Giá sản phẩm */}
      <div className="Product-View-price m-b-10">
        {!price && <span className="Product-View-price--contact">Liên hệ</span>}
        {price > 0 && (
          <>
            <span className="Product-View-price--main font-size-20px font-weight-b">
              {helpers.formatProductPrice(price)}
            </span>
            {discount > 0 && (
              <div>
                <span className="Product-View-price--cancel font-weight-500">
                  {helpers.formatProductPrice(price + (discount * price) / 100)}
                </span>
                <span className="m-l-8 Product-View-price--discount">
                  {discount}%
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Số lượng hàng còn, chỉ hiển thị khi còn ít hơn 5 */}
      {stock <= 5 && stock > 0 && (
        <div className="Product-View-stock font-size-14px">
          chỉ còn {stock} sản phẩm
        </div>
      )}

      {/* Số lượng hàng còn, chỉ hiển thị khi còn ít hơn 5 */}
      {stock === 0 && (
        <b className="Product-View-stock font-size-16px">Đang hết hàng</b>
      )}

      {/* Các nút bấm thêm nếu có */}
      <div className="d-flex m-t-10 justify-content-end">
        {action.length > 0 && action.map((Item) => Item)}
      </div>
    </Card>
  );
}

// default props
ProductView.defaultProps = {
  price: 0,
  stock: 1,
  action: [],
  maxWidth: 280,
  height: 480,
  className: '',
};

// check prop type
ProductView.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  avtUrl: PropTypes.string,
  discount: PropTypes.number,
  stock: PropTypes.number,
  action: PropTypes.any,
  style: PropTypes.object,
  height: PropTypes.number,
  maxWidth: PropTypes.number,
};

export default ProductView;
