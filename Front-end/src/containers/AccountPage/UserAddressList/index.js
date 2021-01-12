import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import AddressAddForm from './AddressAddForm';

const list = [
  {
    name: 'Tuấn',
    address: '14/8, Phường Bình Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh ',
    phone: '0377757578',
  },
  {
    name: 'Tuấn',
    address: '14/8, Phường Bình Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh',
    phone: '0377757578',
  },
  {
    name: 'Tuấn',
    address: '14/8, Phường Bình Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh',
    phone: '0377757578',
  },
  {
    name: 'Tuấn',
    address: '14/8, Phường Bình Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh',
    phone: '0377757578',
  },
];

function showAddressList(list = []) {
  return (
    list &&
    list.map((item, index) => (
      <div
        className="bg-white bor-rad-8 box-sha-home p-tb-8 p-lr-16 m-b-16"
        key={index}>
        <div className="d-flex justify-content-between m-b-4">
          <h3>
            <b>{item.name}</b>
            {index === 0 && (
              <span
                className="font-size-12px p-tb-4 p-lr-8 m-l-8 bor-rad-4"
                style={{ border: 'solid 1px #3a5dd9', color: '#3a5dd9' }}>
                Mặc định
              </span>
            )}
          </h3>

          <div>
            <Button type="link">Chỉnh sửa</Button>
            <Button danger type="primary" disabled={index === 0}>
              Xoá
            </Button>
          </div>
        </div>
        <p className="m-b-6">
          <b>Địa chỉ:</b> {item.address}
        </p>
        <p className="m-b-6">
          <b>Số điện thoại:</b> {item.phone}
        </p>
      </div>
    ))
  );
}

function AddressUserList() {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  // rendering
  return (
    <div>
      {/* thêm địa chỉ */}
      <Button
        type="dashed"
        size="large"
        className="w-100"
        onClick={() => setIsVisibleForm(true)}
        style={{ height: 54 }}>
        <PlusOutlined />
        Thêm địa chỉ
      </Button>
      {/* hiện danh sách địa chỉ */}
      <div className="m-t-16">{showAddressList(list)}</div>
      {isVisibleForm && (
        <AddressAddForm onCloseForm={() => setIsVisibleForm(false)} />
      )}
    </div>
  );
}

export default AddressUserList;
