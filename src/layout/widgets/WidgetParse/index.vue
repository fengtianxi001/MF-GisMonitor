<template>
  <BasePanel title="面板三">
    <div class="widget-parse">
      <Process />
      <Statistics />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '@/components/BasePanel/index.vue'
import Process from './Process.vue'
import Statistics from './Statistics.vue'
</script>

<style lang="scss" scoped>
.widget-parse {
  display: flex;
  grid-gap: 10px;
  width: 100%;
  height: 400px;
}
</style>
