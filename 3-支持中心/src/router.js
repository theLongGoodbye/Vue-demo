import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Login from './components/Login.vue'
import TicketsLayout from './components/TicketsLayout.vue'
import state from "./plugins/state";
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/faq', name: 'faq', component: FAQ },
    { path: '/login', name: 'login', component: Login },
    { path: '/tickets', name: 'tickets', component: TicketsLayout, meta: { private: true } },
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

// 使用路由守卫判断是否登录并重定向
// router.beforeEach((to, from, next) => {
//     // TODO 
//     if (to.meta.private && !state.user) {
//         console.log(1111)
//         next({ name: 'login', params: { wantedRoute: to.fullPath, } })
//         return
//     }
//     next()
// })


export default router