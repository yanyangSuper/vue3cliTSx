/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-07-03 17:59:43
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-04 17:36:18
 * @FilePath: /vueclits/src/api/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../utils/require'

export function gerInfo(query: object) {
    return request({
        url: '/vue-element-admin/article/list',
        method: 'get',
        params: query
    })
}
export function getlist() {
    return request({
        url: '/data/list',
        method: 'get',
    })
}
export function login(params: object) {
    return request({
        url: '/user/login',
        method: 'post',
        data: params
    })
}
