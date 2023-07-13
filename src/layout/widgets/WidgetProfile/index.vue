<template>
  <BasePanel title="面板四">
    <div class="widget-profile">
      <div class="profile-id">ID:9527</div>
      <div class="profile-info">
        <div>
          <span>姓名:</span>
          <span>fengtianxi001</span>
        </div>
        <div>
          <span>职业:</span>
          <span>肛肠科主任</span>
        </div>
        <div>
          <span>爱好:</span>
          <span>肥肠面</span>
        </div>
      </div>
      <DigitalAvatar />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '@/components/BasePanel/index.vue'
import DigitalAvatar from './DigitalAvatar.vue'
</script>

<style lang="scss" scoped>
.widget-profile {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 12px;

  .profile-id {
    grid-column: 1;
    font-family: Num, sans-serif;
    font-size: 30px;
    color: $primary-1;
  }

  .profile-info {
    grid-column: 1;
    line-height: 20px;
    color: $color-text-2;
  }

  .profile-avatar {
    grid-row: 1 / span 2;
    grid-column: 2;
    width: 140px;
    height: 90px;
    border: 1px solid #33353b;
  }
}
</style>
