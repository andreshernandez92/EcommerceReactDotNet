import React, { useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import CustomRouter from './app/customcomponents/CustomRouter';
import history from './app/customcomponents/Historycustom';
import { Provider } from 'react-redux';
import {store} from '../../client/src/app/store/configStore'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<CustomRouter history={history}>
    <Provider store={store}>
    <App />
    </Provider>
    </CustomRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
