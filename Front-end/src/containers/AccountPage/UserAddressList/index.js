import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Spin } from 'antd';
import addressApi from 'apis/addressApi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddressAddForm from './AddressAddForm';

function AddressUserList(props) {
  const { isCheckout, onChecked } = props;
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [list, setList] = useState([]);
  const [activeItem, setActiveItem] = useState(-1);
  const user = useSelector((state) => state.user);
  const [updateList, setUpdateList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // event: xoá 1 địa chỉ giao nhận
  const onDelDeliveryAdd = async (item) => {
    try {
      const response = await addressApi.delDeliveryAddress(user._id, item);
      if (response) {
        message.success('Xoá địa chỉ thành công');
        setUpdateList(!updateList);
      }
    } catch (error) {
      message.error('Xoá địa chỉ giao, nhận thất bại.');
    }
  };

  // event: đặt mặc định
  const onSetDefaultDeliveryAdd = async (item) => {
    try {
      const response = await addressApi.putSetDefaultDeliveryAddress(
        user._id,
        item,
      );
      if (response) {
        message.success('Cập nhật thành công');
        setUpdateList(!updateList);
      }
    } catch (error) {
      message.error('Cập nhật thất bại.');
    }
  };

  // fn: hiển thị danh sách
  function showAddressList(list = []) {
    return (
      list &&
      list.map((item, index) => (
        <div
          className={`bg-white bor-rad-8 box-sha-home p-tb-8 p-lr-16 m-b-16 ${
            activeItem === index && isCheckout ? 'item-active' : ''
          }`}
          onClick={() => {
            if (isCheckout) {
              setActiveItem(index);
              onChecked(index);
            }
          }}
          key={index}>
          <div className="d-flex justify-content-between m-b-4">
            <h3>
              <b>{item.name}</b>
              {index === 0 && !isCheckout && (
                <span
                  className="font-size-12px p-tb-4 p-lr-8 m-l-8 bor-rad-4"
                  style={{ border: 'solid 1px #3a5dd9', color: '#3a5dd9' }}>
                  Mặc định
                </span>
              )}
            </h3>

            {index !== 0 && !isCheckout && (
              <div>
                <Button
                  type="link"
                  onClick={() => onSetDefaultDeliveryAdd(index)}>
                  Đặt mặc định
                </Button>
                <Button
                  danger
                  type="primary"
                  disabled={index === 0}
                  onClick={() => onDelDeliveryAdd(index)}>
                  Xoá
                </Button>
              </div>
            )}
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

  // event: Lấy danh sách địa chỉ
  useEffect(() => {
    let isSubscribe = true;
    async function getDeliveryAddressList() {
      try {
        setIsLoading(true);
        const response = await addressApi.getDeliveryAddressList(user._id);
        if (isSubscribe && response) {
          setList(response.data.list);
          setIsLoading(false);
        }
      } catch (error) {
        if (isSubscribe) {
          setList([]);
          setIsLoading(false);
        }
      }
    }
    if (user) getDeliveryAddressList();
    return () => (isSubscribe = false);
  }, [user, updateList]);

  // rendering
  return (
    <>
      {isLoading ? (
        <div className="t-center m-tb-48">
          <Spin tip="Đang tải danh sách địa chỉ giao hàng ..." size="large" />
        </div>
      ) : (
        <div className="User-Address-List">
          {/* thêm địa chỉ, chỉ cho tối đa 5 địa chỉ */}
          {list.length < 5 && (
            <Button
              type="dashed"
              size="large"
              className="w-100"
              onClick={() => setIsVisibleForm(true)}
              style={{ height: 54 }}>
              <PlusOutlined />
              Thêm địa chỉ
            </Button>
          )}
          {/* hiện danh sách địa chỉ */}
          {list.length > 0 ? (
            <div className="m-t-16">{showAddressList(list)}</div>
          ) : (
            <h3 className="m-t-16 t-center" style={{ color: '#888' }}>
              Hiện tại bạn chưa có địa chỉ giao, nhận hàng nào
            </h3>
          )}
          {isVisibleForm && (
            <AddressAddForm
              onCloseForm={(addFlag) => {
                // cở hiệu báo thêm mới địa chỉ thành công để cập nhật lại địa chỉ
                if (addFlag) setUpdateList(!updateList);
                setIsVisibleForm(false);
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

AddressUserList.defaultProps = {
  isCheckout: false,
  onChecked: function() {},
};

AddressUserList.propTypes = {
  isCheckout: PropTypes.bool,
  onChecked: PropTypes.func,
};

export default AddressUserList;
