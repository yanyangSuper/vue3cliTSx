/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:25:09
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-04 16:11:57
 * @FilePath: /vueclits/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
// @ts-ignore
import App from './App'
import router from './router'
import store from './store'

// mockjs模拟前期数据
import "@/mockjs/index.ts";
// 权限
// import './utils/permission'

// 组件库引入
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

createApp(App).use(store).use(router).use(Antd).mount('#app')
