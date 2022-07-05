<!-- 餐廳列表-->
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial_restaurant="restaurant"
      />
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantPagination from "../components/RestaurantsPagination.vue";

// 建立種子資料
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Liliana Doyle",
      tel: "1-358-086-4483 x149",
      address: "5211 Sabrina Park",
      opening_hours: "08:00",
      description: "voluptas enim architecto",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.89737645121869",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Vern Gerlach",
      tel: "1-461-487-6755 x40839",
      address: "999 Kling Via",
      opening_hours: "08:00",
      description: "et et illum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.37487759535455",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Alberta Hayes",
      tel: "775-498-7474 x2966",
      address: "35357 Ortiz Prairie",
      opening_hours: "08:00",
      description: "quis eos aliquid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.44237452116526",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Melany Rowe DVM",
      tel: "1-902-168-9700",
      address: "4984 Brenda Forge",
      opening_hours: "08:00",
      description: "Laborum ad non quos autem quas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.52480496183988",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Nathan Beer",
      tel: "(466) 866-6992 x478",
      address: "00853 Steuber Mills",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.319637840017236",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Gussie Jaskolski MD",
      tel: "1-781-168-4997 x3104",
      address: "97986 Friesen Mountains",
      opening_hours: "08:00",
      description: "sit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.18263328047849",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Ms. Dandre Swaniawski",
      tel: "(147) 476-2115",
      address: "363 Santa Plains",
      opening_hours: "08:00",
      description: "aliquam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.850693587284926",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Lavonne Beier",
      tel: "813-490-7735 x83743",
      address: "51601 Green Manor",
      opening_hours: "08:00",
      description: "Eum eos distinctio sed eveniet ut at. Sed ut et du",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.60461781203423",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Agustin Hauck",
      tel: "1-447-016-0260 x556",
      address: "713 Daryl Road",
      opening_hours: "08:00",
      description: "Tempore consequuntur et quia nobis.\nEt et aliquid ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.76253573784982",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Ethel Walsh",
      tel: "1-644-407-9778 x5197",
      address: "0080 Kathryne Forge",
      opening_hours: "08:00",
      description: "Numquam provident inventore saepe officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.291662598731731",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantPagination,
  },
  data() {
    // 這裡的 -1 代表現在還沒拿到資料，有些人也會寫 undefined 或 0 來表達這種狀況
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>