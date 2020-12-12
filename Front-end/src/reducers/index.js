import { useReducer } from 'react';
import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  authenticate: authReducer.authReducer,
  user: userReducer.userReducer,
});

export default rootReducer;
