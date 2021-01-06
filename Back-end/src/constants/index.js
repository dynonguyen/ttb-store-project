module.exports = {
  // kích thược tối đa của request
  MAX_SIZE_JSON_REQUEST: '25mb',

  // số lượng của mã xác thực
  NUMBER_VERIFY_CODE: 6,

  // thời gian tồn tại của mã xác thực
  VERIFY_CODE_TIME_MILLISECONDS: 10 * 60 * 1000,

  // số lần đăng nhập sai tối đa
  MAX_FAILED_LOGIN_TIMES: 5,

  // thời gian sống mặc định cho jwt
  JWT_EXPIRES_TIME: 3 * 24 * 3600, //3 days (by sec)

  // thời hạn hiệu lực cho token
  COOKIE_EXPIRES_TIME: 10 * 24 * 3600 * 1000, //10 days

  // thời hạn hiệu lực cho refresh token
  JWT_REFRESH_EXPIRES_TIME: 6 * 30 * 24 * 3600, //6 months

  PRODUCT_TYPES_VN: [
    { type: 0, label: 'Laptop' },
    { type: 1, label: 'Ổ cứng' },
    { type: 2, label: 'Card màn hình' },
    { type: 3, label: 'Main board' },
    { type: 4, label: 'RAM' },
    { type: 5, label: 'Điện thoại' },
    { type: 6, label: 'Sạc dự phòng' },
    { type: 7, label: 'Tai nghe' },
    { type: 8, label: 'Bàn phím' },
    { type: 9, label: 'Màn hình' },
    { type: 10, label: 'Chuột' },
    { type: 11, label: 'Router Wifi' },
    { type: 12, label: 'Loa' },
    { type: 13, label: 'Máy ảnh' },
    { type: 14, label: 'Webcam' },
  ],

  // Loại sản phẩm
  PRODUCT_TYPES: {
    LAPTOP: 0,
    DISK: 1,
    DISPLAY: 2,
    MAIN_BOARD: 3,
    RAM: 4,
    MOBILE: 5,
    BACKUP_CHARGER: 6,
    HEADPHONE: 7,
    KEYBOARD: 8,
    MONITOR: 9,
    MOUSE: 10,
    ROUTER: 11,
    SPEAKER: 12,
    CAMERA: 13,
    WEBCAM: 14,
  },
};
