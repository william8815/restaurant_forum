<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ user_FavoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'restaurant', params: { id: restaurant.id } }"
        v-for="restaurant in user_FavoritedRestaurants"
        :key="restaurant.id"
      >
        <img :src="restaurant.image" class="avatar" width="60" height="60" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user_FavoritedRestaurants: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      favoriteRestaurant: this.user_FavoritedRestaurants,
    };
  },
};
</script>