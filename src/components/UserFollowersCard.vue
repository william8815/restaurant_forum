<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ user_followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'user-profile', params: { id: follower.id } }"
        v-for="follower in user_followers"
        :key="follower.id"
      >
        <img
          :src="follower.image | emptyImage"
          class="avatar"
          width="60"
          height="60"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import { emptyImageFilter } from "./../utilitys/mixins";
export default {
  mixins: [emptyImageFilter],
  props: {
    user_followers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      followers: this.user_followers,
    };
  },
};
</script>