<template>
    <n-space align="center" size="small">
        <route-search />
        <theme-switch />
        <fullscreen-btn />
        <setting-btn />
    </n-space>
</template>

<script lang="ts" setup>
import ThemeSwitch from "./theme-switch.vue";
import FullscreenBtn from "./fullscreen-btn.vue";
import SettingBtn from "./setting-btn.vue";
import RouteSearch from "./route-search.vue";
</script>
