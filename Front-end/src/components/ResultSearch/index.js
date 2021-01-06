import { Button, Col, InputNumber, Row, Spin } from 'antd';
import productNotFoundUrl from 'assets/imgs/no-products-found.png';
import ProductView from 'components/ProductView';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

// fn: hàm tính tổng lượt đánh giá sản phẩm
function sumRate(rates = []) {
  return rates.reduce((a, b) => a + b, 0);
}

function ResultSearch(props) {
  const { initList } = props;
  const [list, setList] = useState([...initList]);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState({ from: 0, to: 0 });
  const [sortBtnActive, setSortBtnActive] = useState(0);
  const sortButtons = [
    { key: 1, title: 'Giá giảm dần' },
    { key: 2, title: 'Giá tăng dần' },
    { key: 3, title: 'Bán chạy nhất' },
    { key: 4, title: 'Đánh giá tốt nhất' },
    { key: 5, title: 'Khuyến mãi tốt nhất' },
  ];

  // event: sắp xếp danh sách theo các tiêu chí, type = 0 -> break
  const onSort = (type = 0) => {
    if (type) {
      if (type === sortBtnActive) {
        // trả về danh sách ban đầu
        setList([...initList]);
        setSortBtnActive(0);
        return;
      } else {
        // loading
        setIsLoading(true);
        setSortBtnActive(type);
      }

      let newList = [];
      switch (type) {
        // theo giá giảm dần
        case 1:
          newList = list.sort((a, b) => b.price - a.price);
          break;
        // theo giá tăng dần
        case 2:
          newList = list.sort((a, b) => a.price - b.price);
          break;
        // bán chạy nhất
        case 3:
          newList = list.sort((a, b) => sumRate(b.rate) - sumRate(a.rate));
          break;
        // đánh giá tốt nhất
        case 4:
          newList = list.sort(
            (a, b) => helpers.calStar(b.rate) - helpers.calStar(a.rate),
          );
          break;
        // Khuyến mãi tốt nhất
        case 5:
          newList = list.sort((a, b) => b.discount - a.discount);
          break;
        default:
          setIsLoading(false);
          break;
      }

      // delay
      setTimeout(() => {
        setIsLoading(false);
        setList(newList);
      }, 200);
    }
  };

  // event: Lọc theo giá
  const onFilterByPrice = () => {
    setIsLoading(true);
    const { from, to } = price;
    let newList = initList.filter(
      (item) => item.price >= from && item.price <= to,
    );
    // delay
    setTimeout(() => {
      setIsLoading(false);
      setList(newList);
    }, 200);
  };

  // fn: Hiển thị sản phẩm
  const showProducts = (list) => {
    list = list ? list : [];
    return list.map((product, index) => {
      const { avt, name, price, discount, stock, _id } = product;
      return (
        <Col key={index} span={24} sm={12} lg={8} xl={6} xxl={4}>
          <Link to={`/product/${_id}`}>
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

  // rendering ...
  return (
    <Row className="Result-Search bor-rad-8 box-sha-home bg-white m-tb-32">
      {/* header sort, search button */}
      <Col span={24} className="sort-wrapper p-lr-16">
        <div className="sort p-tb-10 d-flex align-i-center">
          <h3 className="m-r-8 font-weight-700">Sắp xếp theo</h3>
          {sortButtons.map((item) => (
            <Button
              className={`${
                item.key === sortBtnActive ? 'sort-btn-active' : ''
              } m-4 bor-rad-4`}
              key={item.key}
              size="large"
              onClick={() => onSort(item.key)}>
              {item.title}
            </Button>
          ))}
          {/* search range price */}
          <div className="m-l-8">
            <InputNumber
              className="bor-rad-4"
              size="large"
              min={0}
              max={1000000000}
              style={{ width: 120 }}
              placeholder="Giá thấp nhất"
              step={10000}
              onChange={(value) => setPrice({ ...price, from: value })}
            />
            {` - `}
            <InputNumber
              className="bor-rad-4"
              size="large"
              min={price.from}
              max={1000000000}
              style={{ width: 120 }}
              placeholder="Giá cao nhất"
              step={10000}
              onChange={(value) => setPrice({ ...price, to: value })}
            />
            {price.to > 0 && (
              <Button
                type="primary"
                size="large"
                className="m-l-8 price-search-btn bor-rad-4"
                onClick={onFilterByPrice}>
                Lọc
              </Button>
            )}
          </div>
        </div>
      </Col>

      {/* render list */}
      <Col span={24} className="Result-Search-list p-16">
        {!list || list.length === 0 ? (
          <div className="trans-center d-flex flex-direction-column pos-relative">
            <img
              className="not-found-product m-0-auto"
              src={productNotFoundUrl}
            />
            <span className="font-size-16px m-t-8 t-center">
              Không sản phẩm nào được tìm thấy
            </span>
          </div>
        ) : isLoading ? (
          <Spin
            className="trans-center"
            tip="Đang cập nhật sản phẩm ..."
            size="large"
          />
        ) : (
          <Row gutter={[8, 16]}>{showProducts(list)}</Row>
        )}
      </Col>
    </Row>
  );
}

ResultSearch.defaultProps = {
  initList: [],
};

ResultSearch.propTypes = {
  initList: PropTypes.array,
};

export default ResultSearch;
