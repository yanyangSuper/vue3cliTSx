/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-07-05 15:45:34
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 18:20:13
 * @FilePath: /vueclits/src/store/module/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { userInfo } from '../../api/user'
interface info {
    avator: string
    roles: Array<string>
    name: string,
    nickname: string,
    email: string,
    address: string
}
const state = {
    avator: '',
    roles: [],
    name: '',
    nickname: '',
    email: '',
    address: ''
}
const mutations = {
    setInfo(state: any, info: info){
        // 请求info
        console.log(info, '****setInfo****')
        const { avator, roles, name, nickname, email, address } = info
        state.avator = avator
        state.roles = roles
        state.name = name
        state.nickname = nickname
        state.email = email
        state.address = address
    }
}

const actions = {
    getInfo({ commit } : {commit: any}) {
        return new Promise((resolve, reject) => {
            // debugger
            userInfo().then(response => {
              const { data } = response
      
              if (!data) {
                reject('Verification failed, please Login again.')
              }
              // roles must be a non-empty array
              if (!data.roles || data.roles.length <= 0) {
                reject('getInfo: roles must be a non-null array!')
              }
              commit('setInfo', data)
              resolve(data)
            }).catch(error => {
              reject(error)
            })
          })
    },
    resetToken() {
        console.log('logout')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}