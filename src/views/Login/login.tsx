/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 17:53:08
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-04 17:55:57
 * @FilePath: /vueclits/src/views/Login/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, reactive } from "vue";
import { login } from '../../api/user'
// import './app.scss'
import sty from "./login.module.scss";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter()
    console.log(router)
    const loginForm = reactive({
      userName: '',
      password: ''
    })
    const submit = () => {
      console.log(loginForm)
      login({
        userName: loginForm.userName,
        password: loginForm.password
      }).then((res: any) => {
        console.log(res)
        if(res.code === 200) {
          console.log(99)
          router.push({
            path: '/about'
          })
        }
      })

    }
    return () => (
        <div class={sty.loginbox}>
          <h2>Login</h2>
          <form>
            <div class={sty.userbox}>
              <input v-model={loginForm.userName} type="text" name="" required/>
              <label>Username</label>
            </div>
            <div class={sty.userbox}>
              <input v-model={loginForm.password} type="password" name="" required/>
              <label>Password</label>
            </div>
            <a href="javascript:void(0);" onClick={submit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
    );
  },
});
