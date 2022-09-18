import axios from "axios" //  引入axios

let http = axios.create({ //  创建一个axios实例
    baseURL: "http://leju.bufan.cloud/", // 基准地址
    timeOut: 1000 // 超时时间
    // header: {}    // 设置请求头
})

// 请求拦截
http.interceptors.request.use(config => { //  interceptors.request.use固定写法
    console.log(config, "config");
    // 设置loading请求动画
    // 在发送请求之前做些什么，请求头
    config.headers.token = sessionStorage.getItem("token");
    // config.headers.token = 'abcdefg'    // 令牌token是自己写的名称设置请求头， 'abcdefg' 值
    return config //  return出去
})

// 响应拦截
http.interceptors.response.use(res => {
    console.log(res, "res");
    // 结束加载动画
    // 错误状态码的处理
    // 对返回参数的格式化
    return res.data.data //  return出去
})

export default http // 导出 