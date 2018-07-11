import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/video/main', '^pages/index/main', 'pages/partition/main', 'pages/dynamic/main', 'pages/anime/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#98445C',
      navigationBarTitleText: 'Bilibili',
      navigationBarTextStyle: '#000'
    },
    tabBar: {
      color: "#A1A1A1",
      selectedColor: "#F97497",
      backgroundColor: "#fff",
      borderStyle: "#fff",
      list: [
        {
          pagePath: "pages/index/main",
          iconPath: "static/images/10.png",
          selectedIconPath: "static/images/11.png",
          color:"white",
          text: "首页"
        },
        {
          pagePath: "pages/partition/main",
          iconPath: "static/images/20.png",
          selectedIconPath: "static/images/21.png",
          text: "分区"
        },
        {
          pagePath: "pages/dynamic/main",
          iconPath: "static/images/30.png",
          selectedIconPath: "static/images/31.png",
          text: "动态"
        }
      ]
    }
  }
}
