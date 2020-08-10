import request from '@/utils/request'

// 获取数据
export function getDataList(url, params) {
    return request({
        url,
        method: 'get',
        params
    })
}