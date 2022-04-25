<template>
    <n-menu :options="menuOptions" :value="currentMenu" />
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { NMenu } from "naive-ui";
import useMenuStore from "@/store/modules/menu";

const menuStore = useMenuStore();

const menuOptions = ref<any[]>([]);

if (!menuStore.list.length) {
    menuStore.createMenuList();
}
menuOptions.value = menuStore.list;

/** 当前路由对应的菜单name */
const currentMenu = computed(() => {
    return String(window.$router.currentRoute.value.name);
});
</script>

<style lang="scss" scoped></style>
