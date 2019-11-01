import Vue from 'vue'
import App from './App'

// 检察内容
import checkContent from './pages/checkContent/home.vue'
Vue.component('checkContent',checkContent)
// 检察信息
import checkInfo from './pages/checkInfo/home.vue'
Vue.component('checkInfo',checkInfo)
// 法律法规库
import lawLab from './pages/lawLab/home.vue'
Vue.component('lawLab',lawLab)
// 登录界面
import login from './pages/login/login.vue'
Vue.component('login',login)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



