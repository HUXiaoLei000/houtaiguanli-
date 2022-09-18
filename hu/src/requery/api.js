import http from "../requery/requery.js" //  引入一次封装的axios

export const querySignin = (params) => http.post('lejuAdmin/index/login', params) //login

export const home = () => http.get('admin/sysAuth/index/getInitMenus') // home 侧边栏
