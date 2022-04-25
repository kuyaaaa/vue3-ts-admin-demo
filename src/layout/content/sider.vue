<template>
    <n-layout-sider
        collapse-mode="width"
        :collapsed-width="64"
        :collapsed="collapsed"
        :width="240"
        :native-scrollbar="false"
        class="layout-sider"
        bordered
        show-trigger="bar"
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
        <n-menu
            :options="menuOptions"
            :value="currentMenu"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
        />
    </n-layout-sider>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { NLayoutSider, NMenu } from "naive-ui";
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

const collapsed = ref(false);
</script>

<style lang="scss" scoped></style>
