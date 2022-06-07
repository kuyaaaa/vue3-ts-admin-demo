<template>
    <n-space class="header-container" align="center" justify="end">
        <header-controller />
        <header-user />
    </n-space>
    <n-divider />
    <div class="bread-container">
        <header-breadcrumb />
    </div>
</template>

<script lang="ts" setup>
import HeaderController from "../components/header-controller/index.vue";
import HeaderUser from "../components/header-user.vue";
import HeaderBreadcrumb from "../components/header-breadcrumb.vue";
</script>

<style lang="scss" scoped>
.header-container {
    padding: 0 15px;
    height: 50px;
}

.bread-container {
    height: 30px;
    padding: 0 10px;
    @include flex-center-main;
}

.n-divider:not(.n-divider--vertical) {
    margin: 0;
}
</style>
