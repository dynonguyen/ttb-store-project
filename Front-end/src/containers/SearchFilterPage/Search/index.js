import { Pagination, Spin } from 'antd';
import productApi from 'apis/productApi';
import ResultSearch from 'components/ResultSearch';
import helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCarousel from '../ProductCarousel';

function SearchResult() {
  // get query param
  const search = useLocation().search;
  const query = helpers.queryString(search);

  // keyword search
  let keyword = query.find((item) => item.hasOwnProperty('keyword'));
  let keywordValue = '';
  if (keyword !== undefined)
    keywordValue = decodeURI(keyword.keyword.replace(/[+]/gi, ' '));

  // state pagination
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
    if (page !== 1) setPage(1);
    getSearchProducts(1, isSubscribe);

    // clean up
    return () => {
      isSubscribe = false;
    };
  }, [search]);

  // event: Lấy dữ liệu tìm kiếm khi đổi trang
  useEffect(() => {
    let isSubscribe = true;
    setIsLoading(true);
    getSearchProducts(page, isSubscribe);
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
        <h2 className="font-size-24px">
          Tìm được <b>{total}</b> sản phẩm{' '}
          {keywordValue !== '' ? `cho "${keywordValue}"` : ''}
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

export default SearchResult;
