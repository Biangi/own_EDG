const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/ajax', // 请求的接口地址,带这个地址的都会被代理到 target 配置的地址去请求
        createProxyMiddleware({
            target: 'https://i.maoyan.com',
            changeOrigin: true,
        })
    )
    // app.use(
    //     '/gateway', // 请求的接口地址,带这个地址的都会被代理到 target 配置的地址去请求
    //     createProxyMiddleware({
    //         target: 'https://m.maizuo.com',
    //         changeOrigin: true,
    //     })
    // )
}
// api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4