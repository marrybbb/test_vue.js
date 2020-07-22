<template>
  <div class="about">
    <h3>User Info</h3>
    <span>Name: {{ user.name }}</span>
    <span>UserName: {{ user.username }}</span>
    <span>Email: {{ user.email }}</span>
    <span>Phone: {{ user.phone }}</span>
  </div>
</template>
<script>
export default {
  props: ["user"],
};
</script>
<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
