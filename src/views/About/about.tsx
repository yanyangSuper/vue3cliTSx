/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:25:09
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-13 15:06:27
 * @FilePath: /vueclits/src/views/AboutView.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// <!-- <template>
//   <div class="about">
//     <h1>This is an about page</h1>
//   </div>

import { defineComponent } from "vue";
import sty from './about.module.scss'
import layout from "@/layout";

// </template> -->
export default defineComponent({
    components: {layout},
    render() {
        return (
            // <div class={sty.spel}>
            //     about
            // </div>
            <layout></layout>
        )
    }
})
