<script setup lang="ts">
import Typography from './Typography.vue';

defineProps({
  date: Date,
  title: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
  },
})
</script>
<template>
  <Typography variant="xSmall" color="success900" class="tag">
    <slot>
      <component v-if="icon" :is="icon" /> {{ title }}
    </slot>
  </Typography>
</template>
<style lang="scss" scoped>
.tag {
  display: inline-flex;
  align-items: center;
  gap: spacing(0.5);
  background-color: $success100;
  padding: spacing(0.25) spacing(0.5);
  border-radius: spacing(1);
}</style>