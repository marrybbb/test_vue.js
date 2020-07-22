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
    path: "/user/id",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue"),
  },
  {
    path: "/userProfile",
    name: "UserProfile",
    component: () => import("../views/UserProfilePage.vue"),
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
