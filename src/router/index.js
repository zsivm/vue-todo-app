import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TodoView from "../views/TodoView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo/:name/:id",
    name: "TodoView",
    component: TodoView,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
