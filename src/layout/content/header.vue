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
                <n-avatar style="display: block" size="medium" :src="userInfo.avatar"></n-avatar>
            </n-dropdown>
        </n-space>
    </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { NSpace, NAvatar, NDropdown, NSwitch, darkTheme, NText } from "naive-ui";
import {
    PersonCircleOutline as PersonCircleOutlineIcon,
    LogInOutline as LogInOutlineIcon,
} from "@vicons/ionicons5";
import { storeToRefs } from "pinia";
import { renderIcon } from "@/utils/render";
import useLoginStore from "@/store/modules/login";
import useSystemStore from "@/store/modules/system";

const loginStore = useLoginStore();
const { userInfo } = storeToRefs(loginStore);

const renderCustomDropdownHeader = () => {
    return h(
        "div",
        {
            style: "max-width: 200px; display: flex; align-items: center; padding: 8px 12px;",
        },
        [
            h("div", null, [
                h("div", null, [
                    h(NText, { depth: 2 }, { default: () => userInfo.value.userName }),
                ]),
                h("div", { style: "font-size: 12px; margin-top: 8px;" }, [
                    h(NText, { depth: 3 }, { default: () => userInfo.value.signature }),
                ]),
            ]),
        ]
    );
};

const options = [
    {
        key: "header",
        type: "render",
        render: renderCustomDropdownHeader,
    },
    {
        key: "header-divider",
        type: "divider",
    },
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
        label: "退出账号",
        key: "loginOut",
        icon: renderIcon(LogInOutlineIcon),
    },
];

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
