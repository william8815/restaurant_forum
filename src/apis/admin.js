import { apiHelper } from "./../utilitys/helpers"
// const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories',)
    },
    createCategory(category) {
      return apiHelper.post('/admin/categories', category,)
    },
    deleteCategory(id) {
      return apiHelper.delete(`/admin/categories/${id}`,)
    },
    updateCategory({ id, name }) {
      return apiHelper.put(`/admin/categories/${id}`, { name },)
    }
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData,)
    },
    // 取得個別餐廳資料
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`,)
    },
    // 更新個別餐廳資料
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData,)
    },
  },
  getAdminRestaurants() {
    return apiHelper.get('/admin/restaurants',)
  },
  deleteRestaurant(restaurantId) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`,)
  },
  // 管理使用者
  getAdminUsers() {
    return apiHelper.get(`/admin/users`,)
  },
  updateAdminUsers(id, { isAdmin }) {
    return apiHelper.put(`/admin/users/${id}`, { isAdmin },)
  }
}