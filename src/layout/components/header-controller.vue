<template>
    <n-switch
        v-model:value="themeSwitchValue"
        :round="false"
        size="medium"
        @update:value="handleThemeChange"
    >
        <template #checked-icon>🌙</template>
        <template #unchecked-icon>☀</template>
    </n-switch>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { darkTheme, NSwitch } from "naive-ui";

import useSystemStore from "@/store/modules/system";

const systemStore = useSystemStore();

const themeSwitchValue = ref(false);
const handleThemeChange = (isDark: boolean) => {
    systemStore.theme = isDark ? darkTheme : null;
};
</script>
