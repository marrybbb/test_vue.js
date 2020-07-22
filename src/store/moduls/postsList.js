const axios = require("axios");
export default {
  actions: {
    async getPosts(ctx) {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      const postsList = await res.data;

      ctx.commit("updatePosts", postsList);
    },
  },
  mutations: {
    updatePosts(state, postsList) {
      state.postsList = postsList;
    },
  },
  state: {
    postsList: [],
  },
  modules: {},
  getters: {
    allPosts(state) {
      return state.postsList;
    },
  },
};
