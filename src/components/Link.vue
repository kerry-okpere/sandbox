<script setup lang="ts">
import { PropType } from 'vue';
import { Colors, TypographyVariant } from '@/types';
import { ColorMap, FontSizeMap } from '@/constants';

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  variant: {
    type: String as PropType<`${TypographyVariant}`>,
    default: TypographyVariant.xSmall
  },
  weight: {
    type: String,
    default: '500',
    validator: (value: number) => [900, 700, 600, 500].includes(Number(value))
  },
  color: {
    type: String as PropType<`${Colors}`>,
    default: Colors.gray500,
    validator: (value: Colors) => Object.keys(ColorMap).includes(value)
  }
})

const fontSize = FontSizeMap[props.variant]
const fontColor = ColorMap[props.color]
</script>
<template>
  <RouterLink class="link" :to="to">
    <slot />
  </RouterLink>
</template>
<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: v-bind(fontColor);
  font-size: v-bind(fontSize);
  font-weight: 500;
}
</style>