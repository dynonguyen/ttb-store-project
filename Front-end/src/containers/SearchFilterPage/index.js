import ResultSearch from 'components/ResultSearch';
import ProductCarousel from './ProductCarousel';
import React, { useEffect, useState } from 'react';
import FilterOptions from './FilterOptions';
import { useLocation } from 'react-router-dom';
import helpers from 'helpers';
import { Pagination, Spin } from 'antd';
import productApi from 'apis/productApi';

function SearchFilterPage() {
  // get query param
  const search = useLocation().search;
  const query = helpers.queryString(search);

  // search => t=1, filter => t=0, notExist(t)=>search
  let tQuery = query.find((item) => item.hasOwnProperty('t'));
  let isSearch = 1;
  if (tQuery === undefined) isSearch = 1;
  else isSearch = parseInt(tQuery.t);

  let keyword = query.find((item) => item.hasOwnProperty('keyword'));
  let keywordValue = '';
  if (keyword !== undefined)
    keywordValue = decodeURI(keyword.keyword.replace(/[+]/gi, ' '));

  // state
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // fn: tìm kiếm
  async function getSearchProducts(currentPage, isSubscribe) {
    try {
      const result = await productApi.getSearchProducts(
        keywordValue,
        currentPage,
        12,
      );
      if (result && isSubscribe) {
        const { list, count } = result.data;
        setList(list);
        setTotal(count);
        setIsLoading(false);
      }
    } catch (error) {
      setList([]);
      setTotal(0);
      setIsLoading(false);
    }
  }

  // event: Lấy dữ liệu tìm kiếm
  useEffect(() => {
    let isSubscribe = true;
    setIsLoading(true);
    if (isSearch) {
      getSearchProducts(1, isSubscribe);
      setPage(1);
    }
    // clean up
    return () => {
      isSubscribe = false;
    };
  }, [search]);
  // event: Lấy dữ liệu tìm kiếm khi đổi trang
  useEffect(() => {
    let isSubscribe = true;
    setIsLoading(true);
    if (isSearch) getSearchProducts(page, isSubscribe);
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
      {/* loading */}
      {isLoading ? (
        <Spin
          className="trans-center"
          tip="Đang tìm kiếm sản phẩm phù hợp ..."
          size="large"
        />
      ) : (
        <>
          {/* Bộ lọc */}
          {isSearch !== 1 && <FilterOptions />}
          {/* Kết quả lọc, tìm kiếm */}
          <ResultSearch initList={list} />
          {/* pagination */}
          {total > 0 && (
            <Pagination
              className="m-tb-16 t-center"
              total={total}
              current={page}
              showSizeChanger={false}
              pageSize={12}
              onChange={(p) => setPage(p)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SearchFilterPage;
