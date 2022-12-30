<template>
    <n-drawer v-model:show="show" :width="420">
        <n-drawer-content title="系统设置" :native-scrollbar="false" closable>
            <n-config-provider :theme-overrides="{ common: config }">
                <n-divider title-placement="left">主题样式</n-divider>
                <n-collapse :default-expanded-names="[colorTypeList[0]]">
                    <n-collapse-item
                        v-for="colorType in colorTypeList"
                        :key="colorType"
                        :title="`${colorType}类型`"
                        :name="colorType"
                    >
                        <n-space vertical>
                            <n-space>
                                <n-button :type="colorType">
                                    {{ colorType }}
                                </n-button>
                                <n-button :type="colorType" secondary>
                                    {{ colorType }}
                                </n-button>
                                <n-button :type="colorType" ghost>
                                    {{ colorType }}
                                </n-button>
                            </n-space>
                            <n-grid
                                v-for="themeConfigOpt in colorKeyList"
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
                                            config[colorType + themeConfigOpt.key]
                                        "
                                        :modes="['hex']"
                                    />
                                </n-gi>
                            </n-grid>
                        </n-space>
                    </n-collapse-item>
                    <n-collapse-item title="滚动条样式" name="scrollBar">
                        <n-grid x-gap="12" y-gap="8" :cols="5">
                            <n-gi :span="5">
                                <n-scrollbar style="max-height: 120px" trigger="none">
                                    <n-p v-for="num in 20" :key="num">俺是一行文字哦~</n-p>
                                </n-scrollbar>
                            </n-gi>
                            <n-gi :span="2">
                                <n-text>滚动条宽度</n-text>
                            </n-gi>
                            <n-gi :span="3">
                                <input-number-suffix
                                    v-model:value="config['scrollbarWidth']"
                                    suffix="px"
                                />
                            </n-gi>
                            <n-gi :span="2">
                                <n-text>滚动条高度</n-text>
                            </n-gi>
                            <n-gi :span="3">
                                <input-number-suffix
                                    v-model:value="config['scrollbarHeight']"
                                    suffix="px"
                                />
                            </n-gi>
                            <n-gi :span="2">
                                <n-text>滚动条圆角</n-text>
                            </n-gi>
                            <n-gi :span="3">
                                <input-number-suffix
                                    v-model:value="config['scrollbarBorderRadius']"
                                    suffix="px"
                                />
                            </n-gi>
                            <n-gi :span="2">
                                <n-text>滚动条颜色</n-text>
                            </n-gi>
                            <n-gi :span="3">
                                <n-color-picker
                                    v-model:value="config['scrollbarColor']"
                                    :modes="['rgb']"
                                />
                            </n-gi>
                            <n-gi :span="2">
                                <n-text>滚动条悬浮颜色</n-text>
                            </n-gi>
                            <n-gi :span="3">
                                <n-color-picker
                                    v-model:value="config['scrollbarColorHover']"
                                    :modes="['rgb']"
                                />
                            </n-gi>
                        </n-grid>
                    </n-collapse-item>
                </n-collapse>
            </n-config-provider>
            <template #footer>
                <n-button style="margin-right: auto" type="info" ghost @click="handleReset">
                    重置
                </n-button>
                <n-space>
                    <n-button type="error" ghost @click="handleCancel">取消</n-button>
                    <n-button type="success" ghost @click="handleSave">保存</n-button>
                </n-space>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { cloneDeep } from "lodash-es";
import useSystemStore from "@/store/modules/system";
import { defaultThemeCommonConfig, colorKeyList, colorTypeList } from "@/config/theme";

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
const config = ref(cloneDeep(systemStore.themeOverridesCommon || defaultThemeCommonConfig));

const handleSave = () => {
    systemStore.themeOverridesCommon = {
        ...systemStore.themeOverridesCommon,
        ...config.value,
    };
    systemStore.setThemeOverridesCommon();
    show.value = false;
};

const handleCancel = () => {
    show.value = false;
    config.value = cloneDeep(systemStore.themeOverridesCommon || defaultThemeCommonConfig);
};

const handleReset = () => {
    systemStore.themeOverridesCommon = defaultThemeCommonConfig;
    systemStore.setThemeOverridesCommon();
    handleCancel();
};
</script>

<style lang="scss" scoped>
.n-divider {
    margin: 0 0 6px 0;
}

.n-grid > div {
    @include flex-center-main;
}
</style>
