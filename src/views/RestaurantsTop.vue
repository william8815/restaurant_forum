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
              @click="removeFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click="addFavorite(restaurant.id)"
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

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Verlie Grimes",
      tel: "270-435-0690",
      address: "8400 Deanna Lodge",
      opening_hours: "08:00",
      description: "Qui sequi occaecati molestias dolores. Dolores nem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.115522729236645",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Taylor Mosciski DVM",
      tel: "453-557-2497 x1827",
      address: "581 Wendell Underpass",
      opening_hours: "08:00",
      description: "Ipsum aut quis et. Quia ducimus officiis aut aut t",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.54676994018968",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Kelli Volkman",
      tel: "724-879-0132",
      address: "61975 Hester Fall",
      opening_hours: "08:00",
      description: "asperiores delectus sint",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.53439836002974",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Delfina Fay",
      tel: "1-115-909-5657",
      address: "47839 Angeline Corners",
      opening_hours: "08:00",
      description: "Eligendi tempore totam id odio mollitia provident ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.33407125373679",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Miss Kenyon Jast",
      tel: "1-379-054-5472 x18166",
      address: "09971 Kieran Field",
      opening_hours: "08:00",
      description: "Dolore saepe cum. Molestiae similique ut non sit n",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.31803292658398",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Gussie Leannon",
      tel: "(635) 662-0796",
      address: "081 Elta Mills",
      opening_hours: "08:00",
      description: "Debitis aut repellat autem. Autem et laborum et. I",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.111237187303597",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Aiyana Feil",
      tel: "888-838-8886",
      address: "701 Reilly Island",
      opening_hours: "08:00",
      description: "nam reprehenderit tenetur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.71769161836378",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Kelsie Wuckert",
      tel: "1-455-175-5231 x0142",
      address: "88475 Braun Orchard",
      opening_hours: "08:00",
      description: "Sunt voluptatem amet animi omnis perspiciatis dign",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.43774802703869",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Ricky Bins",
      tel: "1-575-262-5073",
      address: "57504 Harvey Groves",
      opening_hours: "08:00",
      description: "mollitia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.32040993698305",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Aryanna Botsford",
      tel: "157.192.3249",
      address: "147 Liza Island",
      opening_hours: "08:00",
      description: "Sapiente omnis odio veniam id eaque laudantium ali",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.530391900567583",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurantTop: dummyData.restaurants,
    };
  },
  methods: {
    addFavorite(id) {
      this.restaurantTop.forEach((restaurant) => {
        if (restaurant.id === id) {
          restaurant.isFavorited = true;
        }
      });
    },
    removeFavorite(id) {
      this.restaurantTop.forEach((restaurant) => {
        if (restaurant.id === id) {
          restaurant.isFavorited = false;
        }
      });
    },
  },
};
</script>