/* eslint-disable import/first */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
import table from '@/views/table/table'

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/table',
      component: Layout,
      redirect: '/table',
      name: 'Table',
      children: [
        {
          path: 'table',
          component: table,
          name: 'table',
          meta: { title: 'table' }
        }, {
          path: 'table1',
          component: () => import('@/views/table/table1'),
          name: 'table',
          meta: { title: 'table' }
        }
      ]
    },
    {
      path: '/form',
      component: Layout,
      name: 'Form',
      children: [
        {
          path: 'index',
          component: () => import('@/views/form/index')
        }
      ]
    }// ,
    // {
    //   path: '/users',
    //   component: Layout,
    //   name: 'Name',
    //   children: [
    //     {
    //       path: 'lists',
    //       component: () => import('@/view/users/lists')
    //     }
    //   ]
    // }
  ]
})
