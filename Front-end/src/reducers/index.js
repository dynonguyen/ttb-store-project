import { combineReducers } from 'redux';
import authReducer from './auth';
import cartsReducer from './carts';
import userReducer from './user';

const rootReducer = combineReducers({
  authenticate: authReducer.authReducer,
  user: userReducer.userReducer,
  carts: cartsReducer.cartReducer,
});

export default rootReducer;
