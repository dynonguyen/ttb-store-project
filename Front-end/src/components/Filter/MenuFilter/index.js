import laptopIcon from 'assets/icon/products/laptop_32px.png';
import ssdIcon from 'assets/icon/products/ssd_32px.png';
import cameraIcon from 'assets/icon/products/camera_32px.png';
import hdtvIcon from 'assets/icon/products/hdtv_32px.png';
import mobileIcon from 'assets/icon/products/mobile_32px.png';
import mouseIcon from 'assets/icon/products/mouse_32px.png';
import headphoneIcon from 'assets/icon/products/headphones_32px.png';
import routerIcon from 'assets/icon/products/router_32px.png';
import keyboardIcon from 'assets/icon/products/keyboard_32px.png';
import speakerIcon from 'assets/icon/products/speaker_32px.png';
import React from 'react';
import { Link } from 'react-router-dom';

function genderFilterMenu(list) {
  return (
    list &&
    list.map((item, index) => {
      return (
        <div key={index} className="w-100 p-8 Filter-menu-item">
          <Link to={item.to} className="d-flex align-i-center">
            <img src={item.icon} className="icon m-lr-8" />
            <span className="title">{item.title}</span>
          </Link>
        </div>
      );
    })
  );
}

const menu = [
  {
    to: '',
    icon: laptopIcon,
    title: 'Laptop & Macbook',
  },
  {
    to: '',
    icon: ssdIcon,
    title: 'Ổ cứng - RAM',
  },
  {
    to: '',
    icon: cameraIcon,
    title: 'Máy ảnh - Camera',
  },
  {
    to: '',
    icon: hdtvIcon,
    title: 'Màn hình - Card màn hình',
  },
  {
    to: '',
    icon: mobileIcon,
    title: 'Điện thoại - Phụ kiện',
  },
  {
    to: '',
    icon: mouseIcon,
    title: 'Chuột máy tính',
  },
  {
    to: '',
    icon: headphoneIcon,
    title: 'Tai nghe',
  },
  {
    to: '',
    icon: routerIcon,
    title: 'Router - Thiết bị mạng',
  },
  {
    to: '',
    icon: keyboardIcon,
    title: 'Bàn phím',
  },
  {
    to: '',
    icon: speakerIcon,
    title: 'Loa - Âm thanh',
  },
];

function MenuFilter() {
  return (
    <div className="bor-rad-8 bg-white Filter-menu p-tb-4">
      {genderFilterMenu(menu)}
    </div>
  );
}

export default MenuFilter;
