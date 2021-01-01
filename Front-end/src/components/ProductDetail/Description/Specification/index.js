import helpers from 'helpers';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

// fn: lấy danh sách thông số
function listSpecification(data) {
  let result = [];
  for (let key in data) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        result.push({ key: helpers.convertProductKey(k), value: data[key][k] });
      }
      continue;
    }
    result.push({ key: helpers.convertProductKey(key), value: data[key] });
  }

  return result;
}

// fn: show danh sách
function showSpecification(list) {
  return (
    list &&
    list.map((item, index) => (
      <div key={index} className="Specification-item d-flex p-12">
        <span className="font-size-16px" style={{ flexBasis: 150 }}>
          {item.key}
        </span>
        <span className="font-size-16px flex-grow-1">{item.value}</span>
      </div>
    ))
  );
}

// rendering ...
function Specification(props) {
  const { data } = props;
  const { brand, warranty, otherInfo, ...rest } = data;
  const list = [...listSpecification(rest), ...otherInfo];
  return (
    <div className="Specification p-t-16">
      <div className="Specification-item d-flex p-12">
        <span className="font-size-16px" style={{ flexBasis: 150 }}>
          Thương hiệu
        </span>
        <span className="font-size-16px flex-grow-1">{brand}</span>
      </div>
      {showSpecification(list)}
      <div className="Specification-item d-flex p-12">
        <span className="font-size-16px" style={{ flexBasis: 150 }}>
          Bảo hành
        </span>
        <span className="font-size-16px flex-grow-1">{warranty} tháng</span>
      </div>
    </div>
  );
}

Specification.propTypes = {
  data: PropTypes.object,
};

export default Specification;
