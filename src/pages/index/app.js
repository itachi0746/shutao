import Vue from 'vue'
import App from './app.vue'
import '@/utils/rem.js'
import '@/style/reset.scss'
import '@/style/common.css'
import { Row, Col } from 'element-ui'

Vue.use(Row)
Vue.use(Col)
new Vue({
    el: '#app',
    render: h => h(App)
})
