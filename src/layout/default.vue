<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue';
import Navigation from '@/components/Navigation/index.vue';
import { HEADER_HEIGHT } from '@/constants/index'

</script>
<template>
  <DashboardHeader />
  <div class="page">
    <aside class="page__nav">
      <Navigation />
    </aside>

    <section class="page__content">
      <slot />
    </section>
  </div>
</template>
<style lang="scss" scoped>
// Todo: support responsive design
.page {
  display: flex;
  height: calc(100vh - v-bind(HEADER_HEIGHT));

  // Todo: create a mixin for this
  padding: spacing(2) spacing(2.5);
  padding-bottom: spacing(6);

  &__nav {
    min-width: spacing(25);
  }

  &__content {
    flex: 1;
    padding-right: spacing(4);
    padding-left: spacing(4);
  }
}
</style>