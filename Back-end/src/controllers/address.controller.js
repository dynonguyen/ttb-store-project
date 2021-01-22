const DeliveryAddressModel = require('../models/account.models/deliveryAddress.model');
const AddressModel = require('../models/address.model');
const helpers = require('../helpers');
// api: lấy danh sách các tỉnh thành phố
// Note: chỉ lấy ds tỉnh không gửi về huyện/quận sẽ làm app bị chậm không cần thiết
// Vì không phải lúc nào cũng cần dùng đến huyện/xã
const getProvince = async (req, res, next) => {
  try {
    const list = await AddressModel.find({}).select('-districts -_id');
    if (list) {
      return res.status(200).json(list);
    }
  } catch (error) {
    return res.status(400).json({ message: 'failed' });
  }
};

// api: lấy danh sách huyện/quận theo id tỉnh
// Note: chỉ lấy huyện/quận; không lấy phường & đường
const getDistrict = async (req, res, next) => {
  try {
    const { id } = req.query;
    const data = await AddressModel.findOne({ id }).select('districts -_id');
    if (data) {
      const list = data.districts.map((item) => {
        return { id: item.id, name: item.name };
      });
      return res.status(200).json(list);
    }
  } catch (error) {
    return res.status(400).json({ message: 'failed' });
  }
};

// api: lấy danh sách đường theo id huyện
const getWardStreetList = async (req, res, next) => {
  try {
    const { id, district } = req.query;
    const data = await AddressModel.findOne({ id }).select('districts -_id');
    if (data) {
      const result = data.districts.find((item) => item.id == district);
      return res
        .status(200)
        .json({ wards: result.wards, streets: result.streets });
    }
  } catch (error) {
    return res.status(400).json({ message: 'failed' });
  }
};

// api: Lấy danh sách địa chỉ nhận hàng
const getDeliveryAddressList = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const address = await DeliveryAddressModel.findOne({ user: userId }).select(
      'list -_id',
    );
    if (address) {
      // đổi địa chỉ sang str
      let list = await Promise.all(
        address.list.map(async (item) => {
          let newAddress = await helpers.convertAddress(item.address);
          return { ...item, address: newAddress };
        }),
      );

      return res.status(200).json({ list: list });
    }
  } catch (error) {
    return res.status(401).json({ list: [] });
  }
};

// api: Thêm địa chỉ nhận hàng
const postAddDeliveryAddress = async (req, res, next) => {
  try {
    const { userId, newAddress } = req.body;
    // Kiểm tra xem tài khoản này đã có địa chỉ giao hàng nào chưa
    const deliAddress = await DeliveryAddressModel.findOne({ user: userId });
    if (!deliAddress) {
      // Nếu chưa thì thêm mới
      const newDeliAdd = await DeliveryAddressModel.create({
        user: userId,
        list: [newAddress],
      });
      if (newDeliAdd) {
        return res.status(200).json({ message: 'Success' });
      }
    } else {
      // Nếu đã tồn tại thì thêm vào list nếu địa chỉ đó chưa tồn tại
      const list = deliAddress.list ? deliAddress.list : [];
      let addStr = JSON.stringify(newAddress.address);
      for (let i = 0; i < list.length; ++i) {
        if (JSON.stringify(list[i].address) === addStr) {
          return res.status(401).json({ message: 'Địa chỉ này đã tồn tại' });
        }
      }
      const responseUpdate = await DeliveryAddressModel.updateOne(
        { user: userId },
        { list: [...list, newAddress] },
      );
      if (responseUpdate) return res.status(200).json({ message: 'success' });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(409)
      .json({ message: 'Thêm địa chỉ giao hàng thất bại, thử lại' });
  }
};

module.exports = {
  getProvince,
  getDistrict,
  getWardStreetList,
  getDeliveryAddressList,
  postAddDeliveryAddress,
};
