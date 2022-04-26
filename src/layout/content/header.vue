<template>
    <div class="header-container">
        <n-dropdown trigger="hover" :options="options" @select="handleDropdownClick">
            <n-avatar size="large" :src="avatarUrl"></n-avatar>
        </n-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { NAvatar, NDropdown } from "naive-ui";
import {
    PersonCircleOutline as PersonCircleOutlineIcon,
    LogInOutline as LogInOutlineIcon,
} from "@vicons/ionicons5";
import { renderIcon } from "@/utils/render";
import useLoginStore from "@/store/modules/login";

const avatarUrl = "https://avatars.githubusercontent.com/u/54495986?v=4";

const options = [
    {
        label: "个人信息",
        key: "userInfo",
        icon: renderIcon(PersonCircleOutlineIcon),
    },
    {
        type: "divider",
        key: "d1",
    },
    {
        label: "登出",
        key: "loginOut",
        icon: renderIcon(LogInOutlineIcon),
    },
];

const loginStore = useLoginStore();

const handleDropdownClick = (key: string) => {
    switch (key) {
        case "userInfo":
            window.$router.push({ name: "userInfo" });
            break;
        case "loginOut":
            loginStore.logout();
            break;
        default:
            console.error(`u-dropdown has no key: ${key}`);
            break;
    }
};
</script>

<style lang="scss" scoped>
.header-container {
    height: 100%;
    @include flex-center-main;
    justify-content: flex-end;
}
</style>
