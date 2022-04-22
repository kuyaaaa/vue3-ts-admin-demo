import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import Login from "@/views/user/login.vue";
import Error404 from "@/views/errors/404.vue";
import Error403 from "@/views/errors/403.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Layout,
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/404",
        component: Error404,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/404",
        name: "Error404",
        component: Error404,
    },
    {
        path: "/403",
        name: "Error403",
        component: Error403,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "@/views/about.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
