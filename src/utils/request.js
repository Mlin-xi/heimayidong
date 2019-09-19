// 请求模块:封装了axios
import axios from 'axios'

// 引入 处理大数字的
import JSONbig from 'json-bigint'

// 以前这样写
// axios.default.baseURL(只能配一个地址)
// 现在这样写(可以配很多个地址)

// const request1 = axios.create({
//     baseURL: 'http://ttapi.research.itcast.cn'
//   })
//   export default request1
// const request2 = axios.create({
//     baseURL: 'http://ttapi.research.itcast.cn'
//   })
//   export default request2
// axios.create的作用是克隆一个axios实例,它的作用和axios是一样的
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 处理处理超出安全数字范围
request.defaults.transformResponse = [function (data) {
  // 假如data不是标准的JSON 格式的字符串,就会导致JSONbig.parse(data)转换出错
  // return data ? JSONbig.parse(data): {}
  //   所以推荐使用try和catch
  try {
    return JSONbig.parse(data)
  } catch (err) {
    // 无法转换的数据直接原样返回
    return data
  }
}]

// 还可以用箭头函数
// request.defaults.transformResponse = [data => {
//   // 假如data不是标准的JSON 格式的字符串,就会导致JSONbig.parse(data)转换出错
//   // return data ? JSONbig.parse(data): {}
//   try {
//     return JSONbig.parse(data)
//   } catch (err) {
//     // 无法转换的数据直接原样返回
//     return data
//   }
//   //   所以推荐使用try和catch

// }]

export default request
