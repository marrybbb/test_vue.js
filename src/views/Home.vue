<template>
  <div class="home">
    <PostsList v-bind:postsList="postsList"/>
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";

export default {
  name: "Home",
  props: ["postsList"],
  components: {
    PostsList,
  },
};
</script>
