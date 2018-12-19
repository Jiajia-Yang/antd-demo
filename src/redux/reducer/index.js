import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { REQUESTPOSITIONLISTSTART, REQUESTPOSITIONLISTEND, REQUESTTABLELISTSTART, REQUESTTABLELISTEND, FORMCHANGE } from '../actions/constants'

const reducers = {
    tableList: handleActions({ 
        [REQUESTTABLELISTSTART]: (state, action) => {
            return { ...state, loading: true }
        },
        [REQUESTTABLELISTEND]: (state, action) => {
            const { list } = action.payload.res.data
            return { list, loading: false }
        }
    }, {list: [] }),

    positionList: handleActions({ 
        [REQUESTPOSITIONLISTSTART]: (state, action) => {
            return { ...state, loading: true }
        },
        [REQUESTPOSITIONLISTEND]: (state, action) => {
            const { list } = action.payload.res.data
            return { list, loading: false }
        }
    }, {list: [] }),

    filterData: handleActions({
        [FORMCHANGE]: (state, action) => {
            const { payload } = action
            state = payload ? Object.assign(state, action.payload) : {}
            return { ...state }
        }
    }, {}),
}

export default  combineReducers({
    ...reducers
})

