<template>
    <n-select
        filterable
        placeholder="搜索页面"
        :options="options"
        :loading="loading"
        size="small"
        :consistent-menu-width="false"
        clearable
        remote
        :on-update:value="handleSelect"
        @search="handleSearch"
    />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { SelectOption } from "naive-ui";
import type { RouteRecordRaw } from "vue-router";
import { cloneDeep, replace, debounce } from "lodash-es";

const loading = ref(false);
/** 菜单列表的路径分隔符 */
const DIVIDER_KEY = ">";

const ROUTES = window.$router.options.routes;
const dealRouteChildren = (routeChildren: RouteRecordRaw[], fatherLabel: string | undefined) => {
    const resultList: SelectOption[] = [];

    routeChildren.forEach(child => {
        if (child.meta?.label) {
            const thisLabel = fatherLabel
                ? `${fatherLabel} ${DIVIDER_KEY} ${child.meta.label}`
                : child.meta.label;
            if (child.children) {
                resultList.push(...dealRouteChildren(child.children, thisLabel));
            } else {
                resultList.push({
                    label: thisLabel,
                    value: String(child.name),
                });
            }
        }
    });

    return resultList;
};
const makeOptions = () => {
    const resultList: SelectOption[] = [];

    ROUTES.forEach(item => {
        if (item.children) {
            resultList.push(...dealRouteChildren(item.children, item.meta?.label));
        }
        // 外链情况单独处理
        else if (item.meta?.outLink) {
            resultList.push({
                label: item.meta?.label || "外部链接",
                value: `outLink:${item.meta.outLink}`,
            });
        }
    });

    return resultList;
};
const fullRoutesOptions = makeOptions();
const options = ref(cloneDeep(fullRoutesOptions));

const handleSearch = debounce((query: string) => {
    loading.value = true;
    if (!query.length) {
        options.value = fullRoutesOptions;
    } else {
        options.value = fullRoutesOptions.filter(item => ~String(item.label).indexOf(query));
    }
    loading.value = false;
}, 200);

const handleSelect = (value: string) => {
    if (!value) {
        return;
    }
    if (~value.indexOf("outLink:")) {
        window.open(replace(value, "outLink:", ""));
    } else {
        window.$router.push({ name: value });
    }
};
</script>
