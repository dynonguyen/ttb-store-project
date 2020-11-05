// configure store for Redux
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

//if environment === 'dev' then use REDUX devTool
const composeEnhancer =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

//configuration store
const configStore = () => {
  //middleware
  const middleware = [thunk];
  //enhancer
  const enhancer = [applyMiddleware(...middleware)];
  const store = createStore(rootReducer, composeEnhancer(...enhancer));
  return store;
};

export default configStore;
