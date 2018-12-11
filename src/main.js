// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/vi'
import moment from 'moment'
import {mapGetters} from 'vuex'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from './plugins/axios'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  locale
})

moment.locale('vi')
Vue.use(axios)

Vue.mixin({
  computed: {
    ...mapGetters('Common', ['common_data'])
  }
})

/* eslint-disable no-new */
const createApp = () => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    created () {
      this.$services.init_context(this)
    },
    template: '<App/>'
  })
}

createApp()
