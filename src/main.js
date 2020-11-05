
import Vue from 'vue'
import App from './App'
// import Mint from "mint-ui";
// import 'mint-ui/lib/style.css'

import less from 'less'

import lytab from 'ly-tab'
import router from './router'
//vuex状态管理
import store from './store/index'

// Vue.use(Mint)
Vue.use(less)
Vue.use(lytab)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
