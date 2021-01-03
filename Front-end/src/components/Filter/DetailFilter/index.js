import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function genderDetailFilter(list) {
  return (
    list &&
    list.map((item, index) => (
      <div key={index} className="Filter-detail-item m-b-18">
        <span className="title">
          {item.title} <b>&#8919;</b>
        </span>
        {item.subFilters.map((sub, key) => (
          <Link key={key} to={sub.to} className="sub-filter">
            <i className="p-lr-6">&nbsp;|&nbsp;</i>
            {sub.title}
          </Link>
        ))}
      </div>
    ))
  );
}

function DetailFilter(props) {
  const { list, visible } = props;
  return (
    <>
      {visible && (
        <div className="Filter-detail bor-rad-8 p-tb-16 p-lr-32 w-100 h-100 m-l-16 d-flex flex-direction-column">
          {genderDetailFilter(list)}
        </div>
      )}
    </>
  );
}

DetailFilter.defaultProps = {
  visible: false,
  list: [],
};

DetailFilter.propTypes = {
  list: PropTypes.array,
  visible: PropTypes.bool,
};

export default DetailFilter;
