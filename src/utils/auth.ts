/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-30 17:38:30
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-30 17:57:01
 * @FilePath: /vueclits/src/utils/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
//   return Cookies.get(TokenKey)
return localStorage.getItem(TokenKey)
}

export function setToken(token: string) {
//   return Cookies.set(TokenKey, token)
return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
//   return Cookies.remove(TokenKey)
return localStorage.removeItem(TokenKey)
}
