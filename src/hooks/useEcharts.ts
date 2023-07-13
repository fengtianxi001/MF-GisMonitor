import { nextTick, onMounted, onUnmounted, ref, shallowRef } from 'vue'
import * as echarts from 'echarts'
import { isElement } from 'lodash'

export function useEcharts() {
  const container = ref()
  const chart = shallowRef()

  const resize = () => {
    chart.value?.resize()
  }
  const boostrap = () => {
    chart.value = echarts.init(container.value)
    window.addEventListener('resize', resize)
  }
  const setOption = (option: any) => {
    if (!chart.value) {
      boostrap()
    }
    chart.value?.setOption(option)
  }

  onMounted(() => {
    nextTick(() => {
      if (isElement(container.value)) {
        boostrap()
      }
    })
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })
  return { container, chart, setOption, resize }
}

export default useEcharts
