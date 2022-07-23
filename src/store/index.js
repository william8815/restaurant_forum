// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: 1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
    token: ''
  },
  getters: {
  },
  // 藉由 commit 呼叫
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.token = ''
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  // 藉由 dispatch 呼叫
  actions: {
    // 透過 fetchCurrentUser 來存取使用者登入資料
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        return true
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
        return false
      }
    }
  },
  modules: {
  }
})
