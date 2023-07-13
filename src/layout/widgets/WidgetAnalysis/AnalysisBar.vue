<template>
  <div ref="container" class="analysis-bar" :class="mode">
    <div v-for="item in source" :key="item" class="bar-wrap">
      <div :style="item" class="bar-item"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { size } from 'lodash'
import { onMounted, ref } from 'vue'

interface PropsType {
  data: Array<number>
  mode: 'vertical' | 'horizontal'
}
const props = defineProps<PropsType>()
const container = ref<HTMLElement>()
const source = ref<any>([])

onMounted(() => {
  const { width, height } = container.value!.getBoundingClientRect()
  const max = Math.max(...props.data)
  const gapNumber = size(props.data) - 1
  if (props.mode === 'vertical') {
    const cellWidth = (width - gapNumber * 4) / size(props.data)
    const cellHeight = (height - 10) / max
    source.value = props.data.map((item: any) => ({
      width: `${cellWidth}px`,
      height: `${item * cellHeight}px`,
    }))
  } else {
    const cellHeight = (height - gapNumber * 4) / size(props.data)
    const cellWidth = width / max
    source.value = props.data.map((item: any) => ({
      width: `${item * cellWidth}px`,
      height: `${cellHeight}px`,
    }))
  }
})
</script>
<style lang="scss" scoped>
.analysis-bar {
  height: 100% !important;

  &.vertical {
    display: flex;
    grid-gap: 4px;
    align-items: center;
    width: 100%;

    .bar-wrap {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 0;
      background-color: rgba(255, 255, 255, 4%);

      .bar-item {
        background-color: #fff;
        background-image: linear-gradient(to bottom, #15ffa6 0%, #f9fffd 100%);
      }
    }
  }

  &.horizontal {
    display: flex;
    flex-direction: column;
    grid-gap: 4px;

    .bar-wrap {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 0;
      background-color: rgba(255, 255, 255, 4%);

      .bar-item {
        background-color: #fff;
        background-image: linear-gradient(to right, #12ebf9 0%, #fcffff 100%);
      }
    }
  }
}
</style>
