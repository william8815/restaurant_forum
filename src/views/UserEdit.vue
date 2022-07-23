<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleFormData">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button :disabled="isProcessing" type="submit" class="btn btn-primary">
        {{ isProcessing ? "處理中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import userAPI from "./../apis/users";
import { Toast } from "./../utilitys/helpers";
// 模擬登入使用者
// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: "管理者",
//     email: "root@example.com",
//     image: "https://i.pravatar.cc/300",
//     isAdmin: true,
//   },
//   isAuthenticated: true,
// };
export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isProcessing: false,
    };
  },
  beforeRouteUpdate(to) {
    if (to.params !== this.currentUser.id) {
      this.$router.push({ name: "NotFound" });
      return;
    }
    this.setUser();
  },
  created() {
    const { id } = this.$route.params;
    if (id !== this.currentUser.id) {
      this.$router.push({ name: "NotFound" });
      return;
    }
    this.setUser();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      this.setUser();
    },
  },
  methods: {
    setUser() {
      this.user = {
        ...this.user,
        ...this.currentUser,
      };
      // console.log("set", this.user);
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imgURL = window.URL.createObjectURL(files);
        this.user.image = imgURL;
      }
    },

    async handleFormData(e) {
      if (!this.user.name.trim()) {
        Toast.fire({
          icon: "warning",
          title: "請填寫姓名",
        });
        return;
      }
      const form = e.target;
      const formData = new FormData(form);
      try {
        // console.log("submit", this.user);
        this.isProcessing = true;

        const { data } = await userAPI.update({
          userId: this.user.id,
          formData,
        });
        // this.$store.commit("setCurrentUser", this.user);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({
          name: "user-profile",
          params: { id: this.user.id },
        });
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "更新失敗",
        });
      }
    },
  },
};
</script>