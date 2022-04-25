<template>
    <n-menu :options="menuOptions" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NMenu } from "naive-ui";
import useMenuStore from "@/store/modules/menu";

const menuStore = useMenuStore();

const menuOptions = ref<any[]>([]);

if (!menuStore.list.length) {
    menuStore.createMenuList();
}
menuOptions.value = menuStore.list;
</script>

<style lang="scss" scoped></style>
