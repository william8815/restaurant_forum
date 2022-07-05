<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="userProfile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userProfile.name }}</h5>
          <p class="card-text">{{ userProfile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ userProfile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ userProfile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ userProfile.Followers.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ userProfile.Followings.length }}</strong> followers
              (追隨者)
            </li>
          </ul>
          <p></p>
          <form
            action="/following/1?_method=DELETE"
            method="POST"
            style="display: contents"
          >
            <button
              v-if="userProfile.isFollowed"
              @click.prevent.stop="cancelFollow"
              type="submit"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="submit"
              @click.prevent.stop="addFollow"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      userProfile: this.user,
    };
  },
  methods: {
    addFollow() {
      this.userProfile = {
        ...this.userProfile,
        isFollowed: true,
      };
    },
    cancelFollow() {
      this.userProfile = {
        ...this.userProfile,
        isFollowed: false,
      };
    },
  },
};
</script>