<template>
  <div class="layout">
    <div class="layout-header">
      <WidgetBrand />
      <WidgetClock />
    </div>
    <div class="layout-left">
      <WidgetRange />
      <WidgetAnalysis />
      <WidgetStatistics />
    </div>
    <div class="layout-right">
      <WidgetProfile />
      <WidgetTendency />
      <WidgetParse />
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import WidgetBrand from './widgets/WidgetBrand.vue'
import WidgetClock from './widgets/WidgetClock.vue'
import WidgetRange from './widgets/WidgetRange.vue'
import WidgetAnalysis from './widgets/WidgetAnalysis/index.vue'
import WidgetStatistics from './widgets/WidgetStatistics.vue'
import WidgetProfile from './widgets/WidgetProfile/index.vue'
import WidgetTendency from './widgets/WidgetTendency.vue'
import WidgetParse from './widgets/WidgetParse/index.vue'
</script>
<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100vw;
  height: 100vh;

  .layout-header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 0 15px;
    background-color: $panel-bgc;
    border-bottom: 1px solid #33353b;
    backdrop-filter: $panel-filter;
  }

  .layout-left {
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 9999;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr auto;
    grid-template-rows: repeat(2, minmax(0, 1fr)) 155px;
    grid-gap: 10px;
    width: 400px;
    height: calc(100vh - 90px);
    padding: 0 10px;
  }

  .layout-right {
    position: absolute;
    top: 80px;
    right: 0;
    z-index: 9999;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 1fr auto;
    grid-template-rows: 122px repeat(2, minmax(0, 1fr));

    // display: flex;
    // flex-direction: column;
    grid-gap: 10px;
    width: 400px;
    height: calc(100vh - 90px);
    padding: 15px;
  }
}
</style>
