import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import Test from '@/views/Test.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/test', component: Test },
    { path: '/settings', component: resolve => require(['@/views/Settings.vue'], resolve) },
    { path: '/control', component: resolve => require(['@/views/Control.vue'], resolve) }
  ]
})

export default router
