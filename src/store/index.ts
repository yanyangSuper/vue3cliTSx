/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:25:09
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 18:24:52
 * @FilePath: /vueclits/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'
import permission from './module/permission'
import user from './module/user'
import getters from './getters'

export default createStore({
  state: {
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    permission,
    user
  }
})
