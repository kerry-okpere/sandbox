<script setup lang="ts">
import { computed } from 'vue';
import Typography from './Typography.vue';

const props = defineProps({
  name: {
    type: String,
  },
  src: {
    type: String,
  }
})

const initial = computed(() => props.name?.charAt(0))
</script>
<template>
  <img v-if="src" />
  <Typography v-else class="initial" weight="600" variant="small" color="primary">{{ initial }}</Typography>
</template>
<style lang="scss" scoped>
img {
  background-color: $gray500;
}

.initial,
img {
  height: spacing(4);
  width: spacing(4);
  border-radius: 50%;
}

.initial {
  background-color: $text900;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>