import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element-ui'
import './index.css'
import axios from './axios'

import VueVideoPlayer from 'vue-video-player'

// require videojs style

// eslint-disable-next-line no-undef
require('video.js/dist/video-js.css')
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

Vue.prototype.$http = axios
// Vue.forceUpdate()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
