<template>
  <div class="top row mb-3 p-3 border-bottom">
    <div class="col-8 mx-auto">
      <router-link to="/">
        <button class="btn btn-outline-light btn-lg">Back To The Boards</button>
      </router-link>
      <button @click="deleteBoard" class="m-1 btn btn-outline-light btn-lg">Delete This Board</button>

      <router-link to="/login">
        <button @click="resetUser" class="m-1 btn btn-outline-light btn-lg">Logout</button>
      </router-link>
    </div>
    <div class="col-4">
      <form class="round" @submit.prevent="addList">
        <input
          class="round m-1"
          type="text"
          placeholder="title..."
          v-model="newList.title"
          required
        />
        <button class="btn btn-outline-light btn-lg">Add List</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId
      }
    };
  },
  methods: {
    addList() {
      let list = { ...this.newList };
      this.$store.dispatch("addList", list);
      this.newList = {
        title: "",
        boardId: this.$route.params.boardId
      };
    },
    deleteBoard() {
      if (confirm("Are You Sure You Want To Delete This Board?")) {
        this.$store.dispatch("deleteBoard", this.$route.params.boardId);
        this.$router.replace("/");
      }
    },
    resetUser() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
.top {
  background-color: #ff7a00;
}
</style>