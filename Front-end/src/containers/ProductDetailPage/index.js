import productApi from 'apis/productApi';
import GlobalLoading from 'components/Loading/Global';
import ProductDetail from 'components/ProductDetail';
import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isNotFoundProduct, setIsNotFoundProduct] = useState(false);

  const getProduct = async (id) => {
    try {
      const result = await productApi.getProduct(id);
      if (result) {
        const { data } = result;
        setProduct(data);
      }
    } catch (error) {
      setIsNotFoundProduct(true);
    }
  };

  // lấy sản phẩm
  useEffect(() => {
    getProduct(productId);
    setProduct(null);
  }, [productId]);

  return (
    <>
      {product ? (
        <ProductDetail products={product} />
      ) : (
        <GlobalLoading content="Đang tải sản phẩm ..." />
      )}
      {isNotFoundProduct && <Redirect to="/not-found" />}
    </>
  );
}

export default ProductDetailPage;
