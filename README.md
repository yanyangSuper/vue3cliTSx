<!--
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:25:18
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-14 14:18:47
 * @FilePath: /vueclits/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# vueclits
# descripetion
1. vue3 + typescript + Ant Design of Vue + vuex + vueRouter + tjx项目架构
2. 

# TSX写法
1. v-model, bind @
2. style, class
```
<a-menu
    v-model:selectedKeys={ctx.selectedKeys2}
    v-model:openKeys={ctx.openKeys}
    mode="inline"
    style={{height: '100%', borderRight: 0}}
></a-menu>
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
