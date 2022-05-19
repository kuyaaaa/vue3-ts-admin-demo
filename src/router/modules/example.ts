import type { RouteRecordRaw } from "vue-router";
import {
    AlignLeftOutlined as AlignLeftOutlinedIcon,
    BorderlessTableOutlined as BorderlessTableOutlinedIcon,
} from "@vicons/antd";
import { DocumentTextOutline as DocumentTextOutlineIcon } from "@vicons/ionicons5";
import Layout from "@/layout/index.vue";

const userRoutes: RouteRecordRaw[] = [
    {
        path: "/example",
        component: Layout,
        redirect: "/example/table",
        meta: { label: "案例", icon: AlignLeftOutlinedIcon },
        children: [
            {
                path: "table",
                name: "exampleTable",
                component: () => import("@/views/example/table.vue"),
                meta: { label: "数据表格", icon: BorderlessTableOutlinedIcon },
            },
            {
                path: "form",
                name: "exampleForm",
                component: () => import("@/views/example/form.vue"),
                meta: { label: "表单", icon: DocumentTextOutlineIcon },
            },
        ],
    },
];

export default userRoutes;
