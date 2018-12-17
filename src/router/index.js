import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout'
import Homepage from '@/components/Homepage'

import WifiService from '@/components/WifiService'
import WifiServiceDetail from '@/components/WifiService/Detail'

import SimServiceList from '@/components/SimService/List'
import SimServiceDetail from '@/components/SimService/Detail'

import BlogList from '@/components/Blog/List'
import BlogDetail from '@/components/Blog/Detail'

import Order from '@/components/Order'

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
        },
        {
          path: 'chi-tiet-sim/:id',
          name: 'SimServiceDetail',
          component: SimServiceDetail
        },
        {
          path: 'chi-tiet-wifi/:id',
          name: 'WifiServiceDetail',
          component: WifiServiceDetail
        },
        {
          path: 'gio-hang',
          name: 'Order',
          component: Order
        }
      ]
    }
  ]
})
