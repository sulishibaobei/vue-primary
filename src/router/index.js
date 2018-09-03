import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstWorld from '@/components/FirstWorld'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/xuanfu',
        name: 'FirstWorld',
        component: FirstWorld
    }]
})