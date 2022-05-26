import type { RouteRecordRaw } from "vue-router";
import {
    AlignLeftOutlined as AlignLeftOutlinedIcon,
    BorderlessTableOutlined as BorderlessTableOutlinedIcon,
} from "@vicons/antd";
import {
    DocumentTextOutline as DocumentTextOutlineIcon,
    Link as LinkIcon,
    GitCommitOutline as GitCommitOutlineIcon,
} from "@vicons/ionicons5";
import Layout from "@/layout/index.vue";

const userRoutes: RouteRecordRaw[] = [
    // 案例
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
    {
        path: "/one",
        component: Layout,
        redirect: "/one/index",
        meta: { label: "单级菜单", onlyFirst: true },
        children: [
            {
                path: "index",
                name: "oneIndex",
                component: () => import("@/views/example/table.vue"),
                meta: { icon: GitCommitOutlineIcon },
            },
        ],
    },
    // 外部链接
    {
        path: "/outLink",
        redirect: "/",
        meta: {
            label: "外链",
            icon: LinkIcon,
            outLink: "http://baidu.com",
        },
    },
];

export default userRoutes;
