import Router from 'vue-router'

import StateList from '@/components/StateList'
import About from '@/components/About'


export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about',
            component: About
        }
    ]
})