import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

//* auth
import SignUp from '../views/Auth/SignUp.vue'
import Login from '../views/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    //* auth
    {
        path: '/dang-ky-tai-khoan-ung-vien',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/dang-nhap',
        name: 'Login',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router