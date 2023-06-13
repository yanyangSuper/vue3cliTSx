/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 17:53:08
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-06-13 13:39:54
 * @FilePath: /vueclits/src/views/Login/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from "vue";
// import './app.scss'
import sty from "./login.module.scss";

export default defineComponent({
  setup() {
    return () => (
      <div class={sty.spel}>
        <div class={sty.formBox}>
          <div>
            <p>账号：</p>
            <p></p>
          </div>
          <div>
            <p>密码：</p>
            <p></p>
          </div>
        </div>
        <a-space wrap>
          <a-button type="primary" onClick={() => {
            console.log(11)
          }}>Primary Button</a-button>
          <a-button>Default Button</a-button>
          <a-button type="dashed">Dashed Button</a-button>
          <a-button type="text">Text Button</a-button>
          <a-button type="link">Link Button</a-button>
        </a-space>
      </div>
    );
  },
});
