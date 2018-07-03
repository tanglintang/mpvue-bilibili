import Vue from 'vue'
var Fly = require("flyio/dist/npm/wx.js") //wx.js为flyio的微信小程序入口文件
var fly = new Fly() //创建fly实例
//添加拦截器
fly.interceptors.request.use((config) => {
    //给所有请求添加自定义header
    config.headers["X-Tag"] = "flyio"
    wx.showLoading({
        title: '加载中',
    })
    return config
})
//配置请求基地址
// Vue.prototype.$http = fly
fly.config.baseURL = "https://www.easy-mock.com/mock/5b36ef7e1c549150fe149645"
// fly.config.timeout = 5000

export default fly