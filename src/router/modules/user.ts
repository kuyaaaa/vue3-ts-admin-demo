import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const userRoutes: RouteRecordRaw[] = [
    {
        path: "/user",
        component: Layout,
        redirect: "/user/userInfo",
        meta: {
            hidden: true,
        },
        children: [
            {
                path: "userInfo",
                name: "userInfo",
                meta: { label: "个人信息" },
                component: () => import("@/views/user/userInfo.vue"),
            },
        ],
    },
];

export default userRoutes;
