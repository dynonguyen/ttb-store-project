import { Col, Row } from 'antd';
import constants from 'constants/index';
import React, { useState } from 'react';
import DetailFilter from './DetailFilter';
import './index.scss';
import MenuFilter from './MenuFilter';

function Filter() {
  const [filterDetails, setFilterDetails] = useState({
    visible: false,
    list: [],
    root: '',
  });
  // event: hiển thị chi tiết filter menu
  const onShowDetails = (key) => {
    const list = constants.FILTER_OPTION_LIST.find((item) => item.key === key);
    if (list)
      setFilterDetails({ visible: true, list: list.data, root: list.root });
    else setFilterDetails({ visible: false, list: [], root: '' });
  };

  // event: tắt chi tiết filter menu
  const onCloseDetails = () => {
    setFilterDetails({ visible: false, list: [], root: '' });
  };

  // rendering ...
  return (
    <Row className="Filter" onMouseLeave={onCloseDetails}>
      <Col span={2} sm={4} md={8} xl={6}>
        <MenuFilter onShow={onShowDetails} />
      </Col>
      <Col span={22} sm={20} md={16} xl={18}>
        <DetailFilter
          visible={filterDetails.visible}
          list={filterDetails.list}
          root={filterDetails.root}
        />
      </Col>
    </Row>
  );
}

export default Filter;
