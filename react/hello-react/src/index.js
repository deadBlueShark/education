import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*
Truyền data vào component: dùng props
State chỉ sử dụng bên trong component, bên ngoài ko access đc
State truyền vào child compoments, thành props của child components


Class-based compopent
Functional component: nhẹ hơn
*/
