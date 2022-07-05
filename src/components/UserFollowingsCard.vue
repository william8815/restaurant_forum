<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'user-profile', params: { id: following.id } }"
        v-for="following in followings"
        :key="following.id"
      >
        <img :src="following.image" class="avatar" width="60" height="60" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user_followings: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      followings: this.user_followings,
    };
  },
};
</script>