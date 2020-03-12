<template>
  <div class="hometop row p-3 mb-3 border-bottom">
    <div class="col-1">
      <router-link to="/login">
        <button @click="resetUser" class="m-1 btn btn-outline-light btn-lg">Logout</button>
      </router-link>
    </div>
    <div class="col-5">
      <h1 class="text-white">The Boards</h1>
    </div>
    <div class="col-6">
      <form class="rounded" @submit.prevent="addBoard">
        <input class="rounded" type="text" placeholder="title" v-model="newBoard.title" required />
        <input
          class="rounded m-1"
          type="text"
          placeholder="description"
          v-model="newBoard.description"
          required
        />
        <button class="btn btn-outline-light btn-lg" type="submit">Create Board</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    resetUser() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
.hometop {
  background-color: #27496d;
}
</style>