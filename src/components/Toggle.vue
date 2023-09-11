<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const backgroundStyles = computed(() => {
  return props.modelValue ? 'on' : 'off'
})

const indicatorStyles = computed(() => {
  return { transform: props.modelValue ? 'translateX(9px)' : 'translateX(0px)' };
})
const toggle = () => {
  emits('update:modelValue', !props.modelValue);
}
</script>
<template>
  <span class="toggle__wrapper" role="checkbox" :aria-checked="Boolean(modelValue.toString())" tabindex="0"
    @click="toggle" @keydown.space.prevent="toggle">
    <span class="toggle__background" :class="backgroundStyles" />
    <span class="toggle__indicator" :style="indicatorStyles" />
  </span>
</template>

<style lang="scss" scoped>
.on {
  background-color: $text900;
}

.off {
  background-color: $gray200;
}

.toggle {
  &__wrapper {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: spacing(3);
    height: spacing(2);
    border-radius: 9999px;

    &:focus {
      outline: 0;
    }
  }

  &__background {
    display: inline-block;
    border-radius: 9999px;
    height: 100%;
    width: 100%;
    transition: background-color .4s ease;
  }

  &__indicator {
    position: absolute;
    height: spacing(1.5);
    width: spacing(1.5);
    left: 1.5px;
    bottom: 2px;
    background-color: $white;
    border-radius: 9999px;
    transition: transform .4s ease;
  }
}
</style>