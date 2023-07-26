import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";

function redirect() {
  return '/'
}

const routes = [
  { path: "/:catchAll(.*)", redirect: redirect() },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;