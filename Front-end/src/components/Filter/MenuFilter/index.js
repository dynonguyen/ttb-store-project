import cameraIcon from 'assets/icon/products/camera_32px.png';
import hdtvIcon from 'assets/icon/products/hdtv_32px.png';
import headphoneIcon from 'assets/icon/products/headphones_32px.png';
import keyboardIcon from 'assets/icon/products/keyboard_32px.png';
import laptopIcon from 'assets/icon/products/laptop_32px.png';
import mobileIcon from 'assets/icon/products/mobile_32px.png';
import mouseIcon from 'assets/icon/products/mouse_32px.png';
import routerIcon from 'assets/icon/products/router_32px.png';
import speakerIcon from 'assets/icon/products/speaker_32px.png';
import ssdIcon from 'assets/icon/products/ssd_32px.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    key: 0,
    to: '',
    icon: laptopIcon,
    title: 'Laptop & Macbook',
  },
  {
    key: 1,
    to: '',
    icon: ssdIcon,
    title: 'Ổ cứng - RAM',
  },
  {
    key: 2,
    to: '',
    icon: cameraIcon,
    title: 'Máy ảnh - Camera',
  },
  {
    key: 3,
    to: '',
    icon: hdtvIcon,
    title: 'Màn hình - Card màn hình',
  },
  {
    key: 4,
    to: '',
    icon: mobileIcon,
    title: 'Điện thoại - Phụ kiện',
  },
  {
    key: 5,
    to: '',
    icon: mouseIcon,
    title: 'Chuột máy tính',
  },
  {
    key: 6,
    to: '',
    icon: headphoneIcon,
    title: 'Tai nghe',
  },
  {
    key: 7,
    to: '',
    icon: routerIcon,
    title: 'Router - Thiết bị mạng',
  },
  {
    key: 8,
    to: '',
    icon: keyboardIcon,
    title: 'Bàn phím',
  },
  {
    key: 9,
    to: '',
    icon: speakerIcon,
    title: 'Loa - Âm thanh',
  },
];

function MenuFilter(props) {
  const { onShow } = props;

  function genderFilterMenu(list) {
    return (
      list &&
      list.map((item, index) => {
        return (
          <div
            onMouseEnter={() => onShow(item.key)}
            key={index}
            className="w-100 p-8 Filter-menu-item">
            <Link to={item.to} className="d-flex align-i-center">
              <img src={item.icon} className="icon m-lr-8" />
              <span className="title">{item.title}</span>
            </Link>
          </div>
        );
      })
    );
  }

  return (
    <div className="bor-rad-8 Filter-menu p-tb-4">{genderFilterMenu(menu)}</div>
  );
}

MenuFilter.propTypes = {
  onShow: PropTypes.func,
};

export default MenuFilter;
