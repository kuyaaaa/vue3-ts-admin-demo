import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { HomeOutline as HomeOutlineIcon } from "@vicons/ionicons5";
import Layout from "@/layout/index.vue";
import Login from "@/views/user/login.vue";
import Error404 from "@/views/errors/404.vue";
import Error403 from "@/views/errors/403.vue";
import userRoutes from "./modules/user";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "index",
        redirect: "/home",
        component: Layout,
        children: [
            {
                path: "home",
                name: "home",
                meta: { label: "主页", icon: HomeOutlineIcon },
                component: () => import("@/views/home.vue"),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/404",
        meta: { hidden: true },
        component: Error404,
    },
    {
        path: "/login",
        name: "login",
        meta: { hidden: true },
        component: Login,
    },
    {
        path: "/404",
        name: "error404",
        meta: { hidden: true },
        component: Error404,
    },
    {
        path: "/403",
        name: "error403",
        meta: { hidden: true },
        component: Error403,
    },
    ...userRoutes,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
