<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.Followers.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.Followings.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <template v-if="iscurrentUser">
            <router-link
              :to="{ name: 'user-edit', params: { id: user.id } }"
              class="btn btn-primary"
            >
              Edit
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              @click.prevent.stop="cancelFollow(user.id)"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              @click.prevent.stop="addFollow(user.id)"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { emptyImageFilter } from "./../utilitys/mixins";
import userAPI from "./../apis/users";
import { Toast } from "./../utilitys/helpers";
export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      required: true,
      type: Object,
    },
    initial_isFollowed: {
      required: true,
      type: Boolean,
    },
    iscurrentUser: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initial_isFollowed,
    };
  },
  methods: {
    async addFollow(userId) {
      try {
        const { data } = await userAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.isFollowed = true;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "追蹤失敗",
        });
      }
    },
    async cancelFollow(userId) {
      try {
        const { data } = await userAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.isFollowed = false;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "追蹤失敗",
        });
      }
    },
  },
  watch: {
    // 父元件非同步渲染，會最後才將資料傳遞子元件
    initial_isFollowed(newVal) {
      this.isFollowed = newVal;
    },
  },
};
</script>