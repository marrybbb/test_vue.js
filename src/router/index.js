import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/post/:id",
    name: "PostInfo",
    component: () => import("../views/PostInfo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
