import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout'
import Homepage from '@/components/Homepage'
import WifiService from '@/components/WifiService'
import SimServiceList from '@/components/SimService/List'
import BlogList from '@/components/Blog/List'
import BlogDetail from '@/components/Blog/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/trang-chu',
      children: [
        {
          path: 'trang-chu',
          name: 'Homepage',
          component: Homepage
        },
        {
          path: 'wifi-quoc-te',
          name: 'WifiService',
          component: WifiService
        },
        {
          path: 'sim-du-lich',
          name: 'SimServiceList',
          component: SimServiceList
        },
        {
          path: 'danh-sach-blog',
          name: 'BlogList',
          component: BlogList
        },
        {
          path: 'chi-tiet-blog',
          name: 'BlogDetail',
          component: BlogDetail
        }
      ]
    }
  ]
})
