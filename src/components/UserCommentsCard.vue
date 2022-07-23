<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ user_comment.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="comment in user_comment"
        :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.RestaurantId } }"
      >
        <img
          :src="comment.Restaurant.image"
          class="avatar"
          width="60"
          height="60"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user_comment: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      comments: this.user_comment,
    };
  },
};
</script>