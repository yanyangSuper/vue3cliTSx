/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-13 14:46:58
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-29 14:59:12
 * @FilePath: /vueclits/src/layout/components/slidebar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from "vue";

/**
 * 侧边栏
 */
export default defineComponent({
    setup() {
        const selectedKeys2 = ref<string[]>(['1']);
        return {
            selectedKeys2
        }
    },
    render(ctx: any) {
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
            <a-menu
                v-model:selectedKeys={ctx.selectedKeys2}
                v-model:openKeys={ctx.openKeys}
                mode="inline"
                style={{height: '100%', borderRight: 0}}
              >
                {/* 判断有无二级 */}
                <a-menu-item key="1">nav 1</a-menu-item>
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
        )
    }
})