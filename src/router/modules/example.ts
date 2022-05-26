import type { RouteRecordRaw } from "vue-router";
import {
    AlignLeftOutlined as AlignLeftOutlinedIcon,
    BorderlessTableOutlined as BorderlessTableOutlinedIcon,
    ApartmentOutlined as ApartmentOutlinedIcon,
    ManOutlined as ManOutlinedIcon,
    WomanOutlined as WomanOutlinedIcon,
} from "@vicons/antd";
import {
    DocumentTextOutline as DocumentTextOutlineIcon,
    Link as LinkIcon,
    GitCommitOutline as GitCommitOutlineIcon,
} from "@vicons/ionicons5";
import Layout from "@/layout/index.vue";
import MultistageRouterLayout from "@/components/multistage-router-layout.vue";

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
                meta: { label: "单级菜单", icon: GitCommitOutlineIcon },
            },
        ],
    },
    // 多级菜单
    {
        path: "/many",
        name: "many",
        component: Layout,
        redirect: "/many/father/son/grandson",
        meta: { label: "多级菜单", icon: ApartmentOutlinedIcon },
        children: [
            {
                path: "mother-bro",
                name: "manyFatherMotherBro",
                component: () => import("@/views/many/mother-bro/index.vue"),
                meta: { label: "我是老舅", icon: ManOutlinedIcon },
            },
            {
                path: "father",
                name: "manyFather",
                component: MultistageRouterLayout,
                redirect: "/many/father/son/grandson",
                meta: { label: "我是爸爸", icon: ManOutlinedIcon },
                children: [
                    {
                        path: "daughter",
                        name: "manyFatherDaughter",
                        component: () => import("@/views/many/father/daughter/index.vue"),
                        meta: { label: "我是闺女", icon: WomanOutlinedIcon },
                    },
                    {
                        path: "son",
                        name: "manyFatherSon",
                        component: MultistageRouterLayout,
                        redirect: "/many/father/son/grandson",
                        meta: { label: "我是儿子", icon: ManOutlinedIcon },
                        children: [
                            {
                                path: "grandson",
                                name: "manyFatherSonGrandson",
                                component: () =>
                                    import("@/views/many/father/son/grandson/index.vue"),
                                meta: { label: "我是孙子", icon: ManOutlinedIcon },
                            },
                        ],
                    },
                ],
            },
            {
                path: "father-bro",
                name: "manyFatherBro",
                component: () => import("@/views/many/father-bro/index.vue"),
                meta: { label: "我你大爷", icon: ManOutlinedIcon },
            },
            {
                path: "docs",
                name: "manyDocs",
                component: () => import("@/views/many/docs.vue"),
                meta: { label: "关系好乱，解释一下", icon: DocumentTextOutlineIcon },
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
