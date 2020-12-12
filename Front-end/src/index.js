import configStore from 'configs/configureStore';
import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
//===== Redux =====//
import { Provider } from 'react-redux';
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
