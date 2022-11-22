import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import MultistageRouterLayout from "@/components/multistage-router-layout/index.vue";

const userRoutes: RouteRecordRaw[] = [
    // 案例
    {
        path: "/example",
        component: Layout,
        redirect: "/example/table",
        meta: { label: "案例", icon: "FolderOutline" },
        children: [
            {
                path: "table",
                name: "exampleTable",
                component: () => import("@/views/example/table/index.vue"),
                meta: { label: "数据表格", icon: "BrowsersSharp" },
            },
            {
                path: "table/add",
                name: "exampleTableAdd",
                component: () => import("@/views/example/table/add.vue"),
                meta: { label: "新增数据", hidden: true, icon: "AddCircleOutline" },
            },
            {
                path: "form",
                name: "exampleForm",
                component: () => import("@/views/example/form.vue"),
                meta: { label: "表单", icon: "DocumentTextOutline" },
            },
        ],
    },
    // 单级菜单
    {
        path: "/one",
        component: Layout,
        redirect: "/one/index",
        meta: { onlyFirst: true },
        children: [
            {
                path: "index",
                name: "oneIndex",
                component: () => import("@/views/one/index.vue"),
                meta: { label: "单级菜单", icon: "GitCommitOutline" },
            },
        ],
    },
    // 多级菜单
    {
        path: "/many",
        name: "many",
        component: Layout,
        redirect: "/many/father/son/grandson",
        meta: { label: "多级菜单", icon: "GitMergeOutline" },
        children: [
            {
                path: "mother-bro",
                name: "manyFatherMotherBro",
                component: () => import("@/views/many/mother-bro/index.vue"),
                meta: { label: "我是老舅", icon: "Male" },
            },
            {
                path: "father",
                name: "manyFather",
                component: MultistageRouterLayout,
                redirect: "/many/father/son/grandson",
                meta: { label: "我是爸爸", icon: "Male" },
                children: [
                    {
                        path: "daughter",
                        name: "manyFatherDaughter",
                        component: () => import("@/views/many/father/daughter/index.vue"),
                        meta: { label: "我是闺女", icon: "Female" },
                    },
                    {
                        path: "son",
                        name: "manyFatherSon",
                        component: MultistageRouterLayout,
                        redirect: "/many/father/son/grandson",
                        meta: { label: "我是儿子", icon: "Male" },
                        children: [
                            {
                                path: "grandson",
                                name: "manyFatherSonGrandson",
                                component: () =>
                                    import("@/views/many/father/son/grandson/index.vue"),
                                meta: { label: "我是孙子", icon: "Male" },
                            },
                        ],
                    },
                ],
            },
            {
                path: "father-bro",
                name: "manyFatherBro",
                component: () => import("@/views/many/father-bro/index.vue"),
                meta: { label: "我你大爷", icon: "Male" },
            },
            {
                path: "docs",
                name: "manyDocs",
                component: () => import("@/views/many/docs.vue"),
                meta: { label: "关系好乱，解释一下", icon: "DocumentTextOutline" },
            },
        ],
    },
    // 外部链接
    {
        path: "/outLink",
        redirect: "/",
        meta: {
            label: "外链",
            icon: "Link",
            outLink: "http://baidu.com",
        },
    },
];

export default userRoutes;
