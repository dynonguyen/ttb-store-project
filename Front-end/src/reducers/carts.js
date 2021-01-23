//======= imports =======//

import constants from 'constants/index';

//======= constant action type =======//
const ADD_PRODUCT = 'ADD_PRODUCT';
const RESET_CART = 'RESET_CART';
const DEL_CART_ITEM = 'DEL_CART_ITEM';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
//======= actions request (call API) =======//

//======= actions =======//
const addToCart = (item) => {
  return {
    type: ADD_PRODUCT,
    payload: item,
  };
};

const resetCart = () => {
  return {
    type: RESET_CART,
  };
};

const delCartItem = (index) => {
  return {
    type: DEL_CART_ITEM,
    payload: index,
  };
};

// cấp nhật số lượng sản phẩm của 1 item
const updateCartItem = (index, value) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: { index, value },
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
      return [...newCart];
    }
    case RESET_CART: {
      localStorage.removeItem(constants.CARTS);
      return [];
    }
    case DEL_CART_ITEM: {
      const index = action.payload;
      let newCart = [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];
      // cập nhật lại local storage
      localStorage.setItem(constants.CARTS, JSON.stringify(newCart));
      return [...newCart];
    }
    case UPDATE_CART_ITEM: {
      const { index, value } = action.payload;
      let newCart = state.map((item, i) =>
        i === index ? { ...item, amount: value } : { ...item },
      );
      // cập nhật lại local storage
      localStorage.setItem(constants.CARTS, JSON.stringify(newCart));
      return [...newCart];
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
  resetCart,
  delCartItem,
  updateCartItem,
};
