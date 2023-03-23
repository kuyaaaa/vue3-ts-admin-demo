<template>
    <n-tooltip>
        <template #trigger>
            <n-button text style="font-size: 24px" @click="show = true">
                <n-icon>
                    <setting-icon />
                </n-icon>
            </n-button>
        </template>
        系统设置
    </n-tooltip>
    <drawer-setting v-model:show="show" />
</template>

<script lang="ts" setup>
import { SettingsOutline as SettingIcon } from "@vicons/ionicons5";
import DrawerSetting from "../drawer-setting/index.vue";

const show = ref(false);
</script>

<style lang="scss" scoped></style>
