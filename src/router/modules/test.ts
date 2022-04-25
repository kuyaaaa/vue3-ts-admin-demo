// 测试路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const testRoutes: RouteRecordRaw[] = [
    {
        path: "/test1",
        name: "test1",
        component: Layout,
        meta: {
            label: "测试1",
        },
        children: [
            {
                path: "1",
                name: "test1-1",
                meta: { label: "1" },
                component: () => import("@/views/test/test1.vue"),
            },
        ],
    },
    {
        path: "/test2",
        name: "test2",
        component: Layout,
        meta: { label: "测试2" },
        children: [
            {
                path: "2",
                name: "test2-2",
                meta: { label: "2" },
                component: Layout,
                children: [
                    {
                        path: "2-1",
                        name: "test2-2-1",
                        meta: { label: "2-1" },
                        component: () => import("@/views/test2-1.vue"),
                    },
                    {
                        path: "2-2",
                        name: "test2-2-2",
                        meta: { label: "2-2" },
                        component: () => import("@/views/test2-2.vue"),
                    },
                ],
            },
        ],
    },
];

export default testRoutes;
