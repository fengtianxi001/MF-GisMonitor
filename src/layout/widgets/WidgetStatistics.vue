<template>
  <BasePanel title="面板三">
    <div class="widget-statistics">
      <div ref="container" class="chart-main"></div>
      <div class="chart-bg"></div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '@/components/BasePanel/index.vue'
import { useEcharts } from '@/hooks/useEcharts'
import { onMounted } from 'vue'

const { container, setOption } = useEcharts()
const generateOptions = () => {
  const xdata: string[] = []
  const source: number[] = []
  for (let i = 0; i < 200; i += 1) {
    xdata.push(`A${i}`)
    source.push(Math.random() * 100 + 10)
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
        data: source,
        emphasis: {
          focus: 'series',
        },
        animationDelay(idx) {
          return idx * 10
        },
        itemStyle: {
          normal: {
            color(params) {
              const index = params.dataIndex
              if (index <= 80) {
                return '#fb710d'
              }
              if (index >= 120) {
                return '#555555'
              }
              return '#a4a5a6'
            },
          },
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
.widget-statistics {
  position: relative;
  width: 100%;
  height: 100%;

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
