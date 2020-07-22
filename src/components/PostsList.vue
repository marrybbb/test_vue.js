<template>
  <div class="postsList">
    <div class="postElement" v-for="post in postsList" :key="post.id">
      <PostTitle v-bind:postInfo="post" />
      <PostBody v-bind:postBody="post.body" />
      <UserProfile />
    </div>
  </div>
</template>

<script>
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import UserProfile from "./UserProfile";

export default {
  props: ["postsList"],
  components: {
    PostTitle,
    PostBody,
    UserProfile,
  },
};
</script>
<style>
.postElement {
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: ;
}
</style>
