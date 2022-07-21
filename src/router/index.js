import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  // 封面
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  // 登入介面
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("../views/SignUp.vue")
  },
  // 餐廳介面資訊
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: "/restaurants/:id/dashboard",
    name: 'dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  // 用戶資訊
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id',
    name: 'user-profile',
    component: () => import("../views/User.vue")
  },
  // 用戶編輯
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue')
  },
  // 管理者 : 餐廳列表
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue')
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue')
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue')
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },
  // 管理者: 餐廳類別
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  // 錯誤頁面
  {
    path: '*',
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
