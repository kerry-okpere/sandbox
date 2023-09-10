<script setup lang="ts">
  defineProps({
    maxWidth: {
      type: String,
      default: '504px'
    }
  })
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
  .card {
    background-color: $white;
    padding: spacing(3);
    max-width: v-bind(maxWidth);
    width: 100%;
    border-radius: spacing(2);
  }
</style>
