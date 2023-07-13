<template>
  <BasePanel title="面板二">
    <AnalysisStatistics />
    <AnalysisChart />
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '@/components/BasePanel/index.vue'
import AnalysisStatistics from './AnalysisStatistics.vue'
import AnalysisChart from './AnalysisChart.vue'
</script>
