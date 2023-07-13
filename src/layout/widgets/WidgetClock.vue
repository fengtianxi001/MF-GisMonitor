<template>
  <div class="widget-clock">
    <img class="widget-weather-icon" src="../assets/weather.png" />
    <div class="widget-weather-date">
      <span class="temp">32</span>
      <span class="unit">°c</span>
      <span class="desc">晴转多云</span>
    </div>
    <div class="widget-datetime">
      <div class="time">09:01:00</div>
      <div class="date">2021/08/10星期一</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.widget-clock {
  display: flex;
  grid-gap: 20px;
  align-items: center;

  .widget-weather-icon {
    width: 50px;
    height: 50px;
  }

  .widget-weather-date {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    color: $color-text-1;

    .temp {
      font-family: Num, sans-serif;
      font-size: 30px;
      font-weight: bold;
    }

    .unit {
      font-weight: bold;
    }

    .desc {
      font-size: 12px;
      font-weight: bold;
    }
  }

  .widget-datetime {
    color: $color-text-1;

    .time {
      font-family: Num, sans-serif;
      font-size: 30px;
      font-weight: bold;
    }

    .date {
      font-size: 12px;
      font-weight: bold;
    }
  }
}
</style>
