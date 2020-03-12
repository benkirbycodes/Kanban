<template>
  <div class="boards container-fluid">
    <home-top />
    <div class="row">
      <div class="col-12 p-2 mb-2">
        <div class="card-board m-5 text-light" v-for="board in boards" :key="board._id">
          <div class="card-header outer-board-title text-center">
            <router-link :to="{ name: 'board', params: { boardId: board._id } }">
              <h3 class="board-title">{{ board.title }}</h3>
            </router-link>
            <i @click="deleteBoard(board._id)" class="fa fa-close"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeTop from "@/components/HomeTop";
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {};
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    deleteBoard(id) {
      if (confirm("Are You Sure You Want To Delete This Board?")) {
        this.$store.dispatch("deleteBoard", id);
      }
    }
  },
  components: {
    homeTop
  }
};
</script>
<style scoped>
h3 {
  display: inline-block;
}
i {
  float: right;
}
.card-board {
  background-color: #0c7b93;
}
.boards {
  min-height: 100vh;
  background-color: #0c7b93;
}
.board-title {
  color: white;
}
.board-title:hover {
  color: black;
}
.outer-board-title {
  border-radius: 38px;
  background: linear-gradient(145deg, #2a839d, #236e84);
  box-shadow: 5px 5px 24px #164654, -5px -5px 24px #38aed2;
  border: 1px solid white;
}
</style>