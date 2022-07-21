<!-- 最新動態 -->
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewRestaurant :restaurant_list="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewComment :comment_list="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewRestaurant from "../components/NewestRestaurants.vue";
import NewComment from "../components/NewComments.vue";
// api
// STEP 1：透過 import 匯入剛剛撰寫好用來呼叫 API 的方法
import restaurantsAPI from "./../apis/restaurants";
// Toast
import { Toast } from "./../utilitys/helpers";

export default {
  components: {
    NavTabs,
    NewRestaurant,
    NewComment,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getRestaurantsFeeds();
        console.log(response);
        const { restaurants, comments } = response.data;
        this.restaurants = restaurants;
        this.comments = comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>