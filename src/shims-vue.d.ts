/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:25:09
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-04 16:17:14
 * @FilePath: /vueclits/src/shims-vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 解决报错模块引入
declare module 'mockjs';
