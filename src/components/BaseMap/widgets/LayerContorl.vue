<template>
  <BasePanel>
    <div class="layer-control">
      <div
        v-for="(item, index) in layerSource"
        :key="index"
        class="layer-contro-item"
        @click="onclick(item)"
      >
        <span class="checkbox" :class="{ active: item.visible }"></span>
        <span class="label" :class="{ active: item.visible }">
          {{ item.key }}
        </span>
      </div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '../../BasePanel/index.vue'

interface PropsType {
  layerSource: any
}
defineProps<PropsType>()

const onclick = (item: any) => {
  item.visible = !item.visible
  item.toggle(item.key)
}
</script>
<style lang="scss" scoped>
.layer-control {
  width: 150px;
  overflow: hidden;
  color: $color-text-1;

  .layer-contro-item {
    display: flex;
    grid-gap: 8px;
    align-items: center;
    height: 24px;
    cursor: pointer;
    user-select: none;

    &:nth-child(odd) {
      background-color: rgba(255, 255, 255, 10%);
    }

    .checkbox {
      flex-shrink: 0;
      width: 12px;
      height: 12px;
      border: 1px solid rgba(255, 255, 255, 30%);

      &.active {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $primary-1;

        &::after {
          width: 6px;
          height: 6px;
          content: '';
          background-color: $primary-1;
        }
      }
    }

    .label {
      font-size: 13px;
      color: $color-text-2;
      white-space: nowrap;

      // &.active {
      //   color: $primary-1;
      // }
    }
  }
}
</style>
