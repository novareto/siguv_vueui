import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductFolder from '../components/ProductFolder.vue'
import LandingPage from '../components/LandingPage.vue'
import AddBuddy from '../components/AddBuddy.vue'
import Login from '../components/Login.vue'
import MeineDaten from '../components/MeineDaten.vue'


const routes = new VueRouter({
    history: false,
    root: '/',
    routes: [
        { path: '/', name: 'home', component: LandingPage, meta: { auth: true } },
        { path: '/login', name: 'login', component: Login, meta: { auth: false } },
        { path: '/meinedaten', name: 'meinedaten', component: MeineDaten, meta: { auth: true } },
        { path: '/addBuddy', component: AddBuddy, meta: { auth: true } },
        { path: '/dokumente/:object_type', component: ProductFolder, meta: { auth: true } },
    ]
})

export { routes }
