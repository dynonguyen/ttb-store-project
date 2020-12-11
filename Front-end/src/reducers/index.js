import { combineReducers } from 'redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  authenticate: authReducer.authReducer,
});

export default rootReducer;
