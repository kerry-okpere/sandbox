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
  height: 100vh;

  // Todo: create a mixin for this
  padding-left: spacing(2.5);
  padding-right: spacing(2.5);
  padding-bottom: spacing(4);
  padding-top: calc(v-bind(HEADER_HEIGHT) + spacing(3));

  &__nav {
    min-width: spacing(25);
  }

  &__content {
    flex: 1;
    padding-left: spacing(4);
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0 !important;
    }

  }
}
</style>