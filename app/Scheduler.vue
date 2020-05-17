<template>
  <div>
    <v-table :data="data" />
  </div>
</template>
<script>
import VTable from "./Table";
import { Table, TableColumn } from "element-ui";
import source from "../m";
const times = Array.from({ length: 12 })
  .fill(10)
  .map((item, index) => item + index)
  .map((item) => ({
    start: `${item}:00`,
    end: item === 21 ? `${item}:15` : `${item}:59`,
  }));

export default {
  name: "Scheduler",
  components: {
    ElTable: Table,
    ElTableColumn: TableColumn,
    VTable,
  },
  data() {
    return {
      data: source,
      maxHeight: window.screen.height,
    };
  },

  methods: {
    getItem(index) {
      return this.data[index];
    },
  },
};
</script>
