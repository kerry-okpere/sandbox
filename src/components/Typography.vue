<script setup lang="ts">
import { TypographyElement, TypographyVariant, Colors } from '@/types';
import { FontSizeMap, ColorMap } from '@/constants';
import { PropType } from 'vue';

const props = defineProps({
  as: {
    type: String as PropType<`${TypographyElement}`>,
    default: TypographyElement.Paragraph
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
    default: Colors.text900,
    validator: (value: Colors) => Object.keys(ColorMap).includes(value)
  }
})

const fontSize = FontSizeMap[props.variant]
const fontColor = ColorMap[props.color]
</script>
<template>
  <component :is="as" class="typography">
    <slot />
  </component>
</template>
<style lang="scss">
.typography {
  font-size: v-bind(fontSize);
  color: v-bind(fontColor);
  font-weight: v-bind(weight);
}
</style>