import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/home'   //首页
import Chat from '../pages/Chat/chat'   //聊天
import Me from '../pages/Me/me'         //我的
import Recommend from '../pages/Recommend/recommend'  //推荐
import Search from '../pages/Search/search'           //搜索

import Box from '../pages/Home/children/Box'
import Dress from '../pages/Home/children/Dress'
import Ele from '../pages/Home/children/Ele'
import Food from '../pages/Home/children/Food'
import General from '../pages/Home/children/General'
import Hot from '../pages/Home/children/Hot/Hot'
import Man from '../pages/Home/children/Man'
import Mbaby from '../pages/Home/children/Mbaby'
import Shirt from '../pages/Home/children/Shirt'

Vue.use(Router)

export default new Router({
  // 配置一级路由
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: '主页',
      component: Home,
      // 二级路由
      children: [
        //热门模块
        { path: 'hot', component: Hot },
        //服饰模块
        { path: 'dress', component: Dress },
        //鞋包模块
        { path: 'box', component: Box },
        //母婴模块
        { path: 'mbaby', component: Mbaby },
        //百货模块
        { path: 'general', component: General },
        //食品模块
        { path: 'foot', component: Food },
        //内衣模块
        { path: 'shirt', component: Shirt },
        //男装模块
        { path: 'man', component: Man },
        //电器模块
        { path: 'ele', component: Ele },
        { path: '/home', redirect: '/home/hot' },
      ]
    },
    {
      path: '/me',
      name: '我的',
      component: Me
    },
    {
      path: '/chat',
      name: '聊天',
      component: Chat
    },
    {
      path: '/recommend',
      name: '推荐',
      component: Recommend
    },
    {
      path: '/search',
      name: '搜索',
      component: Search
    },
    { path: '/', redirect: '/home' },
    {
      // 路由重定向
      path: '*',
      redirect: '/home'
    },
  ]
})
