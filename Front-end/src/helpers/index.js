import constants from 'constants/index';

// fn: hàm rút gọn tên sản phẩm
const reduceProductName = (name, length = 64) => {
  let result = name;
  if (name && name.length >= length) {
    result = name.slice(0, length) + ' ...';
  }
  return result;
};

// fn: hàm format giá sản phẩm
const formatProductPrice = (price) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

// fn: tính tỉ lệ sao của sản phẩm [1,2,3,4,5]
const calStar = (rates) => {
  const total = rates.reduce((a, b) => a + b, 0);
  if (total === 0) return 0;
  let rateTotal = 0;
  for (let i = 0; i < 5; ++i) {
    rateTotal += rates[i] * (i + 1);
  }
  return rateTotal / total;
};

// fn: chuyển key product thành tiếng Việt, vd: color => màu sắc
const convertProductKey = (key) => {
  switch (key) {
    case 'brand':
      return 'Thương hiệu';
    case 'aperture':
      return 'Khẩu độ';
    case 'focalLength':
      return 'Tiêu cự';
    case 'sensor':
      return 'Cảm biến';
    case 'numberOfPixel':
      return 'Số điểm ảnh';
    case 'resolution':
      return 'Độ phân giải';
    case 'warranty':
      return 'Bảo hành';
    case 'connectionStd':
      return 'Chuẩn kết nối';
    case 'frameSpeed':
      return 'Tốc độ khung hình';
    case 'capacity':
      return 'Dung lượng';
    case 'size':
      return 'Kích thước';
    case 'type':
      return 'Loại';
    case 'readSpeed':
      return 'Tốc độ đọc';
    case 'writeSpeed':
      return 'Tốc độ ghi';
    case 'rpm':
      return 'Tốc độ vòng quay';
    case 'manufacturer':
      return 'Nhà sản xuất';
    case 'chipBrand':
      return 'Nhãn hiệu chip';
    case 'processorCount':
      return 'Số lượng cpu';
    case 'series':
      return 'Series';
    case 'detail':
      return 'Chi tiết khác';
    case 'displaySize':
      return 'Kích thước màn hình';
    case 'display':
      return 'Card màn hình';
    case 'operating':
      return 'Hệ điều hành';
    case 'disk':
      return 'Ổ cứng';
    case 'ram':
      return 'RAM';
    case 'pin':
      return 'Dung lượng pin';
    case 'weight':
      return 'Khối lượng';
    case 'chipset':
      return 'Chip set';
    case 'socketType':
      return 'Loại socket';
    case 'bus':
      return 'Loại bus';
    case 'numberOfPort':
      return 'Số lượng cổng';
    case 'color':
      return 'Màu sắc';
    case 'cpu':
      return 'Cpu';
    case 'before':
      return 'Camera trước';
    case 'after':
      return 'Camera sau';
    case 'voltage':
      return 'Loại sạc';
    case 'ledColor':
      return 'Màu led';
    case 'frequency':
      return 'Tần số quét';
    case 'port':
      return 'Cổng';
    case 'bgPlate':
      return 'Tấm nền';
    case 'isLed':
      return 'Loại led';
    case 'bandwidth':
      return 'Băng thông';
    case 'strong':
      return 'Độ mạnh ăng-ten';
    case 'connectionPort':
      return 'Cổng kết nối';
    case 'wattage':
      return 'Công suất';
    default:
      return 'Chi tiết khác';
  }
};

// fn: chuyên width màn hình window -> size theo ant design
const convertWidthScreen = (size = 576) => {
  if (size < 576) return 'xs';
  if (size >= 576 && size < 768) return 'sm';
  if (size >= 768 && size < 992) return 'md';
  if (size >= 992 && size < 1200) return 'lg';
  if (size >= 1200 && size < 1600) return 'xl';
  return 'xxl';
};

// fn: Hàm chuyển rate thành text
const convertRateToText = (rate = 0) => {
  switch (rate) {
    case 0:
      return 'Sản phẩm quá tệ';
    case 1:
      return 'Sản phẩm không tốt';
    case 2:
      return 'Sản phẩm bình thường';
    case 3:
      return 'Sản phẩm tốt';
    case 4:
      return 'Cực kỳ hài lòng';
    default:
      return 'Sản phẩm bình thường';
  }
};

// fn: format thời gian
const formatDate = (date = new Date().getTime()) => {
  const d = new Date(date);
  const y = d.getFullYear(),
    m = d.getMonth(),
    day = d.getDate();

  return `${day} tháng ${m + 1}, ${y}`;
};

//fn: chuyển loại sản phẩm từ số thành Model
const convertProductType = (type = 0) => {
  switch (type) {
    case 0:
      return 'Laptop';
    case 1:
      return 'Ổ cứng';
    case 2:
      return 'Card màn hình';
    case 3:
      return 'Mainboard';
    case 4:
      return 'RAM';
    case 5:
      return 'Điện thoại';
    case 6:
      return 'Sạc dự phòng';
    case 7:
      return 'Tai nghe';
    case 8:
      return 'Bàn phím';
    case 9:
      return 'Màn hình';
    case 10:
      return 'Chuột';
    case 11:
      return 'Router Wifi';
    case 12:
      return 'Loa';
    case 13:
      return 'Camera';
    case 14:
      return 'Webcam';
    default:
      return 'Khác';
  }
};

// fn: Chuyển series laptop sang chữ
const convertSeriesChipCpu = (series = 0) => {
  switch (series) {
    case 0:
      return 'Core i3';
    case 1:
      return 'Core i5';
    case 2:
      return 'Core i7';
    case 3:
      return 'Core i9';
    case 4:
      return 'Ryzen 3';
    case 5:
      return 'Ryzen 5';
    case 6:
      return 'Ryzen 7';
    case 7:
      return 'Pentium';
    case 8:
      return 'Celeron';
    default:
      return 'Core i3';
  }
};

// fn: random màu
const randomColor = () => {
  let r = Math.round(Math.random() * 254 + 1);
  let g = Math.round(Math.random() * 254 + 1);
  let b = Math.round(Math.random() * 254 + 1);
  return `rgb(${r},${g},${b})`;
};

// fn: generate autocomplete search options
const autoSearchOptions = () => {
  let result = [];
  // laptop
  result.push({ value: 'Laptop Macbook' });
  result.push({ value: 'RAM' });
  result.push({ value: 'Ổ cứng SSD' });
  result.push({ value: 'Máy ảnh Sony' });
  result.push({ value: 'Mainboard Bo mạch chủ' });
  result.push({ value: 'Loa, thiết bị âm thanh' });
  result.push({ value: 'Màn hình, card màn hình' });
  result.push({ value: 'Router wifi' });

  constants.FILTER_BRAND_LAPTOP.map((item) => {
    result.push({ value: `Laptop ${item.title}` });
  });
  constants.FILTER_CHIP_LAPTOP.map((item) => {
    result.push({ value: `Laptop ${item.title}` });
  });
  constants.FILTER_SIZE_LAPTOP.map((item) => {
    result.push({ value: `Laptop ${item.title}` });
  });
  constants.FILTER_BRAND_RAM.map((item) => {
    result.push({ value: `RAM ${item.title}` });
  });
  constants.FILTER_BUS_RAM.map((item) => {
    result.push({ value: `RAM Bus ${item.title}` });
  });
  constants.FILTER_CAPACITY_RAM.map((item) => {
    result.push({ value: `RAM ${item.title}` });
  });
  constants.FILTER_GENERATION_RAM.map((item) => {
    result.push({ value: `RAM ${item.title}` });
  });
  constants.FILTER_SIZE_DISK.map((item) => {
    result.push({ value: `Ổ cứng ${item.title}` });
  });
  constants.FILTER_CAPACITY_DISK.map((item) => {
    result.push({ value: `Ổ cứng SSD ${item.title}` });
    result.push({ value: `Ổ cứng HDD ${item.title}` });
  });
  constants.FILTER_BRAND_MOBILE.map((item) => {
    result.push({ value: `Điện thoại ${item.title}` });
  });
  constants.FILTER_BRAND_KEYBOARD.map((item) => {
    result.push({ value: `Bàn phím ${item.title}` });
  });
  constants.FILTER_TYPE_KEYBOARD.map((item) => {
    result.push({ value: `${item.title}` });
  });
  constants.FILTER_BRAND_MOUSE.map((item) => {
    result.push({ value: `Chuột ${item.title}` });
  });
  constants.FILTER_RESOLUTON_MONITOR.map((item) => {
    result.push({ value: `Màn hình độ phân giải ${item.title}` });
  });
  constants.FILTER_SIZE_MONITOR.map((item) => {
    result.push({ value: `Màn hình ${item.title}` });
  });
  constants.FILTER_MANUFACTURER_DISPLAY.map((item) => {
    result.push({ value: `Card màn hình rời ${item.title}` });
  });
  return result;
};

export default {
  reduceProductName,
  formatProductPrice,
  calStar,
  convertProductKey,
  convertWidthScreen,
  convertRateToText,
  convertProductType,
  formatDate,
  convertSeriesChipCpu,
  randomColor,
  autoSearchOptions,
};
