<template>
  <div class="parse-process">
    <div v-for="item in 6" :key="item" class="parse-process-item">
      <div class="item-header">
        <span class="sequence">01</span>
        <span class="title">HEADLINE</span>
        <span class="value">900</span>
      </div>
      <div class="process-outer">
        <div class="process-inner"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.parse-process {
  display: flex;
  flex: 1;
  flex-direction: column;
  grid-gap: 10px;
  height: 100%;

  .parse-process-item {
    padding: 4px;
    background-color: rgba(255, 255, 255, 5%);

    .item-header {
      display: flex;
      grid-gap: 10px;
      justify-content: space-between;
      padding: 4px;
      font-size: 14px;

      .title {
        flex: 1;
        text-align: left;
      }

      .value {
        font-family: Num, sans-serif;
      }
    }

    .process-outer {
      height: 12px;
      margin-top: 10px;
      background-color: rgba(255, 255, 255, 5%);

      .process-inner {
        width: 70%;
        height: 100%;
        background-color: rgba(255, 255, 255, 10%);
      }
    }
  }
}
</style>
