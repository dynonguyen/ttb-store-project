import { Card } from 'antd';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

// rendering ...
function ProductView(props) {
  const { name, price, avtUrl, discount, stock } = props;
  return (
    <Card
      className="Product-View p-b-18"
      style={{ maxWidth: 280 }}
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
    </Card>
  );
}

// default props
ProductView.defaultProps = {
  price: 0,
  stock: 1,
};

// check prop type
ProductView.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  avtUrl: PropTypes.string,
  discount: PropTypes.number,
  stock: PropTypes.number,
};

export default ProductView;
