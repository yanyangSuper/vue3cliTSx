/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-29 14:03:49
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 15:06:33
 * @FilePath: /vueclits/src/layout/components/appmain.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const key = 1
        const cachedViews = '2'
        return {
            key,
            cachedViews
        }
    },
    render(ctx: any) {
        return (
            <section class="app-main">
                  <transition name="fade-transform" mode="out-in">
                    <keep-alive include={ctx.cachedViews}>
                      <router-view key={ctx.key}/>
                    </keep-alive>
                  </transition>
            </section>
        )
    }
})