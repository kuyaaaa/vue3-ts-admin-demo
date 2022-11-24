<template>
    <div class="view-tags-container">
        <n-scrollbar class="view-tags-scroll" x-scrollable>
            <n-space align="center" :wrap="false">
                <n-tag
                    v-for="(item, index) in routerHistory"
                    :key="item.path"
                    :type="currentRoute.path === item.path ? 'primary' : 'default'"
                    :bordered="!(currentRoute.path === item.path)"
                    :closable="!item.meta.isAffix"
                    @click="toTag(item.path)"
                    @close="handleTagClose(index)"
                >
                    {{ item.meta.label }}
                    <template #icon>
                        <component :is="item.iconNode"></component>
                    </template>
                </n-tag>
            </n-space>
        </n-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import useHistoryStore from "@/store/modules/history";

const historyStore = useHistoryStore();
const { routerHistory } = storeToRefs(historyStore);

const handleTagClose = (index: number) => {
    historyStore.removeRouterHistory(index);
};

const toTag = (path: string) => {
    window.$router.push(path);
};

const currentRoute = computed(() => {
    return window.$router.currentRoute.value;
});
</script>

<style lang="scss" scoped>
.view-tags-container {
    height: 100%;
    @include flex-center-main;

    :deep(.n-scrollbar) {
        overflow: auto hidden;

        .n-scrollbar-content,
        .n-space {
            height: 100%;
        }

        > .n-scrollbar-rail.n-scrollbar-rail--horizontal {
            bottom: 1px;
        }
    }

    .n-tag {
        cursor: pointer;
    }
}
</style>
