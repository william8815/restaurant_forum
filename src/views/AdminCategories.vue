<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            @click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              @click="handleCancel(category.id)"
              v-show="category.isEditing"
              class="cancel"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              @click.stop.prevent="toggleIsEditing(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
              type="button"
              class="btn btn-link mr-2"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";
import AdminNav from "./../components/AdminNav.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utilitys/helpers";

export default {
  components: {
    AdminNav,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      categories: [],
      newCategoryName: "",
      isProcessing: false,
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        // 逐筆加入 isEditing 屬性
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "",
        }));
        // console.log(this.categories);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "類別請求失敗",
        });
      }
    },
    async createCategory() {
      try {
        if (this.newCategoryName.trim() === "") {
          Toast.fire({
            icon: "warning",
            title: "請輸入類別",
          });
          return;
        }
        this.isProcessing = true;
        const { data } = await adminAPI.categories.createCategory({
          name: this.newCategoryName,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
        });
        this.isProcessing = false;
        this.newCategoryName = ""; // 清空原本欄位中的內容
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "類別新增失敗",
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.deleteCategory(categoryId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "類別刪除失敗",
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    async updateCategory({ categoryId, name }) {
      try {
        // console.log(name);
        this.toggleIsEditing(categoryId);
        const { data } = await adminAPI.categories.updateCategory({
          categoryId,
          name,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "類別更改失敗",
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
  },
};
</script>

<style scoped>
/* scoped :CSS 天性是全域的，所以 Vue.js 幫我們做了一個 scoped 屬性，用來確保這組 CSS 只會作用到當下的這一個 component。 */
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>