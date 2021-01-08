import PropTypes from 'prop-types';
import { Button, Tag } from 'antd';
import constants from 'constants/index';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import helpers from 'helpers';

function FilterOptions(props) {
  const { type } = props;
  const [tagList, setTagList] = useState([]);
  const [activeList, setActiveList] = useState([]);

  // event: Chọn 1 btn trong bộ lọc
  const onChecked = (sub, key) => {
    const { title } = sub;
    const index = activeList.findIndex((value) => value === key);
    if (index === -1) {
      // thêm 1 key mới
      setActiveList([...activeList, key]);

      // thêm tag mới
      setTagList([...tagList, { key, title, color: helpers.randomColor() }]);
    }
    // xoá key hiện tại đã chọn
    else {
      setActiveList([
        ...activeList.slice(0, index),
        ...activeList.slice(index + 1, activeList.length),
      ]);
      setTagList([
        ...tagList.slice(0, index),
        ...tagList.slice(index + 1, tagList.length),
      ]);
    }
  };

  // event: đóng 1 tag
  const onCloseTag = (key) => {
    const index = tagList.findIndex((item) => item.key === key);

    setTagList([
      ...tagList.slice(0, index),
      ...tagList.slice(index + 1, tagList.length),
    ]);
    setActiveList([
      ...activeList.slice(0, index),
      ...activeList.slice(index + 1, activeList.length),
    ]);
  };

  // event: đóng tất cả các tag
  const onCloseAll = () => {
    setActiveList([]);
    setTagList([]);
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
                  onClick={() => onChecked(sub, key)}>
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
          onClose={() => onCloseTag(item.key)}>
          {item.title}
        </Tag>
      ))
    );
  }

  // rendering...
  return (
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
  );
}

FilterOptions.defaultProps = {
  type: 0,
};

FilterOptions.propTypes = {
  // bộ lọc sản phẩm loại gì?
  type: PropTypes.number,
};

export default FilterOptions;
