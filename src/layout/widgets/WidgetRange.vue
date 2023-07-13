<template>
  <BasePanel title="面板一">
    <BaseTable :columns="columns" :data="data" />
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '@/components/BasePanel/index.vue'
import BaseTable from '@/components/BaseTable/index.vue'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'LAST',
    dataIndex: 'last',
  },
  {
    title: 'CHG',
    dataIndex: 'chg',
  },
  {
    title: 'CHG(%)',
    dataIndex: 'rate',
  },
  {
    title: 'P/L',
    dataIndex: 'pl',
  },
]

const data = [
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
  {
    name: 'AAPL',
    last: 125.32,
    chg: 0.18,
    rate: 0.14,
    pl: 0.02,
  },
]
</script>
<!-- <style lang="scss" scoped></style> -->
