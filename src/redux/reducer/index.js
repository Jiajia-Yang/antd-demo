import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

const reducers = {
    tableList: handleActions({
        'request table list'(state, action) {
          const { req, res } = action.payload
          return { list: res }
        },
    }, {list: []}),

    filterData: handleActions({
        'request table list'(state, action) {
          const { req, res } = action.payload
          return { data: res }
        },
    }, {
        person: '', urgent: '', position: '', order: '', status: ''
    }),
}

const rootReducer = combineReducers({
  ...reducers
})

export default rootReducer