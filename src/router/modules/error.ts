import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const errorRoutes: RouteRecordRaw[] = [
    {
        path: "/error",
        component: Layout,
        name: "errorPage",
        redirect: "/error/403",
        meta: { label: "错误页", icon: "SkullOutline" },
        children: [
            {
                path: "403",
                name: "errorPage403",
                meta: { label: "403", icon: "TrashBinOutline" },
                component: () => import("@/views/errors/403.vue"),
            },
            {
                path: "404",
                name: "errorPage404",
                meta: { label: "404", icon: "TrashBinOutline" },
                component: () => import("@/views/errors/404.vue"),
            },
        ],
    },
];

export default errorRoutes;
