/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-07-04 16:12:09
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 17:28:24
 * @FilePath: /vueclits/src/mockjs/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引用 Mock
import Mock from "mockjs";
import { users } from "./config";

interface userinfo {
  userName: string;
  password: string;
}

export const userData = Mock.mock("/data/list", "get", {
  // 属性 list 的值是一个数组，随机生成 1 到 10 个元素
  "list|1-10": [
    {
      // 随机生成1-10个★
      "string|1-10": "★",
      // 随机生成1-100之间的任意整数
      "number|1-100": 1,
      // 生成一个浮点数，整数部分大于等于 1、小于等于 100，小数部分保留 1 到 10 位。
      "floatNumber|1-100.1-10": 1,
      // 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
      "boolean|1": true,
      // 随机生成一个布尔值，值为 false 的概率是 2 / (2 + 5)，值为 true 的概率是 5 / (2 + 5)。
      "bool|2-5": false,
      // 从属性值 object 中随机选取 2-4 个属性
      "object|2-4": {
        "310000": "上海市",
        "320000": "江苏省",
        "330000": "浙江省",
        "340000": "安徽省",
      },
      // 通过重复属性值 array 生成一个新数组，重复次数为 2
      "array|2": ["AMD", "CMD", "UMD"],
      // 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
      foo: "哇哈哈哈哈",
      name: function () {
        return this.foo;
      },
      // 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
      regexp: /\d{5,10}/,
    },
  ],
  code: 200,
  message: "ok",
});
export const logindata = Mock.mock("/user/login", "post", (params: any) => {
  console.log("*****request*****", params);
  const info: userinfo = JSON.parse(params.body);
  let flag: boolean;
  if (info) {
    flag = users.some((item) => {
      return item.userName === info.userName && item.password === info.password;
    });
    if (flag) {
      return {
        token: "adasdasda",
        code: 200,
        message: "ok",
      };
    }
  }
  return {
    code: 50001,
    message: "error user",
  };
});
// 用户信息
export const userdata = Mock.mock("/user/userInfo", "get", () => {
  return {
    data: {
      avator: 'https://images.weserv.nl/?url=https://yn-oss.oss-ap-southeast-5.aliyuncs.com/dtc/uploaddtc/upload/278335832391681.png',
      roles: ['admin'],
      name: 'yangyang',
      nickname: 'jhon',
      email: '1710001012@qq.com',
      address: '湖北'
    },
    code: 200,
    message: "ok",
  }
})
