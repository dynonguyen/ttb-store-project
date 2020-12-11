import productApi from 'apis/productApi';
import RelatedProductList from 'components/ProductDetail/RelatedProductList';
import constants from 'constants/index';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function RelatedProduct(props) {
  const { id, type, brand, title } = props;
  const [productList, setProductList] = useState([]);

  // Lấy ds sản phẩm
  useEffect(() => {
    async function getRelatedProducts() {
      try {
        const response = await productApi.getProductList(
          type,
          brand,
          constants.MAX_RELATED_PRODUCTS,
          id,
        );
        if (response) {
          setProductList(response.data.data);
        }
      } catch (error) {
        throw error;
      }
    }
    getRelatedProducts();
  }, [id, type, brand]);

  // rendering...
  return (
    <>
      {productList.length > 0 && (
        <RelatedProductList list={productList} title={title} />
      )}
    </>
  );
}

RelatedProduct.defaultProps = {
  id: '',
  type: 0,
  brand: '',
  title: 'Sản phẩm liên quan',
};

RelatedProduct.propTypes = {
  // loại, nhãn hiệu sản phẩm tương tự - sp đó
  id: PropTypes.string,
  type: PropTypes.number,
  brand: PropTypes.string,
  title: PropTypes.string,
};

export default RelatedProduct;
