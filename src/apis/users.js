import { apiHelper } from "../utilitys/helpers"
const getToken = () => localStorage.getItem('token')
export default {
  // 新增最愛 post http method => 參數設定(url, data, [config])
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 刪除最愛
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 喜歡
  addLike({ restaurantId }) {
    return apiHelper.post(`like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 不喜歡
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 美食達人
  getTopUsers() {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 追蹤
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取消追蹤
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}