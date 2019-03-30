
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './app';
import rootReducer from '@reducers';
import './index.scss';
import 'antd/dist/antd.css';

const initialState = {};
const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
