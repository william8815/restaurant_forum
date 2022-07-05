<template>
  <div class="col-3">
    <a href="#">
      <img
        src="貼上引用圖片網址，同學可自行選擇圖片進行實作"
        width="140px"
        height="140px"
      />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click="addFollow"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click="removeFollow"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    user_info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.user_info,
    };
  },
  methods: {
    addFollow() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
    removeFollow() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
  },
};
</script>