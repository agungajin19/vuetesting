import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Closing from "../views/Closing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Home
  },
  {
    path: "/closing",
    name: "closing",
    component: Closing
  },
  {
    path: "/:id",
    name: "Product",
    component: Home
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
