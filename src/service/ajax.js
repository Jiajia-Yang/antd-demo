import axios from 'axios'
import { message } from 'antd'

const axiosConfig = {
    baseURL: '/',
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    validateStatus: status => status >= 200 && status < 300,
}

const service = axios.create({ ...axiosConfig})

const successCb = (response, success, failure) => {
    if (response.code === 0) {
        success && success(response)
    } else {
        message.error(response.msg)
        typeof failure === 'function' ? failure(response) : message.warning('服务器返回参数无法识别')
    }
}

const failCb = error => {
    if (typeof failure === 'function') {
        failure({
            data: '',
            msg: error.message,
            code: 0,
        })
    }
}

export const createApiGet = function (api, options) {
    if (typeof api === 'function') return api
    return (...rest) => {
        const data = rest[0] || {}
        let success = null
        let failure = null
        rest.map(item=> {
            if (typeof item === 'function') !success ? success = item : failure = item
        })
        const pamars = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
        const apiEdit = pamars ? `${api}?${pamars}` : api
        service.get(apiEdit).then(response => response.data).then(response => successCb(response, success, failure)).catch(failCb)
    }
}

export const createApiPost = function (api, options) {
    if (typeof api === 'function') return api
    return service.post(api).then(response => successCb(response, success, failure)).catch(failCb)
}

export const createAjaxAction = (createdApi, startAction, endAction) => (request = {}, resolve, reject) => (dispatch) => {
    if (startAction) dispatch(startAction({ req: request, res: {} }))
    const _resolve = (response) => {
      if (endAction) dispatch(endAction({ req: request, res: response }))
      if (resolve) resolve(response)
    }
    return createdApi(request, _resolve, reject)
}




  