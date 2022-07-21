import { apiHelper } from './../utilitys/helpers'
const getToken = () => localStorage.getItem('token')
export default {
  getRestaurants({ page, categoryId }) {
    // 利用 URLSearchParams 物件來產生網址後面的 query String
    const searchParams = new URLSearchParams({ page, categoryId })
    // 回傳 token 來請求成功，使用 JWT 規範 前面要加 Bearer
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurantsFeeds() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 人氣餐廳
  getRestaurantsTop() {
    return apiHelper.get(`/restaurants/top`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 餐廳資訊(dashboard)
  getDashBoard(restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}