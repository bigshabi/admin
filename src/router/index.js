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
    }
  ]
})
