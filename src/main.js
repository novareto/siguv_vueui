import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import Vuetify from 'vuetify'
//import AuthBearer from '@websanova/vue-auth/drivers/auth/bearer.js'
import AuthBearer from './lib/bearer.js'
import config from './lib/config'
import { routes } from './lib/Router'
import store from './lib/store'
import Vuex from 'vuex'


const configs = {
    API_URL: 'http://localhost:8080/app/++services++json/',
    SITE_URL: 'http://localhost:8080/app/',
}


Vue.router = routes
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(config, configs)
Vue.use(Vuetify)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = configs.API_URL
Vue.axios.defaults.headers.common["X-UVCSITE-REST"] = "JSON"


Vue.use(VueAuth,
    {
        auth: AuthBearer,
        http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
        router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
        loginData: { url: '/auth', method: 'POST', redirect: '/', fetchUser: true },
        fetchData: { url: '/user', method: 'GET', enabled: true },
        logoutData: { url: '/logout' },
        refreshData: { url: 'refresh', method: 'POST', enabled: true },
        rolesVar: 'roles',
    }
)

var store = {}
new Vue({
    store,
    el: '#app',
    router: routes,
    template: '<App/>',
    components: { App },
    http: {
        headers: {
            'X-UVCSITE-REST': 'JSON'
        }
    }
})
