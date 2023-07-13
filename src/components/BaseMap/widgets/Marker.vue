<template>
  <div class="marker">
    <div class="marker-icon"></div>
    <div class="marker-name">{{ name }}</div>
  </div>
</template>
<script setup lang="ts">
interface PropsType {
  name: string
}
defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.marker {
  position: relative;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .marker-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;

    &::after {
      position: absolute;
      width: 10px;
      height: 10px;
      content: '';
      background-color: #25ca89;
      border-radius: 50%;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 30%);
    }
  }

  .marker-name {
    position: absolute;
    bottom: -20px;
    padding: 0 14px;
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 80%);
    border-radius: 10px;
  }
}
</style>
