import { defineComponent, ref } from "vue";

/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-13 14:37:52
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-13 15:52:14
 * @FilePath: /vueclits/src/layout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default defineComponent({
  setup() {
    const selectedKeys1 = ref<string[]>(['2']);
    const selectedKeys2 = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1'])
    return {
        selectedKeys1,
        selectedKeys2,
        openKeys
    };
  },
  render(ctx:any) {
    const mslot = {
        title: () => {
            return (
                <>
                    <span>用户管理</span>
                </>
            )
        }
    }
    return (
      <div style={{height: '100%'}}>
        <a-layout style={{height: '100vh'}}>
          <a-layout-header class="header">
            <div class="logo" />
            <a-menu
              v-model:selectedKeys={ctx.selectedKeys1}
              theme="dark"
              mode="horizontal"
            >
              <a-menu-item key="1">nav 1</a-menu-item>
              <a-menu-item key="2">nav 2</a-menu-item>
              <a-menu-item key="3">nav 3</a-menu-item>
            </a-menu>
          </a-layout-header>
          <a-layout>
            <a-layout-sider width="200" style="background: #fff">
              <a-menu
                v-model:selectedKeys={ctx.selectedKeys2}
                v-model:openKeys={ctx.openKeys}
                mode="inline"
                style={{height: '100%', borderRight: 0}}
              >
                <a-sub-menu key="sub1" v-slots={mslot}>
                  <a-menu-item key="1">option1</a-menu-item>
                  <a-menu-item key="2">option2</a-menu-item>
                  <a-menu-item key="3">option3</a-menu-item>
                  <a-menu-item key="4">option4</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2" v-slots={mslot}>
                  <a-menu-item key="5">option5</a-menu-item>
                  <a-menu-item key="6">option6</a-menu-item>
                  <a-menu-item key="7">option7</a-menu-item>
                  <a-menu-item key="8">option8</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3" v-slots={mslot}>
                  <a-menu-item key="9">option9</a-menu-item>
                  <a-menu-item key="10">option10</a-menu-item>
                  <a-menu-item key="11">option11</a-menu-item>
                  <a-menu-item key="12">option12</a-menu-item>
                </a-sub-menu>
              </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
              <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
              </a-breadcrumb>
              <a-layout-content style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                {/* Content */}
                <router-vie></router-vie>
              </a-layout-content>
            </a-layout>
          </a-layout>
        </a-layout>
      </div>
    );
  },
});
