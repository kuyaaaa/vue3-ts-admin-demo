<template>
    <n-switch
        :value="themeSwitchValue"
        :round="false"
        size="medium"
        @update:value="handleThemeChange"
    >
        <template #checked-icon>🌙</template>
        <template #unchecked-icon>☀</template>
    </n-switch>
</template>

<script lang="ts" setup>
const systemStore = useSystemStore();

// 主题切换按钮
const themeSwitchValue = computed(() => systemStore.config.theme === "dark");

const handleThemeChange = (isDark: boolean) => {
    systemStore.config.theme = isDark ? "dark" : "normal";
    systemStore.setSystemConfig();
};
</script>
