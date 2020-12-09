import { Col, message, Pagination, Row, Select } from 'antd';
import adminApi from 'apis/adminApi';
import constants from 'constants/index';
import React, { useRef, useState } from 'react';
import ProductItem from './ProductItem';

const perPage = 8;

// rendering...
function ProductViewPage() {
  const [productList, setProductList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const typeSelected = useRef(-1);
  const [pageCurrent, setPageCurrent] = useState(1);
  // fn: Hàm lấy sản phẩm
  const getProductList = async (type, page) => {
    try {
      typeSelected.current = type;
      const response = await adminApi.getProductListByType(type, page, perPage);
      if (response) {
        const { count, data } = response.data;
        setPageCurrent(page);
        setProductList(data);
        setTotalPage(count);
      }
    } catch (error) {
      message.error('Lỗi, thử lại.');
    }
  };

  // fn: Hàm hiển thị sản phẩm
  const showProduct = (productList) => {
    return productList.map((product, index) => (
      <Col span={24} sm={12} md={8} xl={6} xxl={4} key={index}>
        <ProductItem
          id={product._id}
          style={{ width: '100%' }}
          avtUrl={product.avt}
          name={product.name}
          price={product.price}
          stock={product.stock}
          discount={product.discount}
          onDelete={onDeleteProduct}
        />
      </Col>
    ));
  };

  // fn: Xoá 1 sản phẩm
  const onDeleteProduct = (id) => {
    const newProductList = productList.filter((product) => product._id !== id);
    setProductList(newProductList);
    setTotalPage(totalPage - 1);
  };

  return (
    <div>
      <h1 className="t-center p-t-20">
        <b>Xem Sản Phẩm</b>
      </h1>
      {/* chọn loại sản phẩm */}
      <Select
        className="m-l-20"
        size="large"
        style={{ width: 250 }}
        onChange={(type) => getProductList(type, 1)}
        placeholder="Chọn loại sản phẩm *">
        {constants.PRODUCT_TYPES.map((item, index) => (
          <Select.Option value={item.type} key={index}>
            {item.label}
          </Select.Option>
        ))}
      </Select>

      {/* Show sản phẩm */}
      <Row gutter={[24, 24]} className="p-16">
        {showProduct(productList)}
      </Row>

      {/* Pagination Phân trang */}
      <div className="t-center">
        <Pagination
          onChange={(page) => getProductList(typeSelected.current, page)}
          total={totalPage}
          current={pageCurrent}
          pageSize={perPage}
        />
      </div>
    </div>
  );
}

export default ProductViewPage;
