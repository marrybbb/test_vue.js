<template>
  <div class="about">
    <h3>User Info</h3>
    <span>Name: {{ getInfo.name }}</span>
    <span>UserName: {{ getInfo.username }}</span>
    <span>Email: {{ getInfo.email }}</span>
    <span>Phone: {{ getInfo.phone }}</span>
  </div>
</template>
<script>
export default {
  props: ["user"],
  mounted() {
    localStorage.setItem("user", JSON.stringify(this.user));
  },
  computed: {
    getInfo: function() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>
<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
