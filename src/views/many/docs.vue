<template>
    <n-card class="card-container">
        <n-p>多级需要在router中如下配置：</n-p>
        <n-code :code="oneRouteCode" language="javascript" />
        <n-blockquote>
            <n-p>
                最外层路由的<n-text code>component</n-text>需要为<n-text code>Layout</n-text
                >，而作为中间层的过渡元素的<n-text code>component </n-text>需要为<n-text code
                    >MultistageRouterLayout</n-text
                >即
                <n-text code>@/components/multistage-router-layout.vue</n-text
                >组件，该组件只有一个<n-text code>router-view</n-text> 标签，如果不添加该<n-text
                    code
                    >component</n-text
                >，多级嵌套下的页面会连同布局容器一直套娃。
            </n-p>
        </n-blockquote>
    </n-card>
</template>

<script lang="ts" setup>
const oneRouteCode = `
{
    path: "/many",
    name: "many",
    component: Layout,
    redirect: "/many/father/son/grandson",
    meta: { label: "多级菜单", icon: ApartmentOutlinedIcon },
    children: [
        {
            path: "father",
            name: "manyFather",
            component: MultistageRouterLayout,
            redirect: "/many/father/son/grandson",
            meta: { label: "我是爸爸", icon: ManOutlinedIcon },
            children: [
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
    ],
},`;
</script>

<style lang="scss" scoped></style>
