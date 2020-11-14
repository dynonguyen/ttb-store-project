import React from 'react';
import { Spin } from 'antd';

function GlobalLoading() {
  return (
    <Spin
      size="large"
      className="Global-Loading trans-center"
      tip="TTB Store Loading..."
    />
  );
}

export default GlobalLoading;
