import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routerName: '监控信息'
    },
    mutations: {
        setRouteName(state, name) {
            console.log(arguments)
            state.routerName = name
        },
    }
})