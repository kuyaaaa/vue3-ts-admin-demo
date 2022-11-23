<template>
    <n-layout-sider
        collapse-mode="width"
        :collapsed-width="collapsedWidth"
        :collapsed="collapsed"
        :width="siderWidth"
        :native-scrollbar="false"
        class="layout-sider"
        bordered
        show-trigger="bar"
        @collapse="collapsed = true"
        @expand="collapsed = false"
        @update:collapsed="(collapsed: boolean) => emit('collapsed', collapsed)"
    >
        <n-space :wrap="false" class="logo-container" align="center" justify="center">
            <n-image :width="collapsedIconSize" :src="PROJECT_MENU_LOGO" preview-disabled />
            <n-text v-if="!collapsed" class="text-nowrap">{{ PROJECT_MENU_TITLE }}</n-text>
        </n-space>
        <n-divider class="divider-style" />
        <n-menu
            :options="menuOptions"
            :value="currentMenu"
            :collapsed="collapsed"
            :collapsed-width="collapsedWidth"
            :collapsed-icon-size="collapsedIconSize"
        />
    </n-layout-sider>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import useMenuStore from "@/store/modules/menu";
import { PROJECT_MENU_TITLE, PROJECT_MENU_LOGO } from "@/config/system";

const emit = defineEmits<{
    (event: "collapsed", collapsed: boolean): void;
}>();

const menuStore = useMenuStore();

const { list: menuOptions } = storeToRefs(menuStore);

// 部分配置
const siderWidth = 240;
const collapsedWidth = 64;
const collapsedIconSize = 22;

onMounted(async () => {
    if (!menuStore.list.length) {
        await menuStore.createMenuList();
    }
});

/** 当前路由对应的菜单name */
const currentMenu = computed(() => {
    return String(window.$router.currentRoute.value.name);
});

const collapsed = ref(false);
</script>

<style lang="scss" scoped>
.logo-container {
    height: v-bind('(collapsedIconSize + 10) + "px"');
    padding: 10px 0;
    font-size: 22px;
    font-weight: 700;
}

.divider-style {
    margin: 5px 0;
    padding: 0 10px;
}
</style>
