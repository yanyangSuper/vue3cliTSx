/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:36:45
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-13 15:13:07
 * @FilePath: /vueclits/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from 'vue'
import './app.scss'

// ! 一种setup直接返回渲染函数，二、渲染函数h返回
export default defineComponent({
    
    setup() {
        let np = 0;
        const num = ref(0);
        const doAnthing = () =>{
            // console.log(22)
            ++np
            ++num.value
            console.log(np)
        }
        return () => [
            <router-view>
            </router-view>,
            // <div>hello world</div>,
            // // <span>{np}</span>,
            // <p>{num.value}</p>,
            // <button onClick={doAnthing}>Click Me</button>
        ] //写一个 hello world祭天
    }
    // data() {
    //     return {
    //         doup: 'op'
    //     }
    // },
    // props: {
    //     msg: {
    //         type: String,
    //         default: '你好'
    //     }
    // },
    // render() {
    //     return [
    //         <div>hello world</div>,
    //         // <p>{news}</p>,
    //         <p>{this.doup}</p>
    //     ]
    // }
})
