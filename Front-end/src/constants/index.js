// gender options
const GENDER_OPTIONS = [
  { value: true, label: 'Nam' },
  { value: false, label: 'Nữ' },
];

// hình thức giao hàng
const TRANSPORT_METHOD_OPTIONS = [
  { value: 0, label: 'Giao hàng tiêu chuẩn', price: 40000 },
  { value: 1, label: 'Giao hàng tiết kiệm', price: 20000 },
  { value: 2, label: 'Giao hàng nhanh', price: 100000 },
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
  SEARCH: '/search',
  FILTER: '/filter',
  ACCOUNT: '/account',
  PAYMENT: '/payment',
};

// FILTERS
// laptop
const FILTER_BRAND_LAPTOP = [
  {
    title: 'Apple',
    to: 'apple',
  },
  {
    title: 'Acer',
    to: 'acer',
  },
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'Dell',
    to: 'dell',
  },
  {
    title: 'HP',
    to: 'hp',
  },
  {
    title: 'Lenovo',
    to: 'lenovo',
  },
  {
    title: 'LG',
    to: 'lg',
  },
  {
    title: 'MSI',
    to: 'msi',
  },
];
const FILTER_SIZE_LAPTOP = [
  {
    title: 'Dưới 13 inch',
    to: `duoi_13_inch`,
  },
  {
    title: 'Từ 13 đến 15 inch',
    to: `tu_13_den_15_inch`,
  },
  {
    title: 'Trên 15 inch',
    to: `tren_15_inch`,
  },
];
const FILTER_PRICE_LAPTOP = [
  {
    title: 'Dưới 10 triệu',
    to: `nhohon-10tr`,
  },
  {
    title: 'Từ 10 - 15 triệu',
    to: `lonhon-10tr,nhohon-15tr`,
  },
  {
    title: 'Từ 15 - 20 triệu',
    to: `lonhon-15tr,nhohon-20tr`,
  },
  {
    title: 'Từ 20 - 30 triệu',
    to: `lonhon-20tr,nhohon-30tr`,
  },
  {
    title: 'Từ 30 - 50 triệu',
    to: `lonhon-30tr,nhohon-50tr`,
  },
  {
    title: 'Trên 50 triệu',
    to: `lonhon-50tr`,
  },
];
const FILTER_CHIP_LAPTOP = [
  {
    title: 'Intel Core i3',
    to: '0',
  },
  {
    title: 'Intel Core i5',
    to: '1',
  },
  {
    title: 'Intel Core i7',
    to: '2',
  },
  {
    title: 'Intel Core i9',
    to: '3',
  },
  {
    title: 'AMD Ryzen 3',
    to: '4',
  },
  {
    title: 'AMD Ryzen 5',
    to: '5',
  },
  {
    title: 'AMD Ryzen 7',
    to: '6',
  },
  {
    title: 'Pentium',
    to: '7',
  },
  {
    title: 'Celeron',
    to: '8',
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
    to: 'g.skill',
  },
  {
    title: 'KINGSTON',
    to: 'kingston',
  },
  {
    title: 'KINGMAX',
    to: 'kingmax',
  },
  {
    title: 'CORSAIR',
    to: 'corsair',
  },
  {
    title: 'GEIL',
    to: 'geil',
  },
  {
    title: 'GIGABYTE',
    to: 'gigabyte',
  },
];
const FILTER_BUS_RAM = [
  {
    title: '1600 MHz',
    to: '1600MHz',
  },
  {
    title: '2400 MHz',
    to: '2400MHz',
  },
  {
    title: '2666 MHz',
    to: '2666MHz',
  },
  {
    title: '2800 MHz',
    to: '2800MHz',
  },
  {
    title: '3000 MHz',
    to: '3000MHz',
  },
  {
    title: '3200 MHz',
    to: '3200MHz',
  },
  {
    title: '3600 MHz',
    to: '3600MHz',
  },
];
const FILTER_CAPACITY_RAM = [
  {
    title: '1 x 4GB',
    to: '1x4gb',
  },
  {
    title: '2 x 4GB',
    to: '2x4gb',
  },
  {
    title: '1 x 8GB',
    to: '1x8gb',
  },
  {
    title: '2 x 8GB',
    to: '2x8gb',
  },
  {
    title: '1 x 16GB',
    to: '1x16gb',
  },
  {
    title: '2 x 16GB',
    to: '2x16gb',
  },
  {
    title: '1 x 32 GB',
    to: '1x32gb',
  },
  {
    title: '1 x 64GB',
    to: '2x64gb',
  },
];
const FILTER_GENERATION_RAM = [
  {
    title: 'DDR3',
    to: 'ddr3',
  },
  {
    title: 'DDR3L',
    to: 'DDR3L',
  },
  {
    title: 'DDR4',
    to: 'DDR4',
  },
];
// disk
const FILTER_BRAND_DISK = [
  {
    title: 'SAMSUNG',
    to: 'samsung',
  },
  {
    title: 'GIGABYTE',
    to: 'gigabyte',
  },
  {
    title: 'WD',
    to: 'wd',
  },
  {
    title: 'ORICO',
    to: 'orico',
  },
  {
    title: 'KINGSTON',
    to: 'kington',
  },
  {
    title: 'LACIE',
    to: 'lacie',
  },
  {
    title: 'SEAGATE',
    to: 'seagate',
  },
  {
    title: 'CRUCIAL',
    to: 'crucial',
  },
];
const FILTER_CAPACITY_DISK = [
  {
    title: '128 GB',
    to: '128GB',
  },
  {
    title: '256 GB',
    to: '256GB',
  },
  {
    title: '512 GB',
    to: '512GB',
  },
  {
    title: '1 TB',
    to: '1000GB',
  },
  {
    title: '2 TB',
    to: '2000GB',
  },
  {
    title: '4 TB',
    to: '4000GB',
  },
  {
    title: '6 TB',
    to: '6000GB',
  },
  {
    title: '120 GB',
    to: '120GB',
  },
  {
    title: '240 GB',
    to: '240GB',
  },
  {
    title: '500 GB',
    to: '500GB',
  },
];
const FILTER_CONNECT_STD_DISK = [
  {
    title: 'SATA 3',
    to: '0',
  },
  {
    title: 'USB 3.0',
    to: '1',
  },
  {
    title: 'M.2 SATA',
    to: '2',
  },
  {
    title: 'M.2 NVme',
    to: '3',
  },
];
const FILTER_SIZE_DISK = [
  {
    title: '2.5"',
    to: `2.5"`,
  },
  {
    title: '3.5"',
    to: `3.5"`,
  },
  {
    title: 'M.2 2280',
    to: `M.2 2280`,
  },
  {
    title: 'M.2',
    to: `m.2`,
  },
];
const FILTER_TYPE_DISK = [
  {
    title: 'SSD',
    to: 'SSD',
  },
  {
    title: 'HDD',
    to: 'HDD',
  },
];
// camera
const FILTER_BRAND_CAMERA = [
  {
    title: 'Canon',
    to: 'canon',
  },
  {
    title: 'Sony',
    to: 'sony',
  },
  {
    title: 'Fujifilm',
    to: 'fujifilm',
  },
];
const FILTER_OTHER_CAMERA = [
  {
    title: 'GoPro',
    to: 'gopro',
  },
  {
    title: 'Webcam Logitech',
    to: `webcam logitech`,
  },
  {
    title: 'Transcend',
    to: 'transcend',
  },
];
// monitor
const FILTER_BRAND_MONITOR = [
  {
    title: 'SAMSUNG',
    to: 'samsung',
  },
  {
    title: 'LG',
    to: 'lg',
  },
  {
    title: 'Dell',
    to: 'dell',
  },
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'Acer',
    to: 'acer',
  },
  {
    title: 'MSI',
    to: 'msi',
  },
];
const FILTER_GB_PLATE_MONITOR = [
  {
    title: 'IPS',
    to: 'IPS',
  },
  {
    title: 'VA',
    to: 'va',
  },
  {
    title: 'TN',
    to: 'TN',
  },
  {
    title: 'PLS',
    to: 'PLS',
  },
  {
    title: 'MVA',
    to: 'MVA',
  },
  {
    title: 'KHT',
    to: 'KHT',
  },
];
const FILTER_RESOLUTON_MONITOR = [
  {
    title: '1920 x 1080',
    to: '1920x1080',
  },
  {
    title: '2560 x 1440',
    to: '2560x1440',
  },
  {
    title: '3840 x 2160',
    to: '3840x2160',
  },
  {
    title: '1366 x 768',
    to: '1366x768',
  },
  {
    title: '1600 x 900',
    to: '1600x900',
  },
  {
    title: '3440 x 1440',
    to: '3440x1440',
  },
  {
    title: '2560 x 1080',
    to: '2560x1080',
  },
];
const FILTER_SIZE_MONITOR = [
  {
    title: '27"',
    to: `27"`,
  },
  {
    title: '23.8"',
    to: `23.8"`,
  },
  {
    title: '24"',
    to: `24"`,
  },
  {
    title: '31.5"',
    to: `31.5"`,
  },
  {
    title: '23.6"',
    to: `23.6"`,
  },
  {
    title: '19.5"',
    to: `19.5"`,
  },
  {
    title: '18.5"',
    to: `18.5"`,
  },
];
const FILTER_FREQUENCY_MONITOR = [
  {
    title: '60 Hz',
    to: '60Hz',
  },
  {
    title: '144 Hz',
    to: '144Hz',
  },
  {
    title: '75 Hz',
    to: '75Hz',
  },
  {
    title: '165 Hz',
    to: '165Hz',
  },
  {
    title: '240 Hz',
    to: '240Hz',
  },
  {
    title: '100 Hz',
    to: '100Hz',
  },
  {
    title: '200 Hz',
    to: '200Hz',
  },
];
// display
const FILTER_BRAND_DISPLAY = [
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'GIGABYTE',
    to: 'gigabyte',
  },
  {
    title: 'MSI',
    to: 'msi',
  },
  {
    title: 'GALAX',
    to: 'galax',
  },
  {
    title: 'Colorful',
    to: 'colorful',
  },
  {
    title: 'NVIDIA',
    to: 'nvidia',
  },
];
const FILTER_CAPACITY_DISPLAY = [
  {
    title: '2 GB',
    to: '2GB',
  },
  {
    title: '3 GB',
    to: '3GB',
  },
  {
    title: '4 GB',
    to: '4GB',
  },
  {
    title: '5 GB',
    to: '5GB',
  },
  {
    title: '6 GB',
    to: '6GB',
  },
  {
    title: '8 GB',
    to: '8GB',
  },
  {
    title: '11 GB',
    to: '11GB',
  },
];
const FILTER_MANUFACTURER_DISPLAY = [
  {
    title: 'NVIDIA',
    to: 'NVIDIA',
  },
  {
    title: 'AMD',
    to: 'AMD',
  },
];
// mobile
const FILTER_BRAND_MOBILE = [
  {
    title: 'iPhone',
    to: 'apple',
  },
  {
    title: 'Samsung',
    to: 'samsung',
  },
  {
    title: 'OPPO',
    to: 'oppo',
  },
  {
    title: 'Realme',
    to: 'realme',
  },
  {
    title: 'Xiaomi',
    to: 'xiaomi',
  },
  {
    title: 'Nokia',
    to: 'nokia',
  },
  {
    title: 'Huawei',
    to: 'huawei',
  },
  {
    title: 'Vivo',
    to: 'vivo',
  },
];
const FILTER_PRICE_MOBILE = [
  {
    title: 'Dưới 5 triệu',
    to: 'nhohon-5tr',
  },
  {
    title: '5-10 triệu',
    to: 'lonhon-5tr,nhohon-10tr',
  },
  {
    title: '10-15 triệu',
    to: 'lonhon-10tr,nhohon-15tr',
  },
  {
    title: '15-20 triệu',
    to: 'lonhon-15tr,nhohon-20tr',
  },
  {
    title: 'Trên 20 triệu',
    to: 'lonhon-20tr',
  },
];
const FILTER_ROM_MOBILE = [
  {
    title: '16 GB',
    to: '16GB',
  },
  {
    title: '32 GB',
    to: '32GB',
  },
  {
    title: '64 GB',
    to: '64GB',
  },
  {
    title: '128 GB',
    to: '128GB',
  },
  {
    title: '256 GB',
    to: '256GB',
  },
  {
    title: '512 GB',
    to: '512GB',
  },
];
const FILTER_RAM_MOBILE = [
  {
    title: '1 GB',
    to: '1GB',
  },
  {
    title: '2 GB',
    to: '2GB',
  },
  {
    title: '3 GB',
    to: '3GB',
  },
  {
    title: '4 GB',
    to: '4GB',
  },
  {
    title: '6 GB',
    to: '6GB',
  },
  {
    title: '8 GB',
    to: '8GB',
  },
  {
    title: '12 GB',
    to: '12GB',
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
    to: 'newmen',
  },
  {
    title: 'LOGITECH',
    to: 'logitech',
  },
  {
    title: 'CORSAIR',
    to: 'corsair',
  },
  {
    title: 'RAZER',
    to: 'rezer',
  },
  {
    title: 'E-Dra',
    to: 'e-dra',
  },
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'Khác',
    to: '',
  },
];
const FILTER_TYPE_MOUSE = [
  {
    title: 'Có dây',
    to: 'co_day',
  },
  {
    title: 'Không dây',
    to: 'khong_day',
  },
];
const FILTER_LED_MOUSE = [
  {
    title: 'Led RGB',
    to: 'rgb',
  },
  {
    title: 'Không Led',
    to: 'khong_Led',
  },
];
// keyboard
const FILTER_BRAND_KEYBOARD = [
  {
    title: 'LOGITECH',
    to: 'logitech',
  },
  {
    title: 'CORSAIR',
    to: 'corsair',
  },
  {
    title: 'RAZER',
    to: 'razer',
  },
  {
    title: 'E-Dra',
    to: 'e-dra',
  },
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'KINGSTON',
    to: 'kingston',
  },
  {
    title: 'AKKO',
    to: 'akko',
  },
];
const FILTER_TYPE_KEYBOARD = [
  {
    title: 'Bàn phím thường',
    to: 'ban_phim_thuong',
  },
  {
    title: 'Bàn phím cơ',
    to: 'ban_phim_co',
  },
  {
    title: 'Bàn phím giả cơ',
    to: 'ban_phim_gc',
  },
];
const FILTER_COLOR_KEYBOARD = [
  {
    title: 'Đen',
    to: '0',
  },
  {
    title: 'Bạc',
    to: '1',
  },
  {
    title: 'Trắng',
    to: '2',
  },
  {
    title: 'Hồng',
    to: '3',
  },
  {
    title: 'Khác',
    to: '4',
  },
];
const FILTER_LED_KEYBOARD = [
  {
    title: 'Không led',
    to: '0',
  },
  {
    title: 'Đơn sắc',
    to: '1',
  },
  {
    title: 'Rainbow',
    to: '2',
  },
  {
    title: 'RGB',
    to: '3',
  },
];
//headphone
const FILTER_TYPE_HEADPHONE = [
  {
    title: 'Over-ear',
    to: 'over_ear',
  },
  {
    title: 'In-ear',
    to: 'in_ear',
  },
  {
    title: 'On-ear',
    to: 'on_ear',
  },
];
const FILTER_CONNECT_STD_HEADPHONE = [
  {
    title: '3.5mm',
    to: '0',
  },
  {
    title: 'Bluetooth',
    to: '1',
  },
  {
    title: 'USB 3.0',
    to: '2',
  },
  {
    title: 'Bluetooth 4.0',
    to: '3',
  },
  {
    title: 'Bluetooth 5.0',
    to: '/',
  },
  {
    title: '2.4 GHz Wireless',
    to: '4',
  },
];
// router
const FILTER_BRAND_ROUTER = [
  {
    title: 'TPLINK',
    to: 'tplink',
  },
  {
    title: 'D-LINK',
    to: 'd-link',
  },
  {
    title: 'TENDA',
    to: 'tenda',
  },
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'TOTO LINK',
    to: `toto link`,
  },
  {
    title: 'LINKSYS',
    to: 'linksys',
  },
  {
    title: 'CISCO',
    to: 'cisco',
  },
];
const FILTER_BANDWIDTH_ROUTER = [
  {
    title: '2.4 GHz',
    to: '0',
  },
  {
    title: '2.4 GHz / 5 GHz',
    to: '1',
  },
];
const FILTER_STRONG_ROUTER = [
  {
    title: '2 dBi',
    to: '2dBi',
  },
  {
    title: '2.5 dBi',
    to: '2.5dBi',
  },
  {
    title: '3 dBi',
    to: '3dBi',
  },
  {
    title: '4 dBi',
    to: '4dBi',
  },
  {
    title: '4.5 dBi',
    to: '4.5dBi',
  },
  {
    title: '5 dBi',
    to: '5dBi',
  },
  {
    title: '6 dBi',
    to: '6dBi',
  },
  {
    title: '7 dBi',
    to: '7dBi',
  },
  {
    title: '9 dBi',
    to: '9dBi',
  },
  {
    title: '11 dBi',
    to: '11dBi',
  },
];
//speaker
const FILTER_BRAND_SPEAKER = [
  {
    title: 'Sony',
    to: 'sony',
  },
  {
    title: 'SOUNDMAX',
    to: 'soundmax',
  },
  {
    title: 'LOGITECH',
    to: 'logitech',
  },
  {
    title: 'Bose',
    to: 'bose',
  },
  {
    title: 'JBL',
    to: 'jbl',
  },
  {
    title: 'MICROLAB',
    to: 'microlab',
  },
  {
    title: 'Apple',
    to: 'apple',
  },
  {
    title: 'XIAOMI',
    to: 'xiaomi',
  },
  {
    title: 'Remax',
    to: 'remax',
  },
  {
    title: 'Khác',
    to: '',
  },
];
const FILTER_WATTAGE_SPEAKER = [
  {
    title: '3W',
    to: 'nhohon-3W',
  },
  {
    title: '4W-10W',
    to: 'lonhon-4W,nhohon-10W',
  },
  {
    title: '10W-20W',
    to: 'lonhon-10W,nhohon-20W',
  },
  {
    title: '20W-30W',
    to: 'lonhon-20W,nhohon-30W',
  },
  {
    title: '30W-50W',
    to: 'lonhon-40W,nhohon-50W',
  },
  {
    title: '50W-100W',
    to: 'lonhon-50W,nhohon-100W',
  },
  {
    title: '200W',
    to: 'lonhon-200W,nhohon-300W',
  },
  {
    title: '300W',
    to: 'lonhon-300W,nhohon-600W',
  },
  {
    title: '600W',
    to: 'lonhon-600W',
  },
];
const FILTER_CONNECT_STD_SPEAKER = [
  {
    title: '3.5mm',
    to: '3.5mm',
  },
  {
    title: 'Bluetooth',
    to: 'bluetooth',
  },
  {
    title: 'USB 3.0',
    to: `usb 3.0`,
  },
  {
    title: 'Bluetooth 4.0',
    to: `bluetooth 4.0`,
  },
  {
    title: 'Bluetooth 5.0',
    to: `bluetooth 5.0`,
  },
  {
    title: 'Micro USB',
    to: `micro usb`,
  },
];
// mainboard
const FILTER_BRAND_MAINBOARD = [
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'GIGABYTE',
    to: 'gigabyte',
  },
  {
    title: 'MSI',
    to: 'msi',
  },
  {
    title: 'ASROCK',
    to: 'asrock',
  },
  {
    title: 'INTEL',
    to: 'intel',
  },
];
const FILTER_CHIPSET_MAINBOARD = [
  {
    title: 'Z490',
    to: 'z490',
  },
  {
    title: 'B450',
    to: 'b450',
  },
  {
    title: 'B365',
    to: 'b365',
  },
  {
    title: 'B360',
    to: 'b360',
  },
  {
    title: 'Z390',
    to: 'z390',
  },
  {
    title: 'H310',
    to: 'h310',
  },
  {
    title: 'A320',
    to: 'a320',
  },
  {
    title: 'B460',
    to: 'b460',
  },
  {
    title: 'Z370',
    to: 'z370',
  },
  {
    title: 'X570',
    to: 'x570',
  },
  {
    title: 'B350',
    to: 'b350',
  },
];
const FILTER_SIZE_STD_MAINBOARD = [
  {
    title: 'Micro-ATX',
    to: '0',
  },
  {
    title: 'ATX',
    to: '1',
  },
  {
    title: 'Extended-ATX',
    to: '2',
  },
  {
    title: 'Mini-ATX',
    to: '3',
  },
  {
    title: 'XL-ATX',
    to: '4',
  },
];
const FILTER_SOCKET_MAINBOARD = [
  {
    title: '1151-v2',
    to: '0',
  },
  {
    title: '1200',
    to: '1',
  },
  {
    title: 'AM4',
    to: '2',
  },
  {
    title: '1151',
    to: '3',
  },
  {
    title: 'sTRX',
    to: '4',
  },
];
const FILTER_SERIES_MAINBOARD = [
  {
    title: 'ROG',
    to: 'rog',
  },
  {
    title: 'AORUS',
    to: 'aorus',
  },
  {
    title: 'Gaming',
    to: 'gmain',
  },
  {
    title: 'PRO',
    to: 'pro',
  },
  {
    title: 'KHT',
    to: 'kht',
  },
  {
    title: 'Prime',
    to: 'prime',
  },
];

// filter options list
const FILTER_OPTION_LIST = [
  // 0: LAPTOP
  {
    key: 0,
    root: `${ROUTES.FILTER}?t=0`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_LAPTOP,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Kích thước',
        subFilters: FILTER_SIZE_LAPTOP,
        query: 'reg-kich_thuoc_man_hinh=',
      },
      {
        title: 'Laptop theo giá',
        subFilters: FILTER_PRICE_LAPTOP,
        query: 'p-o-gia=',
      },
      {
        title: 'Cấu hình chip',
        subFilters: FILTER_CHIP_LAPTOP,
        query: 'the_he_chip=',
      },
    ],
  },
  // 1: DISK
  {
    key: 1,
    root: `${ROUTES.FILTER}?t=1`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_DISK,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Ổ cứng theo loại',
        subFilters: FILTER_TYPE_DISK,
        query: 'loai=',
      },
      {
        title: 'Dung lượng',
        subFilters: FILTER_CAPACITY_DISK,
        query: 'dungluong=',
      },
      {
        title: 'Chuẩn kêt nối',
        subFilters: FILTER_CONNECT_STD_DISK,
        query: 'chuan_ket_noi=',
      },
      {
        title: 'Kích thước',
        subFilters: FILTER_SIZE_DISK,
        query: 'kich_thuoc=',
      },
    ],
  },
  // 2: RAM
  {
    key: 4,
    root: `${ROUTES.FILTER}?t=4`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_RAM,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'RAM theo bus',
        subFilters: FILTER_BUS_RAM,
        query: 'bus=',
      },
      {
        title: 'Dung lượng',
        subFilters: FILTER_CAPACITY_RAM,
        query: 'p-reg-dlram=',
      },
      {
        title: 'Thế hệ RAM',
        subFilters: FILTER_GENERATION_RAM,
        query: 'loai=',
      },
    ],
  },
  // 3: MONITOR
  {
    key: 9,
    root: `${ROUTES.FILTER}?t=9`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_MONITOR,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Tấm nền',
        subFilters: FILTER_GB_PLATE_MONITOR,
        query: 'tam_nen=',
      },
      {
        title: 'Độ phân giải',
        subFilters: FILTER_RESOLUTON_MONITOR,
        query: 'dpg=',
      },
      {
        title: 'Kích thước',
        subFilters: FILTER_SIZE_MONITOR,
        query: 'reg-kich_thuoc_man_hinh=',
      },
      {
        title: 'Tần số quét',
        subFilters: FILTER_FREQUENCY_MONITOR,
        query: 'tan_so_quet=',
      },
    ],
  },
  // 4: DISPLAY
  {
    key: 2,
    root: `${ROUTES.FILTER}?t=2`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_DISPLAY,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Dung lượng',
        subFilters: FILTER_CAPACITY_DISPLAY,
        query: 'dungluong=',
      },
      {
        title: 'Nhà sản xuất',
        subFilters: FILTER_MANUFACTURER_DISPLAY,
        query: 'nha_sx=',
      },
    ],
  },
  // 5: MOBILE
  {
    key: 5,
    root: `${ROUTES.FILTER}?t=5`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_MOBILE,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Theo giá',
        subFilters: FILTER_PRICE_MOBILE,
        query: 'p-o-gia=',
      },
      {
        title: 'Bộ nhớ trong',
        subFilters: FILTER_ROM_MOBILE,
        query: 'rom=',
      },
      {
        title: 'Dung lượng RAM',
        subFilters: FILTER_RAM_MOBILE,
        query: 'ram=',
      },
    ],
  },
  // 6: MOUSE
  {
    key: 10,
    root: `${ROUTES.FILTER}?t=10`,
    data: [
      {
        title: 'Chuột theo thương hiệu',
        subFilters: FILTER_BRAND_MOUSE,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Chuột theo loại',
        subFilters: FILTER_TYPE_MOUSE,
        query: 'loai=',
      },
      {
        title: 'Chuột theo đèn led',
        subFilters: FILTER_LED_MOUSE,
        query: 'led=',
      },
    ],
  },
  // 12: KEYBOARD
  {
    key: 8,
    root: `${ROUTES.FILTER}?t=8`,
    data: [
      {
        title: 'Bàn phím theo thương hiệu',
        subFilters: FILTER_BRAND_KEYBOARD,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Loại bàn phím',
        subFilters: FILTER_TYPE_KEYBOARD,
        query: 'loai=',
      },
      {
        title: 'Màu bàn phím',
        subFilters: FILTER_COLOR_KEYBOARD,
        query: 'mau=',
      },
      {
        title: 'Led bàn phím',
        subFilters: FILTER_LED_KEYBOARD,
        query: 'MauLed=',
      },
    ],
  },
  // 7: HEADPHONE
  {
    key: 7,
    root: `${ROUTES.FILTER}?t=7`,
    data: [
      {
        title: 'Loại tai nghe',
        subFilters: FILTER_TYPE_HEADPHONE,
        query: 'loai=',
      },
      {
        title: 'Chuẩn kết nối',
        subFilters: FILTER_CONNECT_STD_HEADPHONE,
        query: 'chuan_ket_noi=',
      },
    ],
  },
  // 8: ROUTER
  {
    key: 11,
    root: `${ROUTES.FILTER}?t=11`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_ROUTER,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Băng thông',
        subFilters: FILTER_BANDWIDTH_ROUTER,
        query: 'bang_thong=',
      },
      {
        title: 'Độ mạnh ăng-ten',
        subFilters: FILTER_STRONG_ROUTER,
        query: 'do_manh_angten=',
      },
    ],
  },
  // 9: SPEAKER
  {
    key: 12,
    root: `${ROUTES.FILTER}?t=12`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_SPEAKER,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Công suất tổng',
        subFilters: FILTER_WATTAGE_SPEAKER,
        query: 'o-cong_suat=',
      },
      {
        title: 'Chuẩn kết nối',
        subFilters: FILTER_CONNECT_STD_SPEAKER,
        query: 'reg-chuan_cong=',
      },
    ],
  },
  // 10: CAMERA
  {
    key: 13,
    root: `${ROUTES.FILTER}?t=13`,
    data: [
      {
        title: 'Camera theo thương hiệu',
        subFilters: FILTER_BRAND_CAMERA,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Camera hành trình',
        subFilters: FILTER_OTHER_CAMERA,
        query: 'reg-name=',
      },
    ],
  },
  // 11: MAINBOARD
  {
    key: 3,
    root: `${ROUTES.FILTER}?t=3`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_MAINBOARD,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Chipset',
        subFilters: FILTER_CHIPSET_MAINBOARD,
        query: 'reg-chipset=',
      },
      {
        title: 'Chuẩn kích thước',
        subFilters: FILTER_SIZE_STD_MAINBOARD,
        query: 'chuan_kt=',
      },
      {
        title: 'Socket',
        subFilters: FILTER_SOCKET_MAINBOARD,
        query: 'socket=',
      },
      {
        title: 'Series mainboard',
        subFilters: FILTER_SERIES_MAINBOARD,
        query: 'reg-series=',
      },
    ],
  },
];

// các cặp chuyển đổi url
const PAIR_CONVERT_KEY = [
  { l: `lonhon-`, r: `"$gte":` },
  { l: `nhohon-`, r: `"$lt":` },
  { l: `thuong_hieu`, r: `brand` },
  { l: `kich_thuoc_man_hinh`, r: `displaySize` },
  { l: `gia`, r: `price` },
  { l: `the_he_chip`, r: `cpu.series` },
  { l: `duoi_13_inch`, r: `(1[0-2]\.[0-9]\")` },
  { l: `tu_13_den_15_inch`, r: `(1[3-5]\.[0-9]\")` },
  { l: `tren_15_inch`, r: `([2-9][3-5]\.[0-9]\")` },
  { l: `GB`, r: '' },
  { l: `loai`, r: `type` },
  { l: `dungluong`, r: `capacity` },
  { l: `chuan_ket_noi`, r: `connectionStd` },
  { l: `kich_thuoc`, r: `size` },
  { l: `SSD`, r: `1` },
  { l: `HDD`, r: `0` },
  { l: `2.5"`, r: `0` },
  { l: `3.5"`, r: `1` },
  { l: `M.2 2280`, r: `2` },
  { l: `m.2`, r: `3` },
  { l: `dlram`, r: `name` },
  { l: `tr`, r: `000000` },
  { l: `MHz`, r: '' },
  { l: `ddr3`, r: `0` },
  { l: `DDR3L`, r: `1` },
  { l: `DDR4`, r: `2` },
  { l: `tam_nen`, r: `bgPlate` },
  { l: `IPS`, r: `0` },
  { l: `va`, r: `1` },
  { l: `TN`, r: `2` },
  { l: `PLS`, r: `3` },
  { l: `MVA`, r: `4` },
  { l: `KHT`, r: `5` },
  { l: `dpg`, r: `resolution` },
  { l: `1920x1080`, r: `0` },
  { l: `2560x1440`, r: `1` },
  { l: `1366x768`, r: `2` },
  { l: `1600x900`, r: `3` },
  { l: `3840x2160`, r: `4` },
  { l: `2560x1080`, r: `5` },
  { l: `3440x1440`, r: `6` },
  { l: `tan_so_quet`, r: `frequency` },
  { l: `Hz`, r: '' },
  { l: `nha_sx`, r: `manufacturer` },
  { l: `NVIDIA`, r: `0` },
  { l: `AMD`, r: `1` },
  { l: `co_day`, r: `0` },
  { l: `khong_day`, r: `1` },
  { l: `led`, r: `isLed` },
  { l: `rgb`, r: `true` },
  { l: `khong_Led`, r: `false` },
  { l: `ban_phim_thuong`, r: `0` },
  { l: `ban_phim_gc`, r: `1` },
  { l: `ban_phim_co`, r: `2` },
  { l: `mau`, r: `color` },
  { l: `MauLed`, r: `ledColor` },
  { l: `over_ear`, r: `0` },
  { l: `in_ear`, r: `1` },
  { l: `on_ear`, r: `2` },
  { l: `bang_thong`, r: `bandwidth` },
  { l: `do_manh_angten`, r: `strong` },
  { l: `dBi`, r: '' },
  { l: `cong_suat`, r: `wattage` },
  { l: `W`, r: '' },
  { l: `chuan_cong`, r: `connectionPort` },
  { l: `chuan_kt`, r: `sizeStd` },
  { l: `socket`, r: `socketType` },
];

export default {
  REFRESH_TOKEN_KEY: 'refresh_token',
  ACCESS_TOKEN_KEY: 'ttb_atk',
  MAX_VERIFY_CODE: 6,
  TRANSPORT_METHOD_OPTIONS,
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
  FILTER_LED_MOUSE,
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
  PAIR_CONVERT_KEY,
};
