module.exports = {
  proxy: {
        '/eleme': {    //将www.exaple.com印射为/apis
            target: 'https://h5.ele.me',  // 接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/eleme': ''   //需要rewrite的,
            }              
        }
  }
}