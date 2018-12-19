

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import rootReducer from './redux/reducer'
// import Routes from '@configs/router.config'
import configure from './middleWeare'
import './index.scss'
import 'antd/dist/antd.css'


const store = configure({})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)


