<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSignUp">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          v-model="password_check"
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <button
        :disabled="isProcessing"
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        {{ isProcessing ? "處理中..." : "Submit" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utilitys/helpers";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_check: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSignUp() {
      try {
        if (!this.name || !this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請勿留白",
          });
          return;
        }
        if (this.password !== this.password_check) {
          this.password_check = "";
          Toast.fire({
            icon: "warning",
            title: "密碼輸入錯誤",
          });
          return;
        }
        this.isProcessing = true;
        const { data } = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.password_check,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 註冊成功
        Toast.fire({
          icon: "success",
          title: "註冊成功!",
        });
        // 導至登入頁面
        this.$router.push({ name: "sign-in" });
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "註冊失敗",
        });
      }
    },
  },
};
</script>