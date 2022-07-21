import axios from 'axios'
import Swal from 'sweetalert2'

// 使用 Axios 函式庫裡提供的 axios.create() 客製化 Axios
const baseURL = 'http://localhost:3000/api'
export const apiHelper = axios.create({
  baseURL
})
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})