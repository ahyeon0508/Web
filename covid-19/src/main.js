import Vue from 'vue'
import app from './covid-19.vue'
import { BootstrapVue, IconsPlugin, CarouselPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CarouselPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')
