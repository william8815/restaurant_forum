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
  // 驗證登入者所需 api 
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`,)
  },
  // 完整的 user profile api
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`,)
  },
  // 更新使用者資訊
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData,)
  },
  // 美食達人
  getTopUsers() {
    return apiHelper.get('/users/top',)
  },
  // 追蹤
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null,)
  },
  // 取消追蹤
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`,)
  },
  // 新增評論
  addComments({ commentId, restaurantId, text }) {
    return apiHelper.post(`/comments`, { commentId, restaurantId, text },)
  },
  // 刪除評論
  deleteComments(id) {
    return apiHelper.delete(`/comments/${id}`,)
  },

}