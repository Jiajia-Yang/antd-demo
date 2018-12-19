import { createAction } from 'redux-actions'
import { createApiGet, createAjaxAction } from '@service/ajax'
import { REQUESTPOSITIONLISTSTART, REQUESTPOSITIONLISTEND, REQUESTTABLELISTSTART, REQUESTTABLELISTEND, FORMCHANGE } from '@actions/constants'


const tableStart = createAction(REQUESTTABLELISTSTART)
const tableEnd = createAction(REQUESTTABLELISTEND)
export const requestTableList = createAjaxAction(createApiGet('/api/tablelist'), tableStart, tableEnd)

const positionStart = createAction(REQUESTPOSITIONLISTSTART)
const positionEnd = createAction(REQUESTPOSITIONLISTEND)
export const requestpositionList = createAjaxAction(createApiGet('/api/positionlist'), positionStart, positionEnd)

export const onFormChange = createAction(FORMCHANGE)


