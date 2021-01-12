const AddressModel = require('../models/address.model');

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

module.exports = {
  getProvince,
  getDistrict,
  getWardStreetList,
};
