import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layout/auth.vue";
import DefaultLayout from "@/layout/default.vue";
import { useAuthStore, useLoginStore } from "@/store/auth";

const routes = [
  {
    path: "/auth/login",
    component: () => import("@/pages/login.vue"),
    name: "Login",
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: "/auth/otp",
    name: "Otp",
    component: () => import("@/pages/otp.vue"),
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/pages/dashboard.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/transaction/fx",
    name: "Fx",
    component: () => import("@/pages/foreign-exchange.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",

    component: () => import("@/layout/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const loginStore = useLoginStore();
  const authStore = useAuthStore();

  if(!loginStore.isLoggedIn && !authStore.isAuthenticated && to.name !== "Login") {
    return { name: "Login" };
  }

  if (!authStore.isAuthenticated && !(to.name === "Login" || to.name === "Otp")) {
    return { name: "Login" };
  }

  if (authStore.isAuthenticated && (to.name === "Login" || to.name === "Otp")) {
    return { name: from.name || "Dashboard" };
  }
});
export default router;
