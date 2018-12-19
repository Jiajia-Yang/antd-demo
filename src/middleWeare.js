import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducer'

const nextReducer = require('./redux/reducer')

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', _ => store.replaceReducer(nextReducer))
  }

  return store
}
