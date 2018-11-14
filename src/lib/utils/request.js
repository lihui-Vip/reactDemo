import axios from 'axios';
import Cookies from 'js-cookie';
var service = axios.create();
//添加请求拦截器
service.interceptors.request.use(function (config) {
  config.headers['TOKEN'] = Cookies.get('TOKEN');
  return config
}, function (error) {
  return Promise.reject(error)
})
//添加响应拦截器
axios.interceptors.response.use(function (response) {
  /**
  * 下面的注释为通过在response里，自定义code来标示请求状态
  * 当code返回如下情况则说明权限有问题，登出并返回到登录页
  * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
  */
  console.log(response);
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       }).then(() => {
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  return response
}, function (error) {
  console.log('err' + error)
  return Promise.reject(error)
}
)
export default {
  //get请求
  get(url, param) {
    //promise示例
    //   axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params: param,
      }).then(res => {  //axios返回的是一个promise对象
        resolve(res)  //resolve在promise执行器内部
      }).catch(err => {
        console.log(err, '异常')
      })

    })
  },
  //post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data: param,
      }).then(res => {
        resolve(res)
      }).catch(err => {
        console.log(err, '异常')
      })
    })
  }
}
