<template>
  <div>
    <h3>Post Info</h3>
    <p>Title: {{ this.post.title }}</p>
    <p>Body: {{ this.post.body }}</p>
    <Loader v-if="loading" />
    <CommentCard :comments="this.comments" v-else />
  </div>
</template>
<script>
const axios = require("axios");
import CommentCard from "../components/CommentCard";
import Loader from "../components/Loader";
export default {
  components: { CommentCard, Loader },
  data() {
    return {
      post: [],
      comments: [],
      postid: this.$route.params.id,
      loading: true,
    };
  },

  async mounted() {
    const postsRes = await axios(
      `https://jsonplaceholder.typicode.com/posts/` + this.postid
    );
    this.post = await postsRes.data;

    const commentsRes = await axios(
      `https://jsonplaceholder.typicode.com/posts/` + this.postid + "/comments"
    );
    setTimeout(() => {
      this.comments = commentsRes.data;
      this.loading = false;
    }, 1000);
  },
};
</script>

<style scoped>
h3 {
  text-align: start;
}
</style>
