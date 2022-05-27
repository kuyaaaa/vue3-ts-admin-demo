<template>
    <n-space class="header-container" align="center" justify="end">
        <header-controller />
        <header-user />
    </n-space>
</template>

<script lang="ts" setup>
import { NSpace } from "naive-ui";
import HeaderController from "../components/header-controller.vue";
import HeaderUser from "../components/header-user.vue";
</script>

<style lang="scss" scoped>
.header-container {
    height: 100%;
}
</style>
