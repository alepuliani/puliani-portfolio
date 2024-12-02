import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import CurriculumVitae from "@/views/CurriculumVitae.vue"
import SuccessView from "../views/SuccessView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: "/cv",
      name: "cv",
      component: CurriculumVitae
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: "active"
})

export default router
