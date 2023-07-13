<template>
  <div class="analysis-chart">
    <div ref="container" class="chart-main"></div>
    <div class="chart-bg"></div>
  </div>
</template>
<script setup lang="ts">
import { useEcharts } from '@/hooks/useEcharts'
import { onMounted } from 'vue'

const { container, setOption } = useEcharts()
const generateOptions = () => {
  const xdata: string[] = []
  const sourceA: number[] = []
  const sourceB: number[] = []
  for (let i = 0; i < 50; i += 1) {
    xdata.push(`A${i}`)
    sourceA.push(Math.random() * 100 + 10)
    sourceB.push(-Math.abs(Math.random() * 100 + 10))
  }
  return {
    grid: {
      top: 0,
      left: 25,
      right: 0,
      bottom: 0,
    },
    xAxis: {
      data: xdata,
      show: false,
    },
    yAxis: {
      splitNumber: 14,
      splitLine: { show: false },
      axisLabel: {
        fontSize: 10,
      },
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        data: sourceA,
        emphasis: {
          focus: 'series',
        },
        animationDelay(idx) {
          return idx * 10
        },
        itemStyle: {
          color: '#13f7a1',
        },
      },
      {
        name: 'bar2',
        type: 'bar',
        data: sourceB,
        emphasis: {
          focus: 'series',
        },
        animationDelay(idx) {
          return idx * 10 + 100
        },
        itemStyle: {
          color: '#a4a5a7',
        },
      },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate(idx) {
      return idx * 5
    },
  }
}
onMounted(() => {
  setOption(generateOptions())
})
</script>
<style lang="scss" scoped>
.analysis-chart {
  position: relative;
  width: 100%;
  height: calc(100% - 87px);

  .chart-main {
    width: 100%;
    height: 100%;
  }

  .chart-bg {
    position: absolute;
    top: 0;
    left: 20px;
    z-index: 1;
    box-sizing: border-box;
    width: calc(100% - 20px);
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 6%) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 6%) 25%,
      50%,
      rgba(255, 255, 255, 6%) 75%,
      transparent 75%
    );
    background-size: 240px 8px;
    border: 1px solid #33353b;
  }
}
</style>
