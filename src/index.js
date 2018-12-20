
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
    <App />
  </Provider>,
  document.getElementById('app')
);
