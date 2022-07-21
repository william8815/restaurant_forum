<!-- 人氣餐聽 -->
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurantTop"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'dashboard', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              @click.prevent.stop="removeFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.prevent.stop="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utilitys/helpers";
import usersAPI from "./../apis/users";

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurantTop: [],
    };
  },
  created() {
    this.fetchRestaurantTop();
  },
  methods: {
    async fetchRestaurantTop() {
      try {
        const { data } = await restaurantsAPI.getRestaurantsTop();
        // console.log(data.restaurants);
        this.restaurantTop = data.restaurants.map((restaurant) => ({
          id: restaurant.id,
          name: restaurant.name,
          tel: restaurant.tel,
          address: restaurant.address,
          opening_hours: restaurant.opening_hours,
          description: restaurant.description,
          image: restaurant.image,
          viewCounts: restaurant.viewCounts,
          createdAt: restaurant.createdAt,
          updatedAt: restaurant.updatedAt,
          CategoryId: restaurant.CategoryId,
          FavoritedUsers: restaurant.FavoritedUsers,
          isFavorited: restaurant.isFavorited,
          FavoriteCount: restaurant.FavoriteCount,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "人氣餐廳請求失敗，請再嘗試一次",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurantTop = this.restaurantTop.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: true,
            };
          }
          return restaurant;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增最愛",
        });
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurantTop = this.restaurantTop.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: false,
            };
          }
          return restaurant;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法移除最愛",
        });
      }
    },
  },
};
</script>