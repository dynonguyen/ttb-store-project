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
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/login/forgot-pw',
  PRODUCT: '/product/:productId',
  NOT_FOUND: '/not-found',
  ADMIN: '/admin',
  ACCOUNT: '/account',
  CART: '/cart',
};

// FILTERS
// laptop
const FILTER_BRAND_LAPTOP = [
  {
    title: 'Apple',
    to: '/',
  },
  {
    title: 'Acer',
    to: '/',
  },
  {
    title: 'ASUS',
    to: '/',
  },
  {
    title: 'Dell',
    to: '/',
  },
  {
    title: 'HP',
    to: '/',
  },
  {
    title: 'Lenovo',
    to: '/',
  },
  {
    title: 'LG',
    to: '/',
  },
  {
    title: 'MSI',
    to: '/',
  },
];
const FILTER_SIZE_LAPTOP = [
  {
    title: 'Dưới 13 inch',
    to: '/',
  },
  {
    title: 'Từ 13 đến 15 inch',
    to: '/',
  },
  {
    title: 'Trên 15 inch',
    to: '/',
  },
];
const FILTER_PRICE_LAPTOP = [
  {
    title: 'Dưới 10 triệu',
    to: '/',
  },
  {
    title: 'Từ 10 - 15 triệu',
    to: '/',
  },
  {
    title: 'Từ 15 - 20 triệu',
    to: '/',
  },
  {
    title: 'Từ 20 - 30 triệu',
    to: '/',
  },
  {
    title: 'Từ 30 - 50 triệu',
    to: '/',
  },
  {
    title: 'Trên 50 triệu',
    to: '/',
  },
];
const FILTER_CHIP_LAPTOP = [
  {
    title: 'Intel Core i3',
    to: '/',
  },
  {
    title: 'Intel Core i5',
    to: '/',
  },
  {
    title: 'Intel Core i7',
    to: '/',
  },
  {
    title: 'Intel Core i9',
    to: '/',
  },
  {
    title: 'AMD Ryzen 3',
    to: '/',
  },
  {
    title: 'AMD Ryzen 5',
    to: '/',
  },
  {
    title: 'AMD Ryzen 7',
    to: '/',
  },
  {
    title: 'Pentium',
    to: '/',
  },
  {
    title: 'Celeron',
    to: '/',
  },
];
const FILTER_ACCESSORY_LAPTOP = [
  {
    title: 'Bàn phím',
    to: '/',
  },
  {
    title: 'RAM máy tính',
    to: '/',
  },
  {
    title: 'Ổ cứng',
    to: '/',
  },
  {
    title: 'Chuột máy tính',
    to: '/',
  },
];
// ram
const FILTER_BRAND_RAM = [
  {
    title: 'G.SKILL',
    to: '/',
  },
  {
    title: 'KINGSTON',
    to: '/',
  },
  {
    title: 'KINGMAX',
    to: '/',
  },
  {
    title: 'CORSAIR',
    to: '/',
  },
  {
    title: 'GEIL',
    to: '/',
  },
  {
    title: 'GIGABYTE',
    to: '/',
  },
];
const FILTER_BUS_RAM = [
  {
    title: '1600 MHz',
    to: '/',
  },
  {
    title: '2400 MHz',
    to: '/',
  },
  {
    title: '2666 MHz',
    to: '/',
  },
  {
    title: '2800 MHz',
    to: '/',
  },
  {
    title: '3000 MHz',
    to: '/',
  },
  {
    title: '3200 MHz',
    to: '/',
  },
  {
    title: '3600 MHz',
    to: '/',
  },
];
const FILTER_CAPACITY_RAM = [
  {
    title: '1 x 4GB',
    to: '/',
  },
  {
    title: '2 x 4GB',
    to: '/',
  },
  {
    title: '1 x 8GB',
    to: '/',
  },
  {
    title: '2 x 8GB',
    to: '/',
  },
  {
    title: '1 x 16GB',
    to: '/',
  },
  {
    title: '2 x 16GB',
    to: '/',
  },
  {
    title: '1 x 32 GB',
    to: '/',
  },
  {
    title: '1 x 64GB',
    to: '/',
  },
];
const FILTER_GENERATION_RAM = [
  {
    title: 'DDR3',
    to: '/',
  },
  {
    title: 'DDR3L',
    to: '/',
  },
  {
    title: 'DDR4',
    to: '/',
  },
];
// disk
const FILTER_BRAND_DISK = [
  {
    title: 'SAMSUNG',
    to: '/',
  },
  {
    title: 'GIGABYTE',
    to: '/',
  },
  {
    title: 'WD',
    to: '/',
  },
  {
    title: 'ORICO',
    to: '/',
  },
  {
    title: 'KINGSTON',
    to: '/',
  },
  {
    title: 'LACIE',
    to: '/',
  },
  {
    title: 'SEAGATE',
    to: '/',
  },
  {
    title: 'CRUCIAL',
    to: '/',
  },
];
const FILTER_CAPACITY_DISK = [
  {
    title: '128 GB',
    to: '/',
  },
  {
    title: '256 GB',
    to: '/',
  },
  {
    title: '512 GB',
    to: '/',
  },
  {
    title: '1 TB',
    to: '/',
  },
  {
    title: '2 TB',
    to: '/',
  },
  {
    title: '4 TB',
    to: '/',
  },
  {
    title: '6 TB',
    to: '/',
  },
  {
    title: '120 GB',
    to: '/',
  },
  {
    title: '240 GB',
    to: '/',
  },
  {
    title: '500 GB',
    to: '/',
  },
];
const FILTER_CONNECT_STD_DISK = [
  {
    title: 'SATA 3',
    to: '/',
  },
  {
    title: 'USB 3.0',
    to: '/',
  },
  {
    title: 'M.2 NVme',
    to: '/',
  },
  {
    title: 'USB Type C',
    to: '/',
  },
  {
    title: 'M.2 SATA',
    to: '/',
  },
];
const FILTER_SIZE_DISK = [
  {
    title: '2.5"',
    to: '/',
  },
  {
    title: '3.5"',
    to: '/',
  },
  {
    title: 'M.2 2280',
    to: '/',
  },
  {
    title: 'M.2',
    to: '/',
  },
];
const FILTER_TYPE_DISK = [
  {
    title: 'SSD',
    to: '/',
  },
  {
    title: 'HDD',
    to: '/',
  },
];
// camera
const FILTER_BRAND_CAMERA = [
  {
    title: 'Canon',
    to: '/',
  },
  {
    title: 'Sony',
    to: '/',
  },
  {
    title: 'Fujifilm',
    to: '/',
  },
];
const FILTER_OTHER_CAMERA = [
  {
    title: 'GoPro',
    to: '/',
  },
  {
    title: 'Webcam Logitech',
    to: '/',
  },
  {
    title: 'Transcend',
    to: '/',
  },
];
// monitor
const FILTER_BRAND_MONITOR = [
  {
    title: 'SAMSUNG',
    to: '/',
  },
  {
    title: 'LG',
    to: '/',
  },
  {
    title: 'Dell',
    to: '/',
  },
  {
    title: 'ASUS',
    to: '/',
  },
  {
    title: 'Acer',
    to: '/',
  },
  {
    title: 'MSI',
    to: '/',
  },
];
const FILTER_GB_PLATE_MONITOR = [
  {
    title: 'IPS',
    to: '/',
  },
  {
    title: 'VA',
    to: '/',
  },
  {
    title: 'TN',
    to: '/',
  },
  {
    title: 'PLS',
    to: '/',
  },
  {
    title: 'MVA',
    to: '/',
  },
  {
    title: 'KHT',
    to: '/',
  },
];
const FILTER_RESOLUTON_MONITOR = [
  {
    title: '1920 x 1080',
    to: '/',
  },
  {
    title: '2560 x 1440',
    to: '/',
  },
  {
    title: '3840 x 2160',
    to: '/',
  },
  {
    title: '1366 x 768',
    to: '/',
  },
  {
    title: '1600 x 900',
    to: '/',
  },
  {
    title: '3440 x 1440',
    to: '/',
  },
  {
    title: '2560 x 1080',
    to: '/',
  },
];
const FILTER_SIZE_MONITOR = [
  {
    title: '27"',
    to: '/',
  },
  {
    title: '23.8"',
    to: '/',
  },
  {
    title: '24"',
    to: '/',
  },
  {
    title: '31.5"',
    to: '/',
  },
  {
    title: '23.6"',
    to: '/',
  },
  {
    title: '19.5"',
    to: '/',
  },
  {
    title: '18.5"',
    to: '/',
  },
];
const FILTER_FREQUENCY_MONITOR = [
  {
    title: '60 Hz',
    to: '/',
  },
  {
    title: '144 Hz',
    to: '/',
  },
  {
    title: '75 Hz',
    to: '/',
  },
  {
    title: '165 Hz',
    to: '/',
  },
  {
    title: '240 Hz',
    to: '/',
  },
  {
    title: '100 Hz',
    to: '/',
  },
  {
    title: '200 Hz',
    to: '/',
  },
];
// display
const FILTER_BRAND_DISPLAY = [
  {
    title: 'ASUS',
    to: '/',
  },
  {
    title: 'GIGABYTE',
    to: '/',
  },
  {
    title: 'MSI',
    to: '/',
  },
  {
    title: 'GALAX',
    to: '/',
  },
  {
    title: 'Colorful',
    to: '/',
  },
  {
    title: 'NVIDIA',
    to: '/',
  },
];
const FILTER_CAPACITY_DISPLAY = [
  {
    title: '2 GB',
    to: '/',
  },
  {
    title: '3 GB',
    to: '/',
  },
  {
    title: '4 GB',
    to: '/',
  },
  {
    title: '5 GB',
    to: '/',
  },
  {
    title: '6 GB',
    to: '/',
  },
  {
    title: '8 GB',
    to: '/',
  },
  {
    title: '11 GB',
    to: '/',
  },
];
const FILTER_MANUFACTURER_DISPLAY = [
  {
    title: 'NVIDIA',
    to: '/',
  },
  {
    title: 'AMD',
    to: '/',
  },
];
// mobile
const FILTER_BRAND_MOBILE = [
  {
    title: 'Iphone',
    to: '/',
  },
  {
    title: 'Samsung',
    to: '/',
  },
  {
    title: 'OPPO',
    to: '/',
  },
  {
    title: 'Realme',
    to: '/',
  },
  {
    title: 'Xiaomi',
    to: '/',
  },
  {
    title: 'Nokia',
    to: '/',
  },
  {
    title: 'Huawei',
    to: '/',
  },
  {
    title: 'Vivo',
    to: '/',
  },
];
const FILTER_PRICE_MOBILE = [
  {
    title: 'Dưới 5 triệu',
    to: '/',
  },
  {
    title: '5-10 triệu',
    to: '/',
  },
  {
    title: '10-15 triệu',
    to: '/',
  },
  {
    title: '15-20 triệu',
    to: '/',
  },
  {
    title: 'Trên 20 triệu',
    to: '/',
  },
];
const FILTER_ROM_MOBILE = [
  {
    title: '16 GB',
    to: '/',
  },
  {
    title: '32 GB',
    to: '/',
  },
  {
    title: '64 GB',
    to: '/',
  },
  {
    title: '128 GB',
    to: '/',
  },
  {
    title: '256 GB',
    to: '/',
  },
  {
    title: '512 GB',
    to: '/',
  },
];
const FILTER_RAM_MOBILE = [
  {
    title: '1 GB',
    to: '/',
  },
  {
    title: '2 GB',
    to: '/',
  },
  {
    title: '3 GB',
    to: '/',
  },
  {
    title: '4 GB',
    to: '/',
  },
  {
    title: '6 GB',
    to: '/',
  },
  {
    title: '8 GB',
    to: '/',
  },
  {
    title: '12 GB',
    to: '/',
  },
];
const FILTER_ACCESSORY_MOBILE = [
  {
    title: 'Ốp lưng',
    to: '/',
  },
];
// mouse
const FILTER_BRAND_MOUSE = [
  {
    title: 'NEWMEN',
    to: '/',
  },
  {
    title: 'LOGITECH',
    to: '/',
  },
  {
    title: 'CORSAIR',
    to: '/',
  },
  {
    title: 'RAZER',
    to: '/',
  },
  {
    title: 'E-Dra',
    to: '/',
  },
  {
    title: 'ASUS',
    to: '/',
  },
  {
    title: 'Khác',
    to: '/',
  },
];
const FILTER_TYPE_MOUSE = [
  {
    title: 'Có dây',
    to: '/',
  },
  {
    title: 'Không dây',
    to: '/',
  },
  {
    title: 'Led RGB',
    to: '/',
  },
  {
    title: 'Không Led',
    to: '/',
  },
];
// keyboard
const FILTER_BRAND_KEYBOARD = [
  {
    title: 'LOGITECH',
    to: '/',
  },
  {
    title: 'CORSAIR',
    to: '/',
  },
  {
    title: 'RAZER',
    to: '/',
  },
  {
    title: 'E-Dra',
    to: '/',
  },
  {
    title: 'ASUS',
    to: '/',
  },
  {
    title: 'KINGSTON',
    to: '/',
  },
  {
    title: 'AKKO',
    to: '/',
  },
];
const FILTER_TYPE_KEYBOARD = [
  {
    title: 'Bàn phím thường',
    to: '/',
  },
  {
    title: 'Bàn phím cơ',
    to: '/',
  },
  {
    title: 'Bàn phím giả cơ',
    to: '/',
  },
];
const FILTER_COLOR_KEYBOARD = [
  {
    title: 'Đen',
    to: '/',
  },
  {
    title: 'Bạc',
    to: '/',
  },
  {
    title: 'Trắng',
    to: '/',
  },
  {
    title: 'Hồng',
    to: '/',
  },
  {
    title: 'Khác',
    to: '/',
  },
];
const FILTER_LED_KEYBOARD = [
  {
    title: 'Không led',
    to: '/',
  },
  {
    title: 'Đơn sắc',
    to: '/',
  },
  {
    title: 'Rainbow',
    to: '/',
  },
  {
    title: 'RGB',
    to: '/',
  },
];
//headphone
const FILTER_TYPE_HEADPHONE = [
  {
    title: 'Over-ear',
    to: '/',
  },
  {
    title: 'In-ear',
    to: '/',
  },
  {
    title: 'On-ear',
    to: '/',
  },
];
const FILTER_CONNECT_STD_HEADPHONE = [
  {
    title: '3.5mm',
    to: '/',
  },
  {
    title: 'Bluetooth',
    to: '/',
  },
  {
    title: 'USB 3.0',
    to: '/',
  },
  {
    title: 'Bluetooth 4.0',
    to: '/',
  },
  {
    title: 'Bluetooth 5.0',
    to: '/',
  },
  {
    title: '2.4 GHz Wireless',
    to: '/',
  },
];
// router
const FILTER_BRAND_ROUTER = [
  {
    title: 'TPLINK',
    to: '/',
  },
  {
    title: 'D-LINK',
    to: '/',
  },
  {
    title: 'TENDA',
    to: '/',
  },
  {
    title: 'ASUS',
    to: '/',
  },
  {
    title: 'TOTO LINK',
    to: '/',
  },
  {
    title: 'LINKSYS',
    to: '/',
  },
  {
    title: 'CISCO',
    to: '/',
  },
];
const FILTER_BANDWIDTH_ROUTER = [
  {
    title: '2.4 GHz',
    to: '/',
  },
  {
    title: '2.4 GHz / 5 GHz',
    to: '/',
  },
];
const FILTER_STRONG_ROUTER = [
  {
    title: '2 dBi',
    to: '/',
  },
  {
    title: '2.5 dBi',
    to: '/',
  },
  {
    title: '3 dBi',
    to: '/',
  },
  {
    title: '4 dBi',
    to: '/',
  },
  {
    title: '4.5 dBi',
    to: '/',
  },
  {
    title: '5 dBi',
    to: '/',
  },
  {
    title: '6 dBi',
    to: '/',
  },
  {
    title: '7 dBi',
    to: '/',
  },
  {
    title: '9 dBi',
    to: '/',
  },
  {
    title: '11 dBi',
    to: '/',
  },
];
//speaker
const FILTER_BRAND_SPEAKER = [
  {
    title: 'Sony',
    to: '/',
  },
  {
    title: 'SOUNDMAX',
    to: '/',
  },
  {
    title: 'LOGITECH',
    to: '/',
  },
  {
    title: 'Bose',
    to: '/',
  },
  {
    title: 'JBL',
    to: '/',
  },
  {
    title: 'MICROLAB',
    to: '/',
  },
  {
    title: 'Apple',
    to: '/',
  },
  {
    title: 'XIAOMI',
    to: '/',
  },
  {
    title: 'Remax',
    to: '/',
  },
  {
    title: 'Khác',
    to: '/',
  },
];
const FILTER_WATTAGE_SPEAKER = [
  {
    title: '3W',
    to: '/',
  },
  {
    title: '4W-10W',
    to: '/',
  },
  {
    title: '10W-20W',
    to: '/',
  },
  {
    title: '20W-30W',
    to: '/',
  },
  {
    title: '30W-50W',
    to: '/',
  },
  {
    title: '50W-100W',
    to: '/',
  },
  {
    title: '200W',
    to: '/',
  },
  {
    title: '300W',
    to: '/',
  },
  {
    title: '600W',
    to: '/',
  },
];
const FILTER_CONNECT_STD_SPEAKER = [
  {
    title: '3.5mm',
    to: '/',
  },
  {
    title: 'Bluetooth',
    to: '/',
  },
  {
    title: 'USB 3.0',
    to: '/',
  },
  {
    title: 'Bluetooth 4.0',
    to: '/',
  },
  {
    title: 'Bluetooth 5.0',
    to: '/',
  },
  {
    title: 'Micro USB',
    to: '/',
  },
];
// mainboard
const FILTER_BRAND_MAINBOARD = [
  {
    title: 'ASUS',
    to: '/',
  },
  {
    title: 'GIGABYTE',
    to: '/',
  },
  {
    title: 'MSI',
    to: '/',
  },
  {
    title: 'ASROCK',
    to: '/',
  },
  {
    title: 'INTEL',
    to: '/',
  },
];
const FILTER_CHIPSET_MAINBOARD = [
  {
    title: 'Z490',
    to: '/',
  },
  {
    title: 'B450',
    to: '/',
  },
  {
    title: 'B365',
    to: '/',
  },
  {
    title: 'B360',
    to: '/',
  },
  {
    title: 'Z390',
    to: '/',
  },
  {
    title: 'H310',
    to: '/',
  },
  {
    title: 'A320',
    to: '/',
  },
  {
    title: 'B460',
    to: '/',
  },
  {
    title: 'Z370',
    to: '/',
  },
  {
    title: 'X570',
    to: '/',
  },
  {
    title: 'B350',
    to: '/',
  },
];
const FILTER_SIZE_STD_MAINBOARD = [
  {
    title: 'Micro-ATX',
    to: '/',
  },
  {
    title: 'ATX',
    to: '/',
  },
  {
    title: 'Extended-ATX',
    to: '/',
  },
  {
    title: 'Mini-ATX',
    to: '/',
  },
  {
    title: 'XL-ATX',
    to: '/',
  },
];
const FILTER_SOCKET_MAINBOARD = [
  {
    title: '1151-v2',
    to: '/',
  },
  {
    title: '1200',
    to: '/',
  },
  {
    title: 'AM4',
    to: '/',
  },
  {
    title: '1151',
    to: '/',
  },
  {
    title: 'sTRX',
    to: '/',
  },
];
const FILTER_SERIES_MAINBOARD = [
  {
    title: 'ROG',
    to: '/',
  },
  {
    title: 'AORUS',
    to: '/',
  },
  {
    title: 'Gaming',
    to: '/',
  },
  {
    title: 'PRO',
    to: '/',
  },
  {
    title: 'KHT',
    to: '/',
  },
  {
    title: 'Prime',
    to: '/',
  },
];

// filter options list
const FILTER_OPTION_LIST = [
  // 0: LAPTOP
  {
    key: 0,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_LAPTOP,
      },
      {
        title: 'Kích thước',
        subFilters: FILTER_SIZE_LAPTOP,
      },
      {
        title: 'Laptop theo giá',
        subFilters: FILTER_PRICE_LAPTOP,
      },
      {
        title: 'Cấu hình chip',
        subFilters: FILTER_CHIP_LAPTOP,
      },
      {
        title: 'Linh kiện laptop',
        subFilters: FILTER_ACCESSORY_LAPTOP,
      },
    ],
  },
  // 1: DISK
  {
    key: 1,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_DISK,
      },
      {
        title: 'Ổ cứng theo loại',
        subFilters: FILTER_TYPE_DISK,
      },
      {
        title: 'Dung lượng',
        subFilters: FILTER_CAPACITY_DISK,
      },
      {
        title: 'Chuẩn kêt nối',
        subFilters: FILTER_CONNECT_STD_DISK,
      },
      {
        title: 'Kích thước',
        subFilters: FILTER_SIZE_DISK,
      },
    ],
  },
  // 2: RAM
  {
    key: 2,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_RAM,
      },
      {
        title: 'RAM theo bus',
        subFilters: FILTER_BUS_RAM,
      },
      {
        title: 'Dung lượng',
        subFilters: FILTER_CAPACITY_RAM,
      },
      {
        title: 'Thế hệ RAM',
        subFilters: FILTER_GENERATION_RAM,
      },
    ],
  },
  // 3: MONITOR
  {
    key: 3,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_MONITOR,
      },
      {
        title: 'Tấm nền',
        subFilters: FILTER_GB_PLATE_MONITOR,
      },
      {
        title: 'Độ phân giải',
        subFilters: FILTER_RESOLUTON_MONITOR,
      },
      {
        title: 'Kích thước',
        subFilters: FILTER_SIZE_MONITOR,
      },
      {
        title: 'Tần số quét',
        subFilters: FILTER_FREQUENCY_MONITOR,
      },
    ],
  },
  // 4: DISPLAY
  {
    key: 4,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_DISPLAY,
      },
      {
        title: 'Dung lượng',
        subFilters: FILTER_CAPACITY_DISPLAY,
      },
      {
        title: 'Nhà sản xuất',
        subFilters: FILTER_MANUFACTURER_DISPLAY,
      },
    ],
  },
  // 5: MOBILE
  {
    key: 5,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_MOBILE,
      },
      {
        title: 'Theo giá',
        subFilters: FILTER_PRICE_MOBILE,
      },
      {
        title: 'Bộ nhớ trong',
        subFilters: FILTER_ROM_MOBILE,
      },
      {
        title: 'Dung lượng RAM',
        subFilters: FILTER_RAM_MOBILE,
      },
      {
        title: 'Phụ kiện điện thoại',
        subFilters: FILTER_ACCESSORY_MOBILE,
      },
    ],
  },
  // 6: MOUSE - KEYBOARD
  {
    key: 6,
    data: [
      {
        title: 'Chuột theo thương hiệu',
        subFilters: FILTER_BRAND_MOUSE,
      },
      {
        title: 'Chuột theo loại',
        subFilters: FILTER_TYPE_MOUSE,
      },
      {
        title: 'Bàn phím theo thương hiệu',
        subFilters: FILTER_BRAND_KEYBOARD,
      },
      {
        title: 'Loại bàn phím',
        subFilters: FILTER_TYPE_KEYBOARD,
      },
      {
        title: 'Màu bàn phím',
        subFilters: FILTER_COLOR_KEYBOARD,
      },
      {
        title: 'Led bàn phím',
        subFilters: FILTER_LED_KEYBOARD,
      },
    ],
  },
  // 7: HEADPHONE
  {
    key: 7,
    data: [
      {
        title: 'Loại tai nghe',
        subFilters: FILTER_TYPE_HEADPHONE,
      },
      {
        title: 'Chuẩn kết nối',
        subFilters: FILTER_CONNECT_STD_HEADPHONE,
      },
    ],
  },
  // 8: ROUTER
  {
    key: 8,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_ROUTER,
      },
      {
        title: 'Băngt thông',
        subFilters: FILTER_BANDWIDTH_ROUTER,
      },
      {
        title: 'Độ mạnh ăng-ten',
        subFilters: FILTER_STRONG_ROUTER,
      },
    ],
  },
  // 9: SPEAKER
  {
    key: 9,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_SPEAKER,
      },
      {
        title: 'Công suất tổng',
        subFilters: FILTER_WATTAGE_SPEAKER,
      },
      {
        title: 'Chuẩn kết nối',
        subFilters: FILTER_CONNECT_STD_SPEAKER,
      },
    ],
  },
  // 10: CAMERA
  {
    key: 10,
    data: [
      {
        title: 'Camera theo thương hiệu',
        subFilters: FILTER_BRAND_CAMERA,
      },
      {
        title: 'Camera hành trình',
        subFilters: FILTER_OTHER_CAMERA,
      },
    ],
  },
  // 11: MAINBOARD
  {
    key: 11,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_MAINBOARD,
      },
      {
        title: 'Chipset',
        subFilters: FILTER_CHIPSET_MAINBOARD,
      },
      {
        title: 'Chuẩn kích thước',
        subFilters: FILTER_SIZE_STD_MAINBOARD,
      },
      {
        title: 'Socket',
        subFilters: FILTER_SOCKET_MAINBOARD,
      },
      {
        title: 'Series mainboard',
        subFilters: FILTER_SERIES_MAINBOARD,
      },
    ],
  },
];

export default {
  REFRESH_TOKEN_KEY: 'refresh_token',
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
  // Avatar mặc định của user
  DEFAULT_USER_AVT:
    'https://res.cloudinary.com/tuan-cloudinary/image/upload/c_scale,q_60,w_80/v1607750466/defaults/default-avatar_amkff5.jpg',
  // Số comment sản phẩm trên trang
  COMMENT_PER_PAGE: 5,
  // độ dài tối đa của cmt
  MAX_LEN_COMMENT: 1000,
  // key danh sách giỏ hàng
  CARTS: 'carts',
  FILTER_BRAND_LAPTOP,
  FILTER_SIZE_LAPTOP,
  FILTER_PRICE_LAPTOP,
  FILTER_CHIP_LAPTOP,
  FILTER_ACCESSORY_LAPTOP,
  FILTER_BRAND_RAM,
  FILTER_BUS_RAM,
  FILTER_CAPACITY_RAM,
  FILTER_GENERATION_RAM,
  FILTER_BRAND_DISK,
  FILTER_CAPACITY_DISK,
  FILTER_CONNECT_STD_DISK,
  FILTER_SIZE_DISK,
  FILTER_TYPE_DISK,
  FILTER_BRAND_CAMERA,
  FILTER_OTHER_CAMERA,
  FILTER_SIZE_MONITOR,
  FILTER_BRAND_MONITOR,
  FILTER_GB_PLATE_MONITOR,
  FILTER_FREQUENCY_MONITOR,
  FILTER_RESOLUTON_MONITOR,
  FILTER_BRAND_DISPLAY,
  FILTER_CAPACITY_DISPLAY,
  FILTER_MANUFACTURER_DISPLAY,
  FILTER_BRAND_MOBILE,
  FILTER_PRICE_MOBILE,
  FILTER_ROM_MOBILE,
  FILTER_RAM_MOBILE,
  FILTER_ACCESSORY_MOBILE,
  FILTER_TYPE_MOUSE,
  FILTER_BRAND_MOUSE,
  FILTER_BRAND_KEYBOARD,
  FILTER_COLOR_KEYBOARD,
  FILTER_TYPE_KEYBOARD,
  FILTER_LED_KEYBOARD,
  FILTER_TYPE_HEADPHONE,
  FILTER_CONNECT_STD_HEADPHONE,
  FILTER_BRAND_ROUTER,
  FILTER_BANDWIDTH_ROUTER,
  FILTER_STRONG_ROUTER,
  FILTER_BRAND_SPEAKER,
  FILTER_WATTAGE_SPEAKER,
  FILTER_CONNECT_STD_SPEAKER,
  FILTER_BRAND_MAINBOARD,
  FILTER_SERIES_MAINBOARD,
  FILTER_SOCKET_MAINBOARD,
  FILTER_CHIPSET_MAINBOARD,
  FILTER_SIZE_STD_MAINBOARD,
  FILTER_OPTION_LIST,
};
