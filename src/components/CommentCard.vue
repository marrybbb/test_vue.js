<template>
  <div>
    <div v-for="comment in comments" :key="comment.id" class="container">
      <div class="author">{{ comment.email }}</div>
      <div class="commentInfo">
        <p>Name: {{ comment.name }}</p>
        <p>Body: {{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["comments"],
};
</script>
<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 15px 0;
}

.commentInfo {
  width: 75%;
}

p {
  text-align: start;
}
</style>
