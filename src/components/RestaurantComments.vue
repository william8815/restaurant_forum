<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurant_comment" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.prevent.stop="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#"> {{ comment.User.name }} </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utilitys/mixins";
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
  props: {
    restaurant_comment: {
      type: Array,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  data() {
    return {
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      this.$emit("after-delete-comment", commentId);
    },
  },
};
</script>