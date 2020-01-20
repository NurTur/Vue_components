<template>
    <el-table
    :data="tableData"
    :formatter="formatter"
    :stripe="stripe"
    :border="border"
    style="width: 100%">
      <slot></slot>
    </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Function,
      required: false,
    },
    stripe: {
      type: Boolean,
      required: false,
      default: false,
    },
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    formatter(row, column) {
      console.log(column);
      return row.address;
    },
  },
};
</script>
