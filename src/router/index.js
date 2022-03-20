import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import Test from '@/views/Test.vue';
import Settings from "@/views/Settings";
import Control from "@/views/Control";


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/test', component: Test },
    // eslint-disable-next-line no-undef
    { path: '/settings', component:Settings},
    // eslint-disable-next-line no-undef
    { path: '/control', component: Control }
  ]
})

export default router
