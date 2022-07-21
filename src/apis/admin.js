import { apiHelper } from "./../utilitys/helpers"
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    createCategory(category) {
      return apiHelper.post('/admin/categories', category, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    deleteCategory(id) {
      return apiHelper.delete(`/admin/categories/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    updateCategory({ id, name }) {
      return apiHelper.put(`/admin/categories/${id}`, { name }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 取得個別餐廳資料
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 更新個別餐廳資料
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
  },
  getAdminRestaurants() {
    return apiHelper.get('/admin/restaurants', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteRestaurant(restaurantId) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}