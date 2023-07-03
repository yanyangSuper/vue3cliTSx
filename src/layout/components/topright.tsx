import { defineComponent } from "vue";
import { UserOutlined } from '@ant-design/icons-vue';
import sty from "./topright.module.scss";

export default defineComponent({
    setup() {
        return {}
    },
    render() {
        return (
            <div class={sty.container}>
                {/* <p>222</p> */}
                <a-avatar class={sty.avatar} size={40}>
                    <template v-slot={() =>'icon'}><UserOutlined /></template>
                </a-avatar>
            </div>
        )
    }
})