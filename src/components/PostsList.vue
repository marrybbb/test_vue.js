<template>
  <div class="postsList">
    <input type="text" v-model="search" placeholder="search" />
    <div class="postElement" v-for="post in filteredPosts" :key="post.id">
      <PostTitle v-bind:postInfo="post" />
      <PostBody v-bind:postBody="post.body" />
      <UserProfile />
    </div>
    <Paginate
      v-model="page"
      :page-count="pageCount"
      :click-handler="pageChangeHandler"
      :prev-text="'Prev'"
      :next-text="'Next'"
      class="pagination"
    />
  </div>
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import UserProfile from "./UserProfile";

export default {
  data() {
    return {
      search: "",
    };
  },
  async mounted() {
    await this.setupPagination(this.postsList);
  },
  props: ["postsList"],
  mixins: [paginationMixin],
  components: {
    PostTitle,
    PostBody,
    UserProfile,
  },
  computed: {
    filteredPosts: function() {
      return this.items.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },
};
</script>
<style>
.postElement {
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: ;
}
.pagination {
  list-style-type: none;
  li {
    display: inline;
  }
}
</style>
