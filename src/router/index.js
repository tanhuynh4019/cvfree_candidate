import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

//* auth
import SignUp from '../views/Auth/SignUp.vue'
import Login from '../views/Auth/Login.vue'
import MyAccount from '../views/Auth/MyAccout.vue'
import ChangePassword from '../views/Auth/ChangePassword.vue'

//* job
import Job from '../views/jobs/Job.vue'
import ReviewJob from '../views/jobs/ReviewJob.vue'

//* Error
import Error404 from '../views/Errors/Error404.vue'

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
        path: '/tai-khoan/tai-khoan-cua-toi',
        name: 'MyAccount',
        component: MyAccount
    },
    {
        path: '/tai-khoan/doi-mat-khau',
        name: 'ChangePassword',
        component: ChangePassword
    },
    //* Job
    {
        path: '/tim-viec-lam/tat-ca-viec-lam',
        name: 'Job',
        component: Job
    },
    {
        path: '/tim-viec-lam/review-viec-lam/:slug',
        name: 'ReviewJob',
        component: ReviewJob
    },
    //* Error
    {
        path: '/khong-ton-tai-404',
        name: 'Error404',
        component: Error404
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