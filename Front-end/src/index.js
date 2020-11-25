import React from 'react';
import ReactDOM from 'react-dom';

//===== Redux =====//
import { Provider } from 'react-redux';
import configStore from 'configs/configureStore';
import App from 'containers/App';
import ProductView from './components/ProductView/index';
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <ProductView  item={{name:'Màn hình máy tính LG UltraWide™ 29inch IPS 75Hz AMD FreeSync™ HDR 29WN600-W'
    ,price:200000,initialPrice:300000,remaining:'Còn 1 sản phẩm'}}/>
  </Provider>,
  document.getElementById('root'),
);

