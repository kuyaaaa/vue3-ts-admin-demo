<template>
    <n-breadcrumb>
        <n-breadcrumb-item
            v-for="item in breadcrumbList"
            :key="item.name"
            @click="handleBreadcrumbClick(item)"
        >
            <n-icon v-if="item.meta.icon">
                <component :is="item.meta.icon"></component>
            </n-icon>
            {{ item.meta.label }}
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NBreadcrumb, NBreadcrumbItem, NIcon } from "naive-ui";
import type { RouteLocationMatched } from "vue-router";

const breadcrumbList = computed(() => {
    const { matched } = window.$router.currentRoute.value;
    const result: RouteLocationMatched[] = [];
    matched.forEach(item => {
        if (item.path !== "/" && !item.meta.hidden && item.meta.label) {
            result.push(item);
        }
    });
    return result;
});

const handleBreadcrumbClick = ({ name }: RouteLocationMatched) => {
    window.$router.push({ name });
};
</script>

<style lang="scss" scoped></style>
