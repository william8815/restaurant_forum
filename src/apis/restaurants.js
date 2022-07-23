import { apiHelper } from './../utilitys/helpers'
export default {
  getRestaurants({ page, categoryId }) {
    // 利用 URLSearchParams 物件來產生網址後面的 query String
    const searchParams = new URLSearchParams({ page, categoryId })
    // 回傳 token 來請求成功，使用 JWT 規範 前面要加 Bearer
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getRestaurantsFeeds() {
    return apiHelper.get(`/restaurants/feeds`)
  },
  // 人氣餐廳
  getRestaurantsTop() {
    return apiHelper.get(`/restaurants/top`,)
  },
  // 餐廳資訊(dashboard)
  getDashBoard(restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`,)
  },
  // 餐廳個別資料
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`,)
  },
}