/* eslint-disable no-console */
import axios from 'axios'
import { Notify } from 'vant'
import config from '../config/index' // 路径配置

// create an axios instance
const service = axios.create({
    baseURL: config.baseURL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})

// request 拦截器
service.interceptors.request.use(
    config => {
        // 这里可以自定义一些config 配置

        return config
    },
    error => {
        //  这里处理一些请求出错的情况

        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        // if the custom code is not 20000, it is judged as an error.
        if (response.status === 200) {
            return res
        } else {
            Notify({ type: 'warning', message: res.message });
            return Promise.reject(new Error(res.message || 'Error'))
        }
    },
    error => {
        const res = JSON.parse(JSON.stringify(error)).response.data
        console.log(JSON.parse(JSON.stringify(error)).response)
        if (res.error && res.error === 'invalid_token') {
            console.log(res)
            location.reload()
        }
        Notify({ type: 'warning', message: res.message });
        return Promise.reject(res)
    }
)

export default service
