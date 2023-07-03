/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-27 15:51:10
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-03 17:33:31
 * @FilePath: /vueclits/src/layout/components/navbar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from "vue";
import TopRight from "./topright";
import sty from './navbar.module.scss'

export default defineComponent({
    setup() {
        const selectedKeys1 = ref<string[]>(['2']);
        return {
            selectedKeys1
        }
    },
    render(ctx: any) {
        return (
            <div class={sty.appmainContainer}>
                <div class="logo">图标</div>
                <a-menu
                    v-model:selectedKeys={ctx.selectedKeys1}
                    theme="dark"
                    mode="horizontal"
                    >
                    <a-menu-item key="1">nav 1</a-menu-item>
                    <a-menu-item key="2">nav 2</a-menu-item>
                    <a-menu-item key="3">nav 3</a-menu-item>
                </a-menu>
                <TopRight></TopRight>
            </div>
        )
    }
})