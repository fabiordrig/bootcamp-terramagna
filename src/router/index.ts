import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import appRoutes from "./appRoutes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/lists",
    children: [...appRoutes]
  }
];

const router = new VueRouter({
  routes
});

export default router;
