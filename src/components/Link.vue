<script setup lang="ts">
import { PropType, computed } from 'vue';
import { Colors, TypographyVariant, LinkElement } from '@/types';
import { ColorMap, FontSizeMap } from '@/constants';

const props = defineProps({
  as: {
    type: String as PropType<`${LinkElement}`>,
    default: LinkElement.Link
  },
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

const link = computed(() => {
  if (props.as === LinkElement.Anchor) return { href: props.to }

  return {to: props.to}
})
</script>
<template>
  <Component :is="as" class="link" v-bind="link">
    <slot />
  </Component>
</template>
<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: v-bind(fontColor);
  font-size: v-bind(fontSize);
  font-weight: 500;
}
</style>