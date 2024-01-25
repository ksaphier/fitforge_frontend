import { createRouter, createWebHistory } from "vue-router";

import Register from "./pages/RegisterPage.vue";
import Login from "./pages/LoginPage.vue";
import ExerciseList from "./pages/ExerciseList.vue";

const routes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/", component: ExerciseList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
