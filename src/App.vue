<template>
  <div id="app">
    <div class="content" v-if="this.token">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/user">User</router-link> |
        <button class="button" v-on:click="logout">Logout</button>
      </div>
      <router-view
        v-bind:postsList="allPosts"
        :user="this.user"
        :token="this.token"
      />
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
      if (this.user) {
        localStorage.setItem("token", true);
        localStorage.setItem("user", JSON.stringify(this.user));
        this.token = localStorage.getItem("token");
      } else {
        this.errorMessage = !this.errorMessage;
      }
    },
    logout() {
      localStorage.setItem("token", "");
      this.token = localStorage.getItem("token");
    },

  },

  computed: mapGetters(["allPosts"]),

  data() {
    return {
      token: localStorage.getItem("token"),
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

.button {
  border: none;
  background: none;
  cursor: pointer;
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
