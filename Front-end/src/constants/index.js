// gender options
const GENDER_OPTIONS = [
  { value: true, label: 'Nam' },
  { value: false, label: 'Nữ' },
];

// product type options
const PRODUCT_TYPES = [
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
];

const ROUTES = {
  SIGNUP: '/signup',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/login/forgot-pw',
};

export default {
  MAX_VERIFY_CODE: 6,
  GENDER_OPTIONS,
  // tuổi nhỏ nhất sử dụng app
  MIN_AGE: 8,
  // thời gian delay khi chuyển trang
  DELAY_TIME: 750,
  // số lần đăng nhập sai tối đa
  MAX_FAILED_LOGIN_TIMES: 5,
  ROUTES,
  REFRESH_TOKEN: 'refresh_token',
  PRODUCT_TYPES,

  // tỉ lệ nén ảnh, và nén png 2MB
  COMPRESSION_RADIO: 0.6,
  COMPRESSION_RADIO_PNG: 2000000,

  // số lượng sản phẩm liên quan tối đa cần lấy
  MAX_RELATED_PRODUCTS: 12,
};
