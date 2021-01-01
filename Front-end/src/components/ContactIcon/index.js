import React from 'react';
import messageIcon from 'assets/imgs/logo-message.png';
import { Tooltip } from 'antd';
import './index.scss';

function ContactIcon() {
  return (
    <a
      className="Contact-Icon-Link"
      href="https://fb.com/TuanNguyen250400"
      target="blank">
      <Tooltip title="Liên hệ tư vấn" placement="left">
        <img className="Contact-Icon" src={messageIcon} />
      </Tooltip>
    </a>
  );
}

export default ContactIcon;
