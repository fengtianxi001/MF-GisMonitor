<template>
  <div
    class="base-panel"
    @mousedown.stop="() => {}"
    @mouseup.stop="() => {}"
    @wheel.stop="() => {}"
    @dblclick.stop="() => {}"
    @click.stop="() => {}"
    @mouseenter.stop="() => {}"
    @mouseleave.stop="() => {}"
  >
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface PropsType {
  title: string
}
defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.base-panel {
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  background-color: $panel-bgc;
  border: 1px solid #33353b;
  backdrop-filter: $panel-filter;

  .panel-body {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
