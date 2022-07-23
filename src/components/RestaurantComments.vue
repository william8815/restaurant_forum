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
import { mapState } from "vuex";

export default {
  props: {
    restaurant_comment: {
      type: Array,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  methods: {
    handleDeleteButtonClick(commentId) {
      this.$emit("after-delete-comment", commentId);
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>