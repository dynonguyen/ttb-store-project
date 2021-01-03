import { Col, Row } from 'antd';
import constants from 'constants/index';
import React, { useState } from 'react';
import DetailFilter from './DetailFilter';
import './index.scss';
import MenuFilter from './MenuFilter';

const listDetails = [
  // 0: LAPTOP
  {
    key: 0,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_LAPTOP,
      },
      {
        title: 'Kích thước',
        subFilters: constants.FILTER_SIZE_LAPTOP,
      },
      {
        title: 'Laptop theo giá',
        subFilters: constants.FILTER_PRICE_LAPTOP,
      },
      {
        title: 'Cấu hình chip',
        subFilters: constants.FILTER_CHIP_LAPTOP,
      },
      {
        title: 'Linh kiện laptop',
        subFilters: constants.FILTER_ACCESSORY_LAPTOP,
      },
    ],
  },
  // 1: DISK
  {
    key: 1,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_DISK,
      },
      {
        title: 'Ổ cứng theo loại',
        subFilters: constants.FILTER_TYPE_DISK,
      },
      {
        title: 'Dung lượng',
        subFilters: constants.FILTER_CAPACITY_DISK,
      },
      {
        title: 'Chuẩn kêt nối',
        subFilters: constants.FILTER_CONNECT_STD_DISK,
      },
      {
        title: 'Kích thước',
        subFilters: constants.FILTER_SIZE_DISK,
      },
    ],
  },
  // 2: RAM
  {
    key: 2,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_RAM,
      },
      {
        title: 'RAM theo bus',
        subFilters: constants.FILTER_BUS_RAM,
      },
      {
        title: 'Dung lượng',
        subFilters: constants.FILTER_CAPACITY_RAM,
      },
      {
        title: 'Thế hệ RAM',
        subFilters: constants.FILTER_GENERATION_RAM,
      },
    ],
  },
  // 3: MONITOR
  {
    key: 3,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_MONITOR,
      },
      {
        title: 'Tấm nền',
        subFilters: constants.FILTER_GB_PLATE_MONITOR,
      },
      {
        title: 'Độ phân giải',
        subFilters: constants.FILTER_RESOLUTON_MONITOR,
      },
      {
        title: 'Kích thước',
        subFilters: constants.FILTER_SIZE_MONITOR,
      },
      {
        title: 'Tần số quét',
        subFilters: constants.FILTER_FREQUENCY_MONITOR,
      },
    ],
  },
  // 4: DISPLAY
  {
    key: 4,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_DISPLAY,
      },
      {
        title: 'Dung lượng',
        subFilters: constants.FILTER_CAPACITY_DISPLAY,
      },
      {
        title: 'Nhà sản xuất',
        subFilters: constants.FILTER_MANUFACTURER_DISPLAY,
      },
    ],
  },
  // 5: MOBILE
  {
    key: 5,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_MOBILE,
      },
      {
        title: 'Theo giá',
        subFilters: constants.FILTER_PRICE_MOBILE,
      },
      {
        title: 'Bộ nhớ trong',
        subFilters: constants.FILTER_ROM_MOBILE,
      },
      {
        title: 'Dung lượng RAM',
        subFilters: constants.FILTER_RAM_MOBILE,
      },
      {
        title: 'Phụ kiện điện thoại',
        subFilters: constants.FILTER_ACCESSORY_MOBILE,
      },
    ],
  },
  // 6: MOUSE - KEYBOARD
  {
    key: 6,
    data: [
      {
        title: 'Chuột theo thương hiệu',
        subFilters: constants.FILTER_BRAND_MOUSE,
      },
      {
        title: 'Chuột theo loại',
        subFilters: constants.FILTER_TYPE_MOUSE,
      },
      {
        title: 'Bàn phím theo thương hiệu',
        subFilters: constants.FILTER_BRAND_KEYBOARD,
      },
      {
        title: 'Loại bàn phím',
        subFilters: constants.FILTER_TYPE_KEYBOARD,
      },
      {
        title: 'Màu bàn phím',
        subFilters: constants.FILTER_COLOR_KEYBOARD,
      },
      {
        title: 'Led bàn phím',
        subFilters: constants.FILTER_LED_KEYBOARD,
      },
    ],
  },
  // 7: HEADPHONE
  {
    key: 7,
    data: [
      {
        title: 'Loại tai nghe',
        subFilters: constants.FILTER_TYPE_HEADPHONE,
      },
      {
        title: 'Chuẩn kết nối',
        subFilters: constants.FILTER_CONNECT_STD_HEADPHONE,
      },
    ],
  },
  // 8: ROUTER
  {
    key: 8,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_ROUTER,
      },
      {
        title: 'Băngt thông',
        subFilters: constants.FILTER_BANDWIDTH_ROUTER,
      },
      {
        title: 'Độ mạnh ăng-ten',
        subFilters: constants.FILTER_STRONG_ROUTER,
      },
    ],
  },
  // 9: SPEAKER
  {
    key: 9,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_SPEAKER,
      },
      {
        title: 'Công suất tổng',
        subFilters: constants.FILTER_WATTAGE_SPEAKER,
      },
      {
        title: 'Chuẩn kết nối',
        subFilters: constants.FILTER_CONNECT_STD_SPEAKER,
      },
    ],
  },
  // 10: CAMERA
  {
    key: 10,
    data: [
      {
        title: 'Camera theo thương hiệu',
        subFilters: constants.FILTER_BRAND_CAMERA,
      },
      {
        title: 'Camera hành trình',
        subFilters: constants.FILTER_OTHER_CAMERA,
      },
    ],
  },
  // 11: MAINBOARD
  {
    key: 11,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: constants.FILTER_BRAND_MAINBOARD,
      },
      {
        title: 'Chipset',
        subFilters: constants.FILTER_CHIPSET_MAINBOARD,
      },
      {
        title: 'Chuẩn kích thước',
        subFilters: constants.FILTER_SIZE_STD_MAINBOARD,
      },
      {
        title: 'Socket',
        subFilters: constants.FILTER_SOCKET_MAINBOARD,
      },
      {
        title: 'Series mainboard',
        subFilters: constants.FILTER_SERIES_MAINBOARD,
      },
    ],
  },
];

function Filter() {
  const [filterDetails, setFilterDetails] = useState({
    visible: false,
    list: [],
  });
  // event: hiển thị chi tiết filter menu
  const onShowDetails = (key) => {
    const list = listDetails.find((item) => item.key === key);
    if (list) setFilterDetails({ visible: true, list: list.data });
    else setFilterDetails({ visible: false, list: [] });
  };

  // event: tắt chi tiết filter menu
  const onCloseDetails = () => {
    setFilterDetails({ visible: false, list: [] });
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
        />
      </Col>
    </Row>
  );
}

export default Filter;
