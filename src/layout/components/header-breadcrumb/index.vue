<template>
    <n-breadcrumb>
        <n-breadcrumb-item v-for="item in breadcrumbList" :key="item.name" :clickable="false">
            <component :is="item.icon" v-if="item.icon"></component>
            {{ item.meta.label }}
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { renderIconStr } from "@/utils/render";

const breadcrumbList = ref<any[]>([]);
watch(
    () => window.$router.currentRoute.value,
    async val => {
        const { matched } = val;
        const result: any[] = [];
        for (let i = 0; i < matched.length; i++) {
            const item = matched[i];
            if (item.path !== "/" && item.meta.label) {
                result.push({
                    ...item,
                    icon: await renderIconStr(item.meta?.icon),
                });
            }
        }
        breadcrumbList.value = result;
    },
    { immediate: true }
);
</script>

<style lang="scss" scoped></style>
