<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    restaurant_id: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("after-create-comment", {
        // Id 原本是從後端拿取，現在先用 uuid 產生隨機馬
        commentId: uuidv4(),
        restaurantId: this.restaurant_id,
        text: this.text,
      });
      this.text = "";
    },
  },
};
</script>