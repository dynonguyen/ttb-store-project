// fn: hàm rút gọn tên sản phẩm
const reduceProductName = (name) => {
  let result = name;
  if (name && name.length >= 64) {
    result = name.slice(0, 64) + ' ...';
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

export default {
  reduceProductName,
  formatProductPrice,
};
