

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import Routes from '@configs/router.config'
import configure from '@middleware/configureStore'
import '@styles/index.scss'

const store = configure({ })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)