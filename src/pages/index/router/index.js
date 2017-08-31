import Vue from 'vue';
import Router from 'vue-router';
/* layout */
import Layout from '../views/Layout/Layout.vue';
/* login */
import Login from '../views/Login/index.vue';
// const authRedirect = _import('Login/authredirect');
/* dashboard */
import Bashboard from '../views/Bashboard/index.vue';
/* swiper manager */
import {AddSwiper, SwiperList} from '../views/SwiperManager';
/* client manager */
import {EditClient, ClientList} from '../views/ClientManager';
/* good manager */
import {AddGood, GoodList} from '../views/GoodManager';
/* category manager */
import CategoryManager from '../views/CategoryManager/index.vue';
/* order manager */
import {OrderList, EditOrder} from '../views/OrderManager';
/* error page */
import Err404 from '../views/Error/404.vue';
import Err401 from '../views/Error/401.vue';
import demo from '../views/demo/index.vue';

Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if hidden:true will not show in the sidebar
 * redirect : if redirect:noredirect will not redirct in the levelbar
 * noDropdown : if noDropdown:true will not has submenu
 * meta : { role: ['admin'] }  will control the page role
 **/

export const constantRouterMap = [
  {path: '/login', component: Login, hidden: true, meta: {keepAlive: false}},
  // {path: '/authredirect', component: authRedirect, hidden: true},
  {path: '/404', component: Err404, hidden: true, meta: {keepAlive: true}},
  {path: '/401', component: Err401, hidden: true, meta: {keepAlive: true}},
  {path: '/', redirect: '/dashboard', hidden: true, meta: {keepAlive: false}}
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    name: '首页',
    icon: 'homepage_fill',
    noDropdown: true,
    children: [{path: 'index', component: Bashboard, name: '首页', meta: {keepAlive: false}}]
  },
  {
    path: '/web',
    component: Layout,
    redirect: '/web/swiper-manager',
    name: '官网设置',
    icon: 'activity_fill',
    children: [
      {path: 'swiper-manager', component: SwiperList, name: '轮播图设置', meta: {keepAlive: true}},
      {path: 'add-swiper', component: AddSwiper, name: '新增轮播图', hidden: true, meta: {keepAlive: false}}
    ]
  },
  {
    path: '/client',
    component: Layout,
    redirect: '/client-manager',
    name: '客户管理',
    icon: 'order_fill',
    noDropdown: true,
    children: [
      {path: 'client-manager', component: ClientList, name: '客户管理', meta: {keepAlive: true}},
      {path: 'edit-client', component: EditClient, name: '编辑客户', hidden: true, meta: {keepAlive: false}}
    ]
  },
  {
    path: '/good',
    component: Layout,
    redirect: '/good/good-manager',
    name: '商品管理',
    icon: 'workbench_fill',
    children: [
      {path: 'good-manager', component: GoodList, name: '商品列表', meta: {keepAlive: true}},
      {path: 'add-good', component: AddGood, name: '新增商品', hidden: true, meta: {keepAlive: false}},
      {path: 'category-manager', component: CategoryManager, name: '商品分类设置', meta: {keepAlive: false}}
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/order-manager',
    name: '订单管理',
    icon: 'order_fill',
    children: [
      {path: 'order-manager', component: OrderList, name: '订单列表', meta: {keepAlive: true}},
      {path: 'edit-order', component: EditOrder, name: '订单详情', hidden: true, meta: {keepAlive: false}}
    ]
  },
  {
    path: '/demo',
    component: Layout,
    redirect: '/demo/index',
    name: '示例',
    icon: 'activity_fill',
    noDropdown: true,
    children: [{path: 'index', component: demo, name: '示例', meta: {keepAlive: false}}]
  },
  {path: '*', redirect: '/404', hidden: true}
];
