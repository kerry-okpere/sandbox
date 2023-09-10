<script setup lang="ts">
import { FontSizeMap } from '@/constants';
import { TypographyVariant } from '@/types';
import { computed } from 'vue';

const props = defineProps({
  isFullWidth: {
    type: Boolean,
    default: true
  }
})

const fontSize = FontSizeMap[TypographyVariant.small]
const width = computed(() => props.isFullWidth ? '100%' : 'auto')
</script>
<template>
  <input />
</template>
<style lang="scss" scoped>
/* Todo: update to Inter V */
input {
  padding: spacing(1) spacing(2);
  border-radius: spacing(1.25);
  border: 1px solid $gray150;
  background-color: $gray100;
  font-size: v-bind(fontSize);
  font-weight: 400;
  line-height: 150%;
  width: v-bind(width);

  &:focus {
    border-color: $secondary;
    outline: none;
  }

  &::placeholder {
    display: none;
    color: $gray500;
  }
}
</style>