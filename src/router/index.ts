// import { store } from "@/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomePage = () => import("@/views/home/HomePage.vue");
const LoginPage = () => import("@/views/login/LoginPage.vue");

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
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      title: "Авторизация",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// onBeforeRouteLeave((to, from, next) => {
//   console.log(to, from);
//   if (to.name !== "Login" && !store.getters.isAuth) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   console.log(to.name, from.name);
//   console.log(store.getters.isAuth);
//   next();
// if (to.name !== "LoginPage" && !store.getters.isAuth)
//   next({ name: "LoginPage" });
// else next();
//   //   if (to.meta.requiresAuth && !auth.isLoggedIn()) {
//   //   // this route requires auth, check if logged in
//   //   // if not, redirect to login page.
//   //   return {
//   //     path: '/login',
//   //     // save the location we were at to come back later
//   //     query: { redirect: to.fullPath },
//   //   }
//   // }
// });

export default router;
