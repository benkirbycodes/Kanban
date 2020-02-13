<template>
  <div class="login container-fluid bg-dark text-white">
    <div class="row">
      <div class="col-12 p-5">
        <h1>Welcome To Kanban!</h1>
        <h3>Organize Thyself</h3>
      </div>
      <div class="col-4 mx-auto text-center">
        <form v-if="loginForm" @submit.prevent="loginUser">
          <input class="rounded" type="email" v-model="creds.email" placeholder="email" />
          <br />
          <br />
          <input class="rounded" type="password" v-model="creds.password" placeholder="password" />
          <br />
          <button class="btn btn-outline-light btn-lg m-3" type="submit">Login</button>
        </form>

        <form v-else @submit.prevent="register">
          <input class="rounded" type="text" v-model="newUser.name" placeholder="name" />
          <br />
          <br />
          <input class="rounded" type="email" v-model="newUser.email" placeholder="email" />
          <br />
          <br />
          <input class="rounded" type="password" v-model="newUser.password" placeholder="password" />
          <br />
          <button class="btn btn-outline-light btn-lg m-3" type="submit">Create Account</button>
        </form>
        <div class="action" @click="loginForm = !loginForm">
          <p v-if="loginForm">No account? Click here to Register</p>
          <p v-else>Already have an account? Click here to Login</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "boards" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>

<style>
.action {
  cursor: pointer;
}
.login {
  height: 100vh;
}
</style>