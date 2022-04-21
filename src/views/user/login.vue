<template>
    <div class="container">
        <n-card class="card-container">
            <n-h1 class="title">this is login</n-h1>
        </n-card>
    </div>
</template>

<script lang="ts" setup>
import { NCard, NH1 } from "naive-ui";
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
    @include flex-center-main-cross;
    flex-direction: column;
}

.card-container {
    width: 540px;
    @include box-shadow-base;

    .title {
        text-align: center;
    }
}
</style>
