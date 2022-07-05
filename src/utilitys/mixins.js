// 使用 moment.js 的 formNow() 功能 (npm install moment@2.24.0)
import moment from "moment";
export const fromNowFilter = {
  filters: {
    fromNow(datatime) {
      return datatime ? moment(datatime).fromNow() : '-'
    },
  },
}