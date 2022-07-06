<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of userInfo" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td v-if="!user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              @click="toggleAdmin(user.id)"
              v-if="!user.isAdmin"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              @click="toggleAdmin(user.id)"
              v-else
              type="button"
              class="btn btn-link"
            >
              set as Admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const dummyUser = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$psxF6lN5Tjp53JQllpgdzuKt69yoF2OaWQLi2AsbPBpgYRiA0.R2O",
      isAdmin: true,
      image: null,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$6.ZUnvx.LAarlhS16o5mUuspyJQ2Qx9ubUSAnAbGl78pSxHJ97sY.",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$fUaVWswhsyfyk0ge8OxS6eMfrzUf.JoYGaOyy2UWooXf0dSftc5g.",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
    },
  ],
};

import AdminNav from "./../components/AdminNav.vue";
export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      userInfo: [],
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.userInfo = dummyUser.users;
    },
    toggleAdmin(userId) {
      this.userInfo = this.userInfo.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>