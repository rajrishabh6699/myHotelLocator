import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components";
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

