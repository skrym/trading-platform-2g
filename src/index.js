import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import getStore from './store/getStore';
import WithRouter from './withRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = getStore(preloadedState);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <WithRouter />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
