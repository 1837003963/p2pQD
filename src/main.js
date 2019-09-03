// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui' //新添加1
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

// process.env.MOCK && require('@/mock')

import axios from '@/api/http'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

window.vm=new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  data: function() {
    return {
      Bus: new Vue()
    }
  }
})
