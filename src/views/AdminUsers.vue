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
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click="toggleAdmin(user.id, { isAdmin: user.isAdmin })"
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
            <!-- <button
              @click="toggleAdmin({ userId: user.id, isAdmin: user.isAdmin })"
              v-if="user.isAdmin"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              @click="toggleAdmin({ userId: user.id, isAdmin: user.isAdmin })"
              v-else
              type="button"
              class="btn btn-link"
            >
              set as Admin
            </button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utilitys/helpers";
import { mapState } from "vuex";

// const dummyUser = {
//   users: [
//     {
//       id: 1,
//       name: "root",
//       email: "root@example.com",
//       password: "$2a$10$psxF6lN5Tjp53JQllpgdzuKt69yoF2OaWQLi2AsbPBpgYRiA0.R2O",
//       isAdmin: true,
//       image: null,
//       createdAt: "2022-06-30T15:59:31.000Z",
//       updatedAt: "2022-06-30T15:59:31.000Z",
//     },
//     {
//       id: 2,
//       name: "user1",
//       email: "user1@example.com",
//       password: "$2a$10$6.ZUnvx.LAarlhS16o5mUuspyJQ2Qx9ubUSAnAbGl78pSxHJ97sY.",
//       isAdmin: false,
//       image: null,
//       createdAt: "2022-06-30T15:59:31.000Z",
//       updatedAt: "2022-06-30T15:59:31.000Z",
//     },
//     {
//       id: 3,
//       name: "user2",
//       email: "user2@example.com",
//       password: "$2a$10$fUaVWswhsyfyk0ge8OxS6eMfrzUf.JoYGaOyy2UWooXf0dSftc5g.",
//       isAdmin: false,
//       image: null,
//       createdAt: "2022-06-30T15:59:31.000Z",
//       updatedAt: "2022-06-30T15:59:31.000Z",
//     },
//   ],
// };
export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      userInfo: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.getAdminUsers();
        this.userInfo = data.users;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "請求使用者失敗",
        });
      }
    },
    async toggleAdmin(userId, { isAdmin }) {
      try {
        console.log(this.userInfo);
        const { data } = await adminAPI.updateAdminUsers(userId, {
          isAdmin: String(!isAdmin),
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.userInfo = this.userInfo.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }

          return user;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "切換權限失敗",
        });
      }
    },
  },
};
</script>