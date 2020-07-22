<template>
  <h3>
    <a v-bind:href="url">{{ postInfo.title }}</a>
  </h3>
</template>
<script>
export default {
  props: ["postInfo"],
  data() {
    return { url: "/post/" + this.postInfo.id };
  },
};
</script>
