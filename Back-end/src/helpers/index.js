const VerifyModel = require('../models/account.models/verify.model');
const constants = require('../constants/index');
const LaptopModel = require('../models/product.models/computer.models/laptop.model');
const DisplayModel = require('../models/product.models/computer.models/display.model');
const DiskModel = require('../models/product.models/computer.models/disk.model');
const MainboardModel = require('../models/product.models/computer.models/mainboard.model');
const MobileModel = require('../models/product.models/mobile.models/mobile.model');
const BackupChargerModel = require('../models/product.models/mobile.models/backupCharger.model');
const HeadphoneModel = require('../models/product.models/peripherals.models/headphone.model');
const RamModel = require('../models/product.models/computer.models/ram.model');
const KeyboardModel = require('../models/product.models/peripherals.models/keyboard.model');
const MonitorModel = require('../models/product.models/peripherals.models/monitor.model');
const MouseModel = require('../models/product.models/peripherals.models/mouse.model');
const RouterModel = require('../models/product.models/peripherals.models/router.model');
const SpeakerModel = require('../models/product.models/peripherals.models/speaker.model');
const CameraModel = require('../models/product.models/camera.models/camera.model');
const WebcamModel = require('../models/product.models/camera.models/webcam.model');

//fn: tạo mã xác thực
const generateVerifyCode = (numberOfDigits) => {
  //random một số từ 1 -> 10^numberOfDigits
  const n = parseInt(numberOfDigits);
  const number = Math.floor(Math.random() * Math.pow(10, n)) + 1;
  let numberStr = number.toString();
  const l = numberStr.length;
  for (let i = 0; i < 6 - l; ++i) {
    numberStr = '0' + numberStr;
  }
  return numberStr;
};

//fn: kiểm tra mã xác thực
const isVerifyEmail = async (email, verifyCode) => {
  try {
    const res = await VerifyModel.findOne({ email });
    if (res) {
      const { code, dateCreated } = res;
      if (code !== verifyCode) return false;
      const now = Date.now();
      // kiểm tra mã còn hiệu lực hay không
      if (now - dateCreated > constants.VERIFY_CODE_TIME_MILLISECONDS)
        return false;
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//fn: chuyển loại sản phẩm từ số thành Model
const convertProductType = (type = 0) => {
  switch (type) {
    case 0:
      return LaptopModel;
    case 1:
      return DiskModel;
    case 2:
      return DisplayModel;
    case 3:
      return MainboardModel;
    case 4:
      return RamModel;
    case 5:
      return MobileModel;
    case 6:
      return BackupChargerModel;
    case 7:
      return HeadphoneModel;
    case 8:
      return KeyboardModel;
    case 9:
      return MonitorModel;
    case 10:
      return MouseModel;
    case 11:
      return RouterModel;
    case 12:
      return SpeakerModel;
    case 13:
      return CameraModel;
    case 14:
      return WebcamModel;
    default:
      return LaptopModel;
  }
};

// fn: xác định loại sản phẩm thông qua string
const typeOfProduct = (str = '') => {
  if (str === undefined || str === '') return [];
  let typeList = [];
  const strLow = str.toLowerCase();
  const list = constants.PRODUCT_TYPES_VN;
  for (let i = 0; i < list.length; ++i) {
    if (strLow.includes(list[i].label.toLowerCase()))
      typeList.push(list[i].type);
  }
  return typeList;
};

module.exports = {
  generateVerifyCode,
  isVerifyEmail,
  convertProductType,
  typeOfProduct,
};
