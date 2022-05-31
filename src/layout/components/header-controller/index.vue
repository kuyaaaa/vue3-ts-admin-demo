<template>
    <n-space align="center" size="small">
        <route-search />
        <fullscreen-btn />
        <theme-switch />
    </n-space>
</template>

<script lang="ts" setup>
import { NSpace } from "naive-ui";
import ThemeSwitch from "./theme-switch.vue";
import FullscreenBtn from "./fullscreen-btn.vue";
import RouteSearch from "./route-search.vue";
</script>

<style lang="scss" scoped></style>
