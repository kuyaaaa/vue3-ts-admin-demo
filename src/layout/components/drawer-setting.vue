<template>
    <n-drawer v-model:show="show" :width="420">
        <n-drawer-content title="系统设置" closable>
            <n-config-provider :theme-overrides="{ common: config }">
                <n-divider title-placement="left">主题样式</n-divider>
                <n-collapse>
                    <n-collapse-item
                        v-for="themeConfigItem in themeConfigList"
                        :key="themeConfigItem.baseKey"
                        :title="`type = [${themeConfigItem.baseKey}]`"
                        :name="themeConfigItem.baseKey"
                    >
                        <n-space vertical>
                            <n-space>
                                <n-button :type="themeConfigItem.baseKey">
                                    {{ themeConfigItem.baseKey }}
                                </n-button>
                                <n-button :type="themeConfigItem.baseKey" secondary>
                                    {{ themeConfigItem.baseKey }}
                                </n-button>
                                <n-button :type="themeConfigItem.baseKey" ghost>
                                    {{ themeConfigItem.baseKey }}
                                </n-button>
                            </n-space>
                            <n-grid
                                v-for="themeConfigOpt in themeConfigItem.configList"
                                :key="themeConfigOpt.key"
                                x-gap="12"
                                y-gap="8"
                                :cols="5"
                            >
                                <n-gi :span="2">
                                    <n-text>{{ themeConfigOpt.name }}</n-text>
                                </n-gi>
                                <n-gi :span="3">
                                    <n-color-picker
                                        v-model:value="
                                            // @ts-ignore
                                            config[themeConfigItem.baseKey + themeConfigOpt.key]
                                        "
                                        :modes="['hex']"
                                    />
                                </n-gi>
                            </n-grid>
                        </n-space>
                    </n-collapse-item>
                </n-collapse>
            </n-config-provider>
        </n-drawer-content>
    </n-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { cloneDeep } from "lodash";
import useSystemStore from "@/store/modules/system";
import { defaultThemeCommonConfig } from "@/config/theme";

const themeConfigList = [
    {
        baseKey: "primary",
        configList: [
            { name: "基础颜色", key: "Color" },
            { name: "hover颜色", key: "ColorHover" },
            { name: "pressed颜色", key: "ColorPressed" },
            { name: "suppl颜色", key: "ColorSuppl" },
        ],
    },
    {
        baseKey: "info",
        configList: [
            { name: "基础颜色", key: "Color" },
            { name: "hover颜色", key: "ColorHover" },
            { name: "pressed颜色", key: "ColorPressed" },
            { name: "suppl颜色", key: "ColorSuppl" },
        ],
    },
    {
        baseKey: "success",
        configList: [
            { name: "基础颜色", key: "Color" },
            { name: "hover颜色", key: "ColorHover" },
            { name: "pressed颜色", key: "ColorPressed" },
            { name: "suppl颜色", key: "ColorSuppl" },
        ],
    },
    {
        baseKey: "warning",
        configList: [
            { name: "基础颜色", key: "Color" },
            { name: "hover颜色", key: "ColorHover" },
            { name: "pressed颜色", key: "ColorPressed" },
            { name: "suppl颜色", key: "ColorSuppl" },
        ],
    },
    {
        baseKey: "error",
        configList: [
            { name: "基础颜色", key: "Color" },
            { name: "hover颜色", key: "ColorHover" },
            { name: "pressed颜色", key: "ColorPressed" },
            { name: "suppl颜色", key: "ColorSuppl" },
        ],
    },
];

const props = defineProps<{ show: boolean }>();
const emit = defineEmits<{ (event: "update:show", show: boolean): void }>();

const show = computed<boolean>({
    get() {
        return props.show;
    },
    set(val) {
        emit("update:show", val);
    },
});

const systemStore = useSystemStore();
const config = ref(cloneDeep(systemStore.config.themeOverridesCommon || defaultThemeCommonConfig));
</script>

<style lang="scss" scoped>
.n-divider {
    margin: 0 0 6px 0;
}

.n-grid > div {
    @include flex-center-main;
}
</style>
