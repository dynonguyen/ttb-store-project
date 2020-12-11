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

export default {
  reduceProductName,
  formatProductPrice,
  calStar,
  convertProductKey,
  convertWidthScreen,
};
