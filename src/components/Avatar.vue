<script setup lang="ts">
import { computed } from 'vue';
import Typography from './Typography.vue';

const props = defineProps({
  name: {
    type: String,
  },
  src: {
    type: String,
  },
  dimensions: {
    type: String,
    default: '32px'
  }
})

const initial = computed(() => props.name?.charAt(0))
</script>
<template>
  <div class="image" v-if="src">
    <img :src="src" />
  </div>
  <Typography v-else class="initial" weight="600" variant="small" color="primary">{{ initial }}</Typography>
</template>
<style lang="scss" scoped>
.image {
  background-color: $gray500;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.image, .initial {
  height: v-bind(dimensions);
  width: v-bind(dimensions);
  border-radius: 50%;
}

.initial {
  background-color: $text900;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>