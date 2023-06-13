/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-12 15:40:19
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-12 15:40:29
 * @FilePath: /vueclits/typed-css.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
  }