import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home";
import Speciality from "@/pages/Speciality";
import Advantages from "@/pages/Advantages";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import LetsTalk from "@/pages/LetsTalk";

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
    path: "/speciality",
    name: "Speciality",
    component: Speciality,
  },
  {
    path: "/advantages",
    name: "Advantages",
    component: Advantages,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/lets-talk",
    name: "LetsTalk",
    component: LetsTalk,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;