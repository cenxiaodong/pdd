import ajax from './axios'

// 基础路径
const BASE_URL = 'http://127.0.0.1:3000';
// 设置请求方法
export const getHomeCasual = () =>ajax(BASE_URL + '/api/homecasual')