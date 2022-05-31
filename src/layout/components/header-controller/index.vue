<template>
    <div class="header-controller-container">
        <fullscreen-btn />
        <theme-switch />
    </div>
</template>

<script lang="ts" setup>
import ThemeSwitch from "./theme-switch.vue";
import FullscreenBtn from "./fullscreen-btn.vue";
</script>

<style lang="scss" scoped>
.header-controller-container {
    @include flex-center-main-cross;

    > * + * {
        margin-left: 8px;
    }
}
</style>
