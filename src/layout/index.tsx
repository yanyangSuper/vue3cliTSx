import { defineComponent, ref, onMounted } from "vue";
import AppMain from './components/appmain'
import SlideBar from "./components/slidebar";
import NavBar from './components/navbar'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
// import { getlist, login } from '../api/user'

/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-13 14:37:52
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 15:21:48
 * @FilePath: /vueclits/src/layout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default defineComponent({
  setup() {
    const selectedKeys1 = ref<string[]>(['2']);
    const selectedKeys2 = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1'])

    // vuex
    const store = useStore()
    console.log(store, 11, store.state.permission.msg)
    // 路由
    const router = useRouter()
    console.log(router, '---router--')
    // jsx 计算属性
    //生命周期
    onMounted(() => {
      console.log('mocks')
      // getlist().then(res => {
      //   console.log(res)
      // })
      // login({
      //   userName: 'yangyang',
      //   password: '123456'
      // }).then(res => {
      //   console.log(res)
      // })
    })

    return {
        selectedKeys1,
        selectedKeys2,
        openKeys,
    };
  },
  render(ctx:any) {
    return (
      <div style={{height: '100%'}}>
        <a-layout style={{height: '100vh'}}>
          <a-layout-header class="header">
            <NavBar></NavBar>
          </a-layout-header>
          <a-layout>
            <a-layout-sider width="200" style="background: #fff">
              <SlideBar></SlideBar>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
              <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
              </a-breadcrumb>
              <a-layout-content style={{background: '#fff', padding: '24px', margin: 0, minHeight: '280px'}}>
                {/* Content */}
                {/* <router-view></router-view> */}
                <AppMain></AppMain>
              </a-layout-content>
            </a-layout>
          </a-layout>
        </a-layout>
      </div>
    );
  },
});
