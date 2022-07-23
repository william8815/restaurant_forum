<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial_restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant_comment="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant_id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";
import restaurantsAPI from "./../apis/restaurants";
import userAPI from "./../apis/users";
import { Toast } from "./../utilitys/helpers";
import { mapState } from "vuex";

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        // console.log("fetchRestaurant id: ", restaurantId);
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours: opening_hours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };

        this.restaurantComments = Comments;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    async afterDeleteComment(commentId) {
      console.log(commentId);
      try {
        const { data } = await userAPI.deleteComments(commentId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurantComments = this.restaurantComments.filter(
          (comment) => comment.id !== commentId
        );
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除評論，請稍後再試",
        });
      }
    },
    async afterCreateComment(payload) {
      try {
        // payload 為傳進來的物件名稱
        const { restaurantId, text } = payload;
        const { data } = await userAPI.addComments({
          restaurantId,
          text,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurantComments.push({
          id: data.commentId,
          RestaurantId: restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name,
          },
          text,
          createdAt: new Date(),
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>