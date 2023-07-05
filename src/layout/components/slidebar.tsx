/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-13 14:46:58
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 10:10:30
 * @FilePath: /vueclits/src/layout/components/slidebar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref, watch } from "vue";

/**
 * 侧边栏
 */
export default defineComponent({
    setup() {
        const selectedKeys2 = ref<string[]>(['00']);
        const meuns = ref([
            {
                title: '系统设置',
                children: [
                    {
                        title: '文件管理',
                        children: []
                    }
                ]
            },
            {
                title: '权限管理',
                children: []
            }
        ])
        return {
            selectedKeys2,
            meuns
        }
    },
    render(ctx: any) {
        return (
            <a-menu
                v-model:selectedKeys={ctx.selectedKeys2}
                v-model:openKeys={ctx.openKeys}
                mode="inline"
                style={{height: '100%', borderRight: 0}}
              >
                {/* 判断有无二级 */}
                {ctx.meuns.map((item: any,index: number) => {
                    return (
                        item.children?.length ? (
                        <a-sub-menu key={index} title={item.title}>
                            {item.children.map((nape: any, Tindex: number)=> {
                                return (
                                    <a-menu-item key={`${index}${Tindex}`}>{nape.title}</a-menu-item>
                                )
                            })}
                        </a-sub-menu> 
                        )
                        : (
                        <a-menu-item key={index}>{item.title}</a-menu-item>
                        )
                    )
                })}
              </a-menu>
        )
    }
})