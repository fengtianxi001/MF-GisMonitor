<template>
  <div class="parse-statistics">
    <div v-for="item in 3" :key="item" class="statistics-item">
      <span class="label">统计</span>
      <span class="value">10</span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.parse-statistics {
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: 70px;
  height: 100%;
  font-size: 12px;

  .statistics-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    background-color: rgba(255, 255, 255, 5%);

    .label {
      font-size: 14px;
      color: $color-text-2;
    }

    .value {
      padding: 4px;
      font-family: Num, sans-serif;
      font-size: 20px;
    }
  }

  // background-color: red;
}
</style>
