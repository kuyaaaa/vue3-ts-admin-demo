<template>
    <n-card class="content-card">
        <n-grid x-gap="12" :cols="5">
            <n-gi>
                <n-input
                    v-model:value="searchParams.keyword"
                    type="text"
                    clearable
                    placeholder="请输入关键字"
                />
            </n-gi>
            <n-gi :span="2">
                <n-input-group>
                    <n-date-picker v-model:value="searchParams.date" clearable />
                    <n-time-picker v-model:value="searchParams.time" clearable />
                </n-input-group>
            </n-gi>
            <n-gi :offset="1" style="text-align: right">
                <n-button type="primary">
                    <template #icon>
                        <n-icon>
                            <search-icon />
                        </n-icon>
                    </template>
                    搜索
                </n-button>
            </n-gi>
        </n-grid>
    </n-card>
    <n-card class="content-card">
        <n-data-table
            :columns="columns"
            :data="data"
            :single-line="false"
            :pagination="pagination"
        />
    </n-card>
</template>

<script lang="ts" setup>
import { h, reactive, ref } from "vue";
import {
    NCard,
    NGrid,
    NGi,
    NDataTable,
    NIcon,
    NButton,
    NInput,
    NInputGroup,
    NDatePicker,
    NTimePicker,
} from "naive-ui";
import type { PaginationProps, DataTableColumns } from "naive-ui";
import { Search as SearchIcon } from "@vicons/ionicons5";

type Song = {
    no: number;
    title: string;
    length: string;
};

const pagination: PaginationProps = {
    showSizePicker: true,
    pageSizes: [10, 20, 30, 40],
};

const dataMock: Song[] = [
    { no: 3, title: "Wonder Wall", length: "4:18" },
    { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
];

const data = ref(dataMock);

const columns: DataTableColumns<Song> = [
    { title: "No", key: "no" },
    {
        title: "Title",
        key: "title",
        ellipsis: {
            tooltip: true,
        },
    },
    { title: "Length", key: "length" },
    {
        title: "Action",
        key: "actions",
        render(row: Song) {
            return h(
                NButton,
                {
                    strong: true,
                    size: "small",
                    type: "primary",
                    onClick: () => {
                        window.$message.info(`Play ${row.title}`);
                    },
                },
                { default: () => "Play" }
            );
        },
    },
];

const searchParams = reactive({
    keyword: "",
    date: null,
    time: null,
});
</script>

<style lang="scss" scoped></style>
