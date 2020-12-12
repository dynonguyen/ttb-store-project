import { Card } from 'antd';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

// rendering ...
function ProductView(props) {
  const { name, price, avtUrl, discount, stock, action, style } = props;
  return (
    <Card
      className="Product-View p-b-18"
      style={style}
      loading={false}
      hoverable
      cover={<img src={avtUrl} alt="Product Photo" />}>
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
            {discount && (
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
      {stock <= 5 && (
        <div className="Product-View-stock font-size-14px">
          chỉ còn {stock} sản phẩm
        </div>
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
  style: { maxWidth: 280 },
};

// check prop type
ProductView.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  avtUrl: PropTypes.string,
  discount: PropTypes.number,
  stock: PropTypes.number,
  action: PropTypes.any,
  style: PropTypes.object,
};

export default ProductView;
