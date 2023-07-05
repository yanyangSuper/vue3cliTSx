/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-30 18:17:51
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 15:34:12
 * @FilePath: /vueclits/src/store/getter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const getters = {
    sidebar: (state: any) => state.app.sidebar,
    size: (state: any) => state.app.size,
    device: (state: any) => state.app.device,
    visitedViews: (state: any) => state.tagsView.visitedViews,
    cachedViews: (state: any) => state.tagsView.cachedViews,
    token: (state: any) => state.user.token,
    avatar: (state: any) => state.user.avatar,
    name: (state: any) => state.user.name,
    introduction: (state: any) => state.user.introduction,
    roles: (state: any) => state.user.roles,
    permission_routes: (state: any) => state.permission.routes,
    errorLogs: (state: any) => state.errorLog.logs
}

export default getters