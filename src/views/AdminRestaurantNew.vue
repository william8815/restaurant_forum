<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
// STEP 1: 匯入 adminAPI 和 Toast
import adminAPI from "./../apis/admin";
import { Toast } from "./../utilitys/helpers";
export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        // 透過 API 將表單資料送到伺服器
        // STEP 3: 透過 restaurants.create 方法來向伺服器建立餐廳
        const { data } = await adminAPI.restaurants.create({ formData });
        // console.log(formData);
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ": " + value);
        // }
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>