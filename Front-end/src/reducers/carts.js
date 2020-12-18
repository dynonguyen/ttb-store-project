//======= imports =======//

import constants from 'constants/index';

//======= constant action type =======//
const ADD_PRODUCT = 'ADD_PRODUCT';

//======= actions request (call API) =======//

//======= actions =======//
const addToCart = (item) => {
  return {
    type: ADD_PRODUCT,
    payload: item,
  };
};

//======= initial state =======//
const carts = JSON.parse(localStorage.getItem(constants.CARTS));
const initialState = carts ? carts : [];

//======= reducer =======//
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const item = action.payload;
      let newCart = [...state];

      // Kiểm tra trong giỏ hàng đã có item đó hay chưa
      let isExist = false;
      for (let i = 0; i < newCart.length; ++i) {
        if (newCart[i].code === item.code) {
          newCart[i].amount += item.amount;
          isExist = true;
          break;
        }
      }
      if (!isExist) newCart = [...newCart, item];

      // cập nhật lại local storage
      localStorage.setItem(constants.CARTS, JSON.stringify(newCart));
      return newCart;
    }
    default:
      return [...state];
  }
};

//======= exports =======//
export default {
  addToCart,
  ADD_PRODUCT,
  cartReducer,
};
