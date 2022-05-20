<template>
    <div class="header-container">
        <n-space class="header-container" align="center" justify="end">
            <n-switch
                v-model:value="themeSwitchValue"
                :round="false"
                size="medium"
                @update:value="handleThemeChange"
            >
                <template #checked-icon>🌙</template>
                <template #unchecked-icon>☀</template>
            </n-switch>
            <n-dropdown trigger="hover" :options="options" @select="handleDropdownClick">
                <n-avatar style="display: block" size="medium" :src="avatarUrl"></n-avatar>
            </n-dropdown>
        </n-space>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NSpace, NAvatar, NDropdown, NSwitch, darkTheme } from "naive-ui";
import {
    PersonCircleOutline as PersonCircleOutlineIcon,
    LogInOutline as LogInOutlineIcon,
} from "@vicons/ionicons5";
import { renderIcon } from "@/utils/render";
import useLoginStore from "@/store/modules/login";
import useSystemStore from "@/store/modules/system";

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

const systemStore = useSystemStore();

const themeSwitchValue = ref(false);
const handleThemeChange = (isDark: boolean) => {
    systemStore.theme = isDark ? darkTheme : null;
};
</script>

<style lang="scss" scoped>
.header-container {
    height: 100%;
}
</style>
