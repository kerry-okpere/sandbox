<script setup lang="ts">
import { PropType } from 'vue';
import { TypographyElement } from '../types/typography'

// sizes: 32, 14, 16, 18, 24, 12
  defineProps({
    as: {
      type: String as PropType<TypographyElement>,
      default: TypographyElement.Paragraph
    }
  })
</script>
<template>
  <component :is="as"/>
</template>