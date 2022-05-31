import type { RouteRecordRaw } from "vue-router";
import {
    SkullOutline as SkullOutlineIcon,
    TrashBinOutline as TrashBinOutlineIcon,
} from "@vicons/ionicons5";
import Layout from "@/layout/index.vue";

const errorRoutes: RouteRecordRaw[] = [
    {
        path: "/error",
        component: Layout,
        name: "errorPage",
        redirect: "/error/403",
        meta: { label: "错误页", icon: SkullOutlineIcon },
        children: [
            {
                path: "403",
                name: "errorPage403",
                meta: { label: "403", icon: TrashBinOutlineIcon },
                component: () => import("@/views/errors/403.vue"),
            },
            {
                path: "404",
                name: "errorPage404",
                meta: { label: "404", icon: TrashBinOutlineIcon },
                component: () => import("@/views/errors/404.vue"),
            },
        ],
    },
];

export default errorRoutes;
