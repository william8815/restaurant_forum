import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from './../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }

  next()
}

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
    redirect: '/admin/restaurants',
    beforeEnter: authorizeIsAdmin

  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue'),
    beforeEnter: authorizeIsAdmin
  },
  // 管理者: 餐廳類別
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
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

// 可以對網址變化作非同步
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  let isAuthenticated = store.state.isAuthenticated
  const tokenInStore = store.state.token
  // 如果有 token 的話才驗證
  if (token && token !== tokenInStore) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser') // 使用 dispatch 呼叫 Vuex 內的 actions
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']

  // 如果 token 無效則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    // console.log("route in signin")
    next('/signin')
    return
  }

  // 如果 token 有效則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    // console.log("route in restaurants")
    next('/restaurants')
    return
  }
  next()
})

export default router
