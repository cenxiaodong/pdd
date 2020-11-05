import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
    let promise
    return new Promise((resolve, reject) => {
        //  判断请求方式
        if ('GET' === type) {
            // 1.如果是get则进行字符串拼接
            let paramsStr = ''
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&'
            })
            // 2.过滤最后的&
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            //3.完整的路径
            url += '?' + paramsStr
            //4.发送get请求
            promise = axios.get(url)
        }else if('POSR' === type){
            promise =  axios.post(url,params)
        }
        //返回请求的结果
        promise.then((result) => {
            resolve(result.data)
        }).catch((err) => {
            reject(err)
        });
    })
}