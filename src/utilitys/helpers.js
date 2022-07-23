import axios from 'axios'
import Swal from 'sweetalert2'

// 使用 Axios 函式庫裡提供的 axios.create() 客製化 Axios
const baseURL = 'http://localhost:3000/api'
const axiosInstance = axios.create({
  baseURL
})
// 透過 interceptors 屬性可以讓使用者有 tokem 的情況下，把所有發出去的請求都添加上 Authorization 的標頭
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      // 設定中 headers 裡新增 Authorization 屬性跟值
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)
export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})