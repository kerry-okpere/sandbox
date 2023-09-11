<script setup lang="ts">
defineProps({
  maxWidth: {
    type: String,
    default: '504px'
  },
  hasDropShadow: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card" :class="{ shadow: hasDropShadow }">
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

.shadow {
  box-shadow: 0px 10px 20px 8px rgba(31, 41, 55, 0.08);
}
</style>
