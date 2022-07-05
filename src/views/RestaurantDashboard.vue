<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Liliana Doyle",
    tel: "1-358-086-4483 x149",
    address: "5211 Sabrina Park",
    opening_hours: "08:00",
    description: "voluptas enim architecto",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=14.89737645121869",
    viewCounts: 1,
    createdAt: "2022-06-30T15:59:31.000Z",
    updatedAt: "2022-07-04T07:58:49.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    Comments: [
      {
        id: 101,
        text: "Repellendus et velit quos vitae.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$psxF6lN5Tjp53JQllpgdzuKt69yoF2OaWQLi2AsbPBpgYRiA0.R2O",
          isAdmin: true,
          image: null,
          createdAt: "2022-06-30T15:59:31.000Z",
          updatedAt: "2022-06-30T15:59:31.000Z",
        },
      },
      {
        id: 1,
        text: "Voluptatum deserunt pariatur ipsum iure impedit sint.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$6.ZUnvx.LAarlhS16o5mUuspyJQ2Qx9ubUSAnAbGl78pSxHJ97sY.",
          isAdmin: false,
          image: null,
          createdAt: "2022-06-30T15:59:31.000Z",
          updatedAt: "2022-06-30T15:59:31.000Z",
        },
      },
      {
        id: 51,
        text: "Voluptates enim eum qui cumque harum itaque et id velit.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$fUaVWswhsyfyk0ge8OxS6eMfrzUf.JoYGaOyy2UWooXf0dSftc5g.",
          isAdmin: false,
          image: null,
          createdAt: "2022-06-30T15:59:31.000Z",
          updatedAt: "2022-06-30T15:59:31.000Z",
        },
      },
    ],
  },
};
export default {
  data() {
    return {
      restaurant: {
        name: "",
        viewCounts: 0,
        Category: {},
        Comments: [],
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      const { name, viewCounts, Category, Comments } = dummyData.restaurant;
      this.restaurant = {
        id: restaurantId,
        name,
        viewCounts,
        categoryName: Category.name,
        commentsLength: Comments.length,
      };
    },
  },
};
</script>