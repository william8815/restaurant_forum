<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard -->
      <UserProfileCard
        :user="user"
        :initial_isFollowed="isFollowed"
        :iscurrentUser="currentUser.id === user.id"
      />
      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :user_followings="user.Followings" />
          <br />
          <UserFollowersCard :user_followers="user.Followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :user_comment="user.Comments" />
          <br />
          <UserFavoritedRestaurantsCard
            :user_FavoritedRestaurants="user.FavoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import userAPI from "./../apis/users";
import { Toast } from "./../utilitys/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.get({ userId });
        console.log(this.user.id, this.currentUser.id);
        console.log(data);
        const { profile, isFollowed } = data;
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;
        this.user = {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        };
        this.isFollowed = isFollowed;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "請求使用者資料失敗",
        });
      }
    },
  },
};
</script>