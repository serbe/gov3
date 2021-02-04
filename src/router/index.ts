import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomePage = () => import("./views/home/HomePage.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      requiresAuth: true,
      title: "ЕДДС",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// if (to.meta.requiresAuth && !auth.isLoggedIn()) {
//   // this route requires auth, check if logged in
//   // if not, redirect to login page.
//   return {
//     path: '/login',
//     // save the location we were at to come back later
//     query: { redirect: to.fullPath },
//   }
// }
// })

export default router;
