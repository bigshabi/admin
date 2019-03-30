/* eslint-disable import/first */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Lay from '@/views/layout/Lay'
import table from '@/views/table/table'

export default new Router({
  routes: [
    {
      path: '/table',
      component: Lay,
      redirect: '/table/table',
      name: 'Table',
      children: [
        {
          path: 'table',
          component: table,
          name: 'table',
          meta: { title: 'table' }
        }
      ]
    }
  ]
})
