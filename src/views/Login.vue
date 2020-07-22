<template>
  <form v-on:submit.prevent="$emit('submit-handler', email)" id="besties">
    <span
      >Login to the best application in the University created by the best
      developer in the University :)</span
    >
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" />
    <button type="submit">Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>
