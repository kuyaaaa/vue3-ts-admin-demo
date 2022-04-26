<template>
    <div class="header-container">
        <n-avatar size="large" :src="avatarUrl"></n-avatar>
    </div>
</template>

<script lang="ts" setup>
import { NAvatar } from "naive-ui";

const avatarUrl = "https://avatars.githubusercontent.com/u/54495986?v=4";
</script>

<style lang="scss" scoped>
.header-container {
    height: 100%;
    @include flex-center-main;
    justify-content: flex-end;
}
</style>
