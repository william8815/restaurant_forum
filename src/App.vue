<template>
  <div id="restaurant-forum">
    <Navbar />
    <main class="mt-5">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// 引入 Navbar 元件
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
main {
  margin-top: 65px !important;
}
</style>