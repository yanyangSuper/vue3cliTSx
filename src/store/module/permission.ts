/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-30 15:23:28
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-30 17:14:36
 * @FilePath: /vueclits/src/store/permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { constantRoutes, asyncRoutes } from "@/router"

/**
 * 
 * @param roles 用户角色数组
 * @param route 路由meta角色数组
 * @returns 
 */
function hasPermission(roles: Array<string>, route: any) {
    if (route.meta && route.meta.roles) {
      return roles.some(role => route.meta.roles.includes(role))
    } else {
      return true
    }
}
/**
 * 
 * @param routes 需要权限控制的路由
 * @param roles 用户角色
 * @returns 
 */
export function filterAsyncRoutes(routes: any, roles: any) {
    const res: any = []
  
    routes.forEach((route: any) => {
      const tmp = { ...route }
      if (hasPermission(roles, tmp)) {
        if (tmp.children) {
          tmp.children = filterAsyncRoutes(tmp.children, roles)
        }
        res.push(tmp)
      }
    })
  
    return res
}

const state = {
    msg: 123,
    routes: [],
    addRoutes: []
}
const mutations = {
    SET_ROUTES: (state: any, routes: any) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}
const actions = {
    generateRoutes({ commit } : {commit: any}, roles: any) {
        return new Promise(resolve => {
          let accessedRoutes
          if (roles.includes('admin')) {
            accessedRoutes = asyncRoutes || []
          } else {
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
          }
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}