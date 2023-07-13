<template>
  <div class="widget-brand">
    <img class="brand-logo" src="../assets/logo.png" />
    <div class="brand-name">SAMRT</div>
    <div class="brand-solgen">一个简单的GIS数据大屏案例</div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.widget-brand {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  align-items: center;

  .brand-logo {
    grid-row: 1 / span 2;
    width: 45px;
    height: 45px;
  }

  .brand-name {
    grid-column: 2;
    font-family: En, sans-serif;
    font-size: 32px;
    font-weight: bold;
    line-height: 20px;
  }

  .brand-solgen {
    grid-column: 2;
    font-family: cn, sans-serif;
    font-size: 12px;
    font-weight: bolder;
    color: #fff;
  }
}
</style>
