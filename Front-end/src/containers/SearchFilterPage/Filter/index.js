import { Button, Pagination, Spin, Tag } from 'antd';
import productApi from 'apis/productApi';
import ResultSearch from 'components/ResultSearch';
import constants from 'constants/index';
import helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCarousel from '../ProductCarousel';
import './index.scss';

// fn: thêm option vào url
function addOptionToUrl(url, key = '', value = '') {
  let result = url;

  let isChanged = false,
    isMatch = false;
  // tách url để phân tích
  let queryList = helpers.queryString(url);
  queryList.forEach((query) => {
    let k = Object.keys(query)[0];
    if (k === key) {
      isMatch = true;
      const valueList = query[k].split(';');
      if (valueList.indexOf(value) === -1) {
        query[k] = query[k] + ';' + value;
        isChanged = true;
      }
    }
  });

  // nêu chưa tồn tại key, value thì thêm nó vào
  if (!isMatch) {
    result += `&${key}=${value}`;
  }

  // join lại
  if (isChanged) {
    result = '?';
    queryList.forEach((query) => {
      const k = Object.keys(query)[0];
      result += `${k}=${query[k]}&`;
    });
    result = result.slice(0, result.length - 1);
  }
  return result;
}

// fn: xoá option trong url
function removeOptionToUrl(url, key = '', value = '') {
  let result = url;

  let isChanged = false;
  // tách url để phân tích
  let queryList = helpers.queryString(url);

  queryList.forEach((query) => {
    let k = Object.keys(query)[0];
    if (k === key) {
      query[k] = query[k].replace(
        new RegExp(`(${value});?|;?(${value})`, 'gi'),
        '',
      );
      isChanged = true;
    }
  });

  // join lại
  if (isChanged) {
    result = '?';
    queryList.forEach((query) => {
      const k = Object.keys(query)[0];
      result += `${k}=${query[k]}&`;
    });
    result = result.slice(0, result.length - 1);
  }
  return result;
}

//fn: phân tích mảng các câu query
function analysisQueryList(queryList = []) {
  const query = { pOption: new Object(), dOption: new Object() };
  queryList.forEach((item) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    const { isProductAttr, result } = helpers.analysisQuery(key, value);
    if (isProductAttr) {
      Object.assign(query.pOption, result);
    } else Object.assign(query.dOption, result);
  });
  return query;
}

// fn: main
function FilterResult() {
  // get query param
  let s = decodeURI(useLocation().search);

  // lưu state để thay đổi khi nhấn chọn các options mà không cần redirect
  const [url, setUrl] = useState(s);

  // phân tích url
  const search = helpers.replaceMongoKeyword(url);
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
  }, [url]);

  // event: Lấy dữ liệu tìm kiếm khi đổi trang
  useEffect(() => {
    let isSubscribe = true;
    getFilterProducts(page, isSubscribe);
    // clean up
    return () => {
      isSubscribe = false;
    };
  }, [page]);

  //  Note: FILTER OPTION
  const [tagList, setTagList] = useState([]);
  const [activeList, setActiveList] = useState([]);

  // event: Chọn 1 btn trong bộ lọc
  const onChecked = (sub, query, key) => {
    const { title, to } = sub;
    const index = activeList.findIndex((value) => value === key);
    if (index === -1) {
      // thêm 1 key mới
      setActiveList([...activeList, key]);
      // thêm tag mới
      setTagList([
        ...tagList,
        { key, query, to, title, color: helpers.randomColor() },
      ]);
      // thay đổi url
      setUrl(addOptionToUrl(url, query.slice(0, query.length - 1), to));
    }
    // xoá key hiện tại đã chọn
    else {
      const newActiveList = [
        ...activeList.slice(0, index),
        ...activeList.slice(index + 1, activeList.length),
      ];
      setActiveList([...newActiveList]);
      setTagList([
        ...tagList.slice(0, index),
        ...tagList.slice(index + 1, tagList.length),
      ]);
      if (newActiveList.length === 0) setUrl(s);
      else setUrl(removeOptionToUrl(url, query.slice(0, query.length - 1), to));
    }
  };

  // event: đóng 1 tag
  const onCloseTag = (key, query, to) => {
    const index = tagList.findIndex((item) => item.key === key);
    const newTagList = [
      ...tagList.slice(0, index),
      ...tagList.slice(index + 1, tagList.length),
    ];
    setTagList([...newTagList]);
    setActiveList([
      ...activeList.slice(0, index),
      ...activeList.slice(index + 1, activeList.length),
    ]);
    if (newTagList.length === 0) setUrl(s);
    else setUrl(removeOptionToUrl(url, query, to));
  };

  // event: đóng tất cả các tag
  const onCloseAll = () => {
    setActiveList([]);
    setTagList([]);
    setUrl(s);
  };

  // fn: hiển thị bộ lọc
  function renderFilterOption(type) {
    if (type < 0) return;
    const list = constants.FILTER_OPTION_LIST.find((item) => item.key === type)
      .data;
    return (
      list &&
      list.map((item, index) => (
        <div key={index} className="Filter-Options-item m-tb-14">
          <h3 className="Filter-Options-item--title">{item.title}</h3>
          <div>
            {item.subFilters.map((sub, i) => {
              let key = index.toString() + i.toString();
              return (
                <Button
                  key={key}
                  className={`bor-rad-4 m-r-8 ${
                    activeList.findIndex((value) => value === key) === -1
                      ? ''
                      : 'filter-active-btn'
                  }`}
                  onClick={() => onChecked(sub, item.query, key)}>
                  {sub.title}
                </Button>
              );
            })}
          </div>
        </div>
      ))
    );
  }

  // fn: hiển thị tag đang chọn lọc
  function showTagList() {
    return (
      tagList &&
      tagList.map((item, index) => (
        <Tag
          className="bor-rad-4"
          key={index}
          closable={true}
          color={item.color}
          onClose={() => onCloseTag(item.key, item.query, item.to)}>
          {item.title}
        </Tag>
      ))
    );
  }

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
          <div className="Filter-Options p-tb-16 bg-white bor-rad-8 box-sha-home">
            <div className="list-active p-lr-16 p-b-8 d-flex justify-content-between">
              <b className="font-size-22px filter-list m-r-20">Bộ lọc</b>
              {tagList.length > 0 && (
                <>
                  <div className="d-flex align-i-center flex-wrap">
                    {showTagList()}
                  </div>
                  <Button
                    className="bor-rad-4"
                    type="dashed"
                    danger
                    onClick={onCloseAll}>
                    <b>Xoá tất cả</b>
                  </Button>
                </>
              )}
            </div>
            <div className="p-lr-16 p-t-16">{renderFilterOption(type)}</div>
          </div>

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
