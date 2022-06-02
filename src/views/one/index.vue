<template>
    <n-card class="card-container">
        <n-p>单级菜单需要在router中如下配置：</n-p>
        <n-code :code="oneRouteCode" language="javascript" />
        <n-blockquote>
            <n-p
                >单级菜单的所有属性在<n-text code>children</n-text>的<n-text code>meta</n-text
                >中定义。</n-p
            >
            <n-p>
                必须给单级菜单包裹在一层<n-text code>Layout</n-text>组件下的<n-text code
                    >children</n-text
                >中，并且在外层路由的<n-text code>meta</n-text>中定义<n-text code>onlyFirst</n-text
                >字段标识。
            </n-p>
        </n-blockquote>
    </n-card>
</template>

<script lang="ts" setup>
const oneRouteCode = `{
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
},`;
</script>

<style lang="scss" scoped></style>
