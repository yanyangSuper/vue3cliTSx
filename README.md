<!--
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:25:18
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 15:22:01
 * @FilePath: /vueclits/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# vueclits
产品推进技术，还是技术推动产品
# descripetion
1. vue3 + typescript + Ant Design of Vue + vuex + vueRouter + tjx项目架构
2. 

# 蓝图
1. 大文件切片上传，断点续传，妙传
2. 头像剪辑
3. websocket在线签名
4. 拖拽
5. 前端xlsx,csx表格生成
6. 微前端qiankun
7. husky前端代码规范，提交
8. cms网站内容配置化（可选）
# TSX写法
1. v-model, bind @
2. style, class
```
// 绑定对象
<a-menu
    v-model:selectedKeys={ctx.selectedKeys2}
    v-model:openKeys={ctx.openKeys}
    mode="inline"
    style={{height: '100%', borderRight: 0}}
></a-menu>

// 静态绑定
<a-layout-sider width="200" style="background: #fff">
```
3. 插槽v-slot,作用域插槽

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
