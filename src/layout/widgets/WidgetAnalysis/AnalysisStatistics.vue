<template>
  <div class="analysis-statistics">
    <div class="statistics-item">
      <div class="label">Parameter</div>
      <div class="value">400</div>
      <AnalysisBar
        class="chart"
        mode="vertical"
        :data="[10, 4, 2, 5, 7, 5, 8]"
      />
    </div>
    <div class="statistics-item">
      <div class="label">Parameter</div>
      <div class="value">400</div>
      <AnalysisBar class="chart" mode="horizontal" :data="[10, 4, 2, 5]" />
    </div>
  </div>
</template>
<script setup lang="ts">
import AnalysisBar from './AnalysisBar.vue'
</script>
<style lang="scss" scoped>
.analysis-statistics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #33353b;

  .statistics-item {
    display: grid;
    grid-template-columns: 1fr 90px;
    grid-column-gap: 10px;
    align-items: center;
    width: 100%;

    .label {
      grid-column: 1;
      font-size: 12px;
      font-weight: bold;
      color: $color-text-2;
    }

    .value {
      grid-column: 1;
      font-family: Num, sans-serif;
      font-size: 30px;
      font-weight: bold;
      color: $color-text-1;
    }

    .chart {
      flex: 1;
      grid-row: 1 / span 2;
      grid-column: 2;
    }
  }
}
</style>
