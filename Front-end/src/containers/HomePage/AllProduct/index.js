import { Col, Pagination, Row, Spin } from 'antd';
import productApi from 'apis/productApi';
import ProductView from 'components/ProductView';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllProduct() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // lấy sản phẩm
  useEffect(() => {
    setIsLoading(true);
    async function getAllProducts() {
      try {
        const response = await productApi.getAllProducts(page, 24);
        if (response) {
          const { data, count } = response.data;
          setList(data);
          setTotal(count);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }

    getAllProducts();
  }, [page]);

  // fn: Hiển thị sản phẩm
  const showProducts = (list) => {
    return list.map((product, index) => {
      const { avt, name, price, discount, stock, _id } = product;
      return (
        <Col key={index} span={24} sm={12} lg={8} xl={6}>
          <Link to={`/products/${_id}`}>
            <ProductView
              name={name}
              price={price}
              stock={stock}
              avtUrl={avt}
              discount={discount}
              height={400}
            />
          </Link>
        </Col>
      );
    });
  };

  return (
    <Row className="p-16" style={{ minHeight: 200 }} gutter={[16, 16]}>
      <Col span={24}>
        <h2 className="font-weight-700">Tất cả sản phẩm</h2>
        <div className="underline-title"></div>
      </Col>
      {isLoading ? (
        <Spin
          className="trans-center"
          tip="Đang tải sản phẩm ..."
          size="large"
        />
      ) : (
        showProducts(list)
      )}
      <Col span={24}>
        <Pagination
          className="t-center"
          current={page}
          pageSize={24}
          total={total}
          onChange={(p) => setPage(p)}
          showSizeChanger={false}
        />
      </Col>
    </Row>
  );
}

export default AllProduct;