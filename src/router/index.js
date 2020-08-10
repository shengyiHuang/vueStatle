import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: ()=> import('../view/News.vue')
        },
        {
            path: '/details',
            component: ()=> import('../view/Details.vue')
        },
        {
            path: '/add',
            component: ()=> import('../view/Add.vue')
        },
    ]
})

const router = createRouter()

export default router