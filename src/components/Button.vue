<script setup lang="ts">
import { ColorMap } from '@/constants';
import { ButtonVariant, ButtonElement, Colors } from '@/types';
import { PropType, computed } from 'vue';

const props = defineProps({
  as: {
    type: String as PropType<`${ButtonElement}`>,
    default: ButtonElement.Button
  },
  variant: {
    type: String as PropType<`${ButtonVariant}`>,
    default: ButtonVariant.Primary
  },
  isFullWidth: {
    type: Boolean,
    default: false
  },
  color: {
    type: String as PropType<`${Colors}`>,
    default: Colors.text900,
    validator: (value: Colors) => Object.keys(ColorMap).includes(value)
  }
})

const width = computed(() => props.isFullWidth ? '100%' : 'auto')
const fontColor = ColorMap[props.color]
const bgColor = computed(() => {
  if (props.variant === ButtonVariant.Secondary) return ColorMap.gray300
  if (props.variant === ButtonVariant.Text) return 'transparent'

  return ColorMap.primary
})
</script>
<template>
  <component class="button" :is="as">
    <slot />
  </component>
</template>
<style lang="scss" scoped>
.button {
  color: v-bind(fontColor);
  padding: spacing(1.25) spacing(2);
  width: v-bind(width);
  border: none;
  font-weight: 600;
  font-size: 16px;
  background-color: v-bind(bgColor);
  border-radius: spacing(1.25);
  text-decoration: none;
  line-height: spacing(2.75)
}

.button:disabled {
  background-color: $gray300;
  cursor: not-allowed;
}
</style>