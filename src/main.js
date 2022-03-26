import Vue from 'vue'
import App from './App.vue'
import router from './router'
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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
