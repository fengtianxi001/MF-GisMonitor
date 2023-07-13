<template>
  <table v-autoscroll="20" class="base-table">
    <thead class="table-header">
      <tr>
        <th v-for="(column, index) in columns" :key="index" class="table-th">
          <span>{{ column.title }}</span>
        </th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr
        v-for="(row, rowIndex) in dataSource"
        :key="rowIndex"
        class="table-tr"
      >
        <td v-for="(col, colIndex) in row" :key="colIndex" class="table-td">
          <span>{{ col }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { forEach } from 'lodash'
import { computed } from 'vue'

interface PropsType {
  columns: Array<any>
  data: Array<any>
}
const props = defineProps<PropsType>()

const dataSource = computed(() => {
  const result: any[] = []
  forEach(props.data, (item: any) => {
    const row: any[] = []
    forEach(props.columns, (column: any) => {
      row.push(item[column.dataIndex])
    })
    result.push(row)
  })
  return result
})
</script>
<style lang="scss" scoped>
.base-table {
  width: 100%;
  min-width: 100%;
  margin: 0;
  overflow: auto;
  font-size: 14px;
  font-weight: normal;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: separate;

  .table-header {
    position: sticky;
    top: 0;

    .table-th {
      font-weight: 500;
      line-height: 2.5;
      text-align: center;
      background-color: #61c78e;
    }
  }

  .table-body {
    .table-tr {
      &:nth-child(odd) {
        background-color: rgba(255, 255, 255, 10%);
      }

      .table-td {
        font-size: 13px;
        line-height: 2.4;
        color: $color-text-2;
        text-align: center;
      }
    }
  }
}
</style>
