/**
 * 用户相关请求模块
 * 将请求封装
 *  好处:
 *      便于开发和维护
 *      便于重用
 *  一个原则:
 *      仅封装请求操作,不关心任何其它页务逻辑,例如操作视图,修改DOM等,也不关心交互
 *      这样做了以后就不要再在组件中出现任何直接请求了,建议全部都这样做
 */
import request from '@/utils/request'
// 1步 export const login = data => {
//   return request({
//     method: "POST",
//     url: "/app/v1_0/authorizations",
//     data: {
//       mobile: data.mobile,
//       code: data.code
//     }
//   });
// }

// 2步 export const login = data => {
//   const mobile = data.mobile
//   const code = data.code
//   return request({
//     method: "POST",
//     url: "/app/v1_0/authorizations",
//     data: {
//       mobile,
//       code
//     }
//   });
// }

// 3步
// export const login = data => {
//   const {
//     mobile,
//     code
//   } = data
//   return request({
//     method: "POST",
//     url: "/app/v1_0/authorizations",
//     data: {
//       mobile,
//       code
//     }
//   });
// }

// 4步
export const login = ({
  mobile,
  code
}) => {
  //   const {
  //     mobile,
  //     code
  //   } = data
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
