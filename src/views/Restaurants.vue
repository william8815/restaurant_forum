<!-- 餐廳列表-->
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantNavPills :categories="categories" />
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial_restaurant="restaurant"
        />
      </div>
      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
      />
      <div v-if="restaurants.length < 1">此類別目前無餐廳資料</div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantPagination from "../components/RestaurantsPagination.vue";
import Spinner from "./../components/Spinner.vue";
// api
// STEP 1：透過 import 匯入剛剛撰寫好用來呼叫 API 的方法
import restaurantsAPI from "./../apis/restaurants";
// Toast
import { Toast } from "./../utilitys/helpers";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantPagination,
    Spinner,
  },
  data() {
    // 這裡的 -1 代表現在還沒拿到資料，有些人也會寫 undefined 或 0 來表達這種狀況
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: false,
    };
  },
  created() {
    // 產生新頁面時，資料不再是固定的預設
    const { page = "", categoryId = "" } = this.$route.query;
    // STEP 3：在 created 的時候呼叫 fetchRestaurants 方法
    // 這裡會向伺服器請求第一頁且不分餐廳類別的資料
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId,
    });
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate(to, from, next) {
    // console.log('to', to)
    // console.log('from', from)
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  methods: {
    // STEP 2：將 fetchRestaurants 改成 async...await 的語法
    // 並且可以帶入參數 page 與 categoryId
    // 呼叫 API 後取得 response
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true;
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
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