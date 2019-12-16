//引入React
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入App.jsx
import App from './App';
//引入重置的样式文件
import './assets/css/reset.css'
// import './assets/css/font-icon.css'

import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
 document.getElementById('root'));

