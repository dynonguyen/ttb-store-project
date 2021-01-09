import ResultSearch from 'components/ResultSearch';
import ProductCarousel from '../ProductCarousel';
import React, { useEffect, useState } from 'react';
import FilterOptions from '../FilterOptions';
import { useLocation, useRouteMatch } from 'react-router-dom';
import helpers from 'helpers';
import { Pagination, Spin } from 'antd';
import productApi from 'apis/productApi';

//fn: phân tích mảng các câu query
function analysisQueryList(queryList = []) {
  const query = { pOption: new Object(), dOption: new Object() };
  queryList.forEach((item) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    const { isProductAttr, result } = helpers.analysisQuery(key, value);
    if (isProductAttr) {
      // Nếu trong Object query đã tồn tại key đó thì $or nó
      // const resultKey = Object.keys(result)[0];
      Object.assign(query.pOption, result);
    } else Object.assign(query.dOption, result);
  });
  return query;
}

function FilterResult() {
  // get query param
  let search = decodeURI(useLocation().search);
  search = helpers.replaceMongoKeyword(search);
  const queryStrList = helpers.queryString(search);
  let type = 0;
  const queryList = queryStrList.filter((item) => {
    //  type
    if (Object.keys(item)[0] === 't') {
      if (isNaN(parseInt(item.t))) type = 0;
      else type = parseInt(item.t);
      return false;
    }
    return true;
  });
  const { dOption, pOption } = analysisQueryList(queryList);

  // state pagination
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const perPage = 12;

  // fn: filter function
  async function getFilterProducts(currentPage, isSubscribe) {
    try {
      setIsLoading(true);
      const productList = await productApi.getFilterProducts(
        type,
        pOption,
        dOption,
        currentPage,
        perPage,
      );
      if (productList && isSubscribe) {
        const { count, list } = productList.data;
        setTotal(count);
        setList(list);
        setIsLoading(false);
      }
    } catch (error) {
      setTotal(0);
      setIsLoading(false);
      setList([]);
    }
  }

  // event: Lấy dữ liệu tìm kiếm
  useEffect(() => {
    let isSubscribe = true;
    setIsLoading(true);
    if (page !== 1) setPage(1);
    getFilterProducts(1, isSubscribe);

    // clean up
    return () => {
      isSubscribe = false;
    };
  }, [search]);

  // event: Lấy dữ liệu tìm kiếm khi đổi trang
  useEffect(() => {
    let isSubscribe = true;
    getFilterProducts(page, isSubscribe);
    // clean up
    return () => {
      isSubscribe = false;
    };
  }, [page]);

  // rendering...
  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      {/* Carousel */}
      <ProductCarousel />

      {/* Số  kết quả tìm kiếm */}
      {!isLoading && (
        <h2 className="font-size-24px m-b-12">
          Tìm được <b>{total}</b> sản phẩm
        </h2>
      )}

      {/* loading */}
      {isLoading ? (
        <Spin
          className="trans-center"
          tip="Đang tìm kiếm sản phẩm phù hợp ..."
          size="large"
        />
      ) : (
        <>
          {/* Bộ lọc  */}
          <FilterOptions type={type} />

          {/* Kết quả lọc, tìm kiếm */}
          <ResultSearch initList={list} />

          {/* pagination */}
          {total > 0 && (
            <Pagination
              className="m-tb-16 t-center"
              total={total}
              current={page}
              showSizeChanger={false}
              pageSize={perPage}
              onChange={(p) => setPage(p)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default FilterResult;
