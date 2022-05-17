<template>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :max-height="500" />
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { NDataTable, NButton } from "naive-ui";
import type { PaginationProps, DataTableColumns } from "naive-ui";

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
</script>

<style lang="scss" scoped></style>
