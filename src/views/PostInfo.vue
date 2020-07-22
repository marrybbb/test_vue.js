<template>
  <div>{{ $route.params.id }}</div>
</template>
<script>
const axios = require("axios");

export default {
  data() {
    return {
      post: [],
    };
  },

  async mounted() {
    const res = await axios(`https://jsonplaceholder.typicode.com/posts`);
    const postMy = await res.data;
    console.log(postMy);
  },
};
</script>
