<!-- 美食達人 -->
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserFamous
        v-for="user in famousUsers"
        :key="user.id"
        :user_info="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import UserFamous from "../components/UserFamous.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$psxF6lN5Tjp53JQllpgdzuKt69yoF2OaWQLi2AsbPBpgYRiA0.R2O",
      isAdmin: true,
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$6.ZUnvx.LAarlhS16o5mUuspyJQ2Qx9ubUSAnAbGl78pSxHJ97sY.",
      isAdmin: false,
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$fUaVWswhsyfyk0ge8OxS6eMfrzUf.JoYGaOyy2UWooXf0dSftc5g.",
      isAdmin: false,
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
    UserFamous,
  },
  data() {
    return {
      famousUsers: [],
    };
  },
  methods: {
    fetchFamousUser() {
      this.famousUsers = dummyData.users;
    },
  },
  created() {
    this.fetchFamousUser();
  },
};
</script>
