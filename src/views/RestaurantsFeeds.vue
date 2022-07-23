<!-- 最新動態 -->
<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewRestaurant from "../components/NewestRestaurants.vue";
import NewComment from "../components/NewComments.vue";
import Spinner from "./../components/Spinner.vue";
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
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurantsFeeds();
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        const { restaurants, comments } = data;
        this.restaurants = restaurants;
        this.comments = comments.filter((comment) => comment.Restaurant);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>