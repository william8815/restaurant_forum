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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
// 模擬登入使用者
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
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
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { currentUser } = dummyUser;
      const { id, name, email, image, isAdmin } = currentUser;
      this.user = {
        id,
        name,
        email,
        image,
        isAdmin,
      };
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
    handleFormData(e) {
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData) {
        console.log(name + ":" + value);
      }
    },
  },
};
</script>