<template>
  <div id="app">
    <div class="content" v-if="this.token">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/user/id">User</router-link> |
        <router-link to="/logout">Logout</router-link>
      </div>
      <router-view v-bind:postsList="allPosts" :user="this.user" />
    </div>
    <div v-else>
      <Login v-on:submit-handler="submitHandler" :postsList="allPosts" />
      <p v-if="this.errorMessage">
        Sorry I did not have enought time to create notification :) <br />
        <strong> Invalid email please choose one fron jsonplaceholder</strong>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import getUsers from "./store/moduls/getUsers";
import Login from "./views/Login";
export default {
  components: {
    Login,
  },
  async mounted() {
    this.getPosts();
  },

  methods: {
    ...mapActions(["getPosts"]),
    async submitHandler(email) {
      const users = await getUsers();
      this.user = users.find((us) => us.email === email);
      this.user ? (this.token = true) : (this.errorMessage = true);
    },
  },

  computed: mapGetters(["allPosts"]),

  data() {
    return {
      token: '',
      user: null,
      errorMessage: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  width: 60%;
  margin: 0 auto;
}

#besties {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  span:first-child {
    font-size: 24px;
    font-weight: bolder;
    color: #ff69b4;
  }
  input {
    width: 20rem;
    height: 2rem;
  }
  button {
    margin-top: 10px;
    padding: 15px 25px;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
