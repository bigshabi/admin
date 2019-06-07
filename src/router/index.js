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
        }, {
          path: 'index',
          name: 'tmp',
          component: () => import('@/views/table/index')
        }, {
          path: 'lists',
          name: 'lists',
          component: () => import('@/views/table/lists')
        }, {
          path: 'form',
          name: 'form',
          component: () => import('@/views/table/form')
        }, {
          path: '*',
          name: 'index',
          component: () => import('@/views/table/tmp')
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
    },
    {
      path: '/users',
      component: Layout,
      name: 'Users',
      children: [
        {
          path: 'index',
          component: () => import('@/views/users/index')
        }
      ]
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/tables/index')
        }
      ]
    }
    // ,
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
