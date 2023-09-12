<script setup lang="ts">
import Link from "@/components/Link.vue";
import Chevron from "../Icons/Chevron.vue";
import Button from "@/components/Button.vue"
import { computed } from "vue";
import { ButtonVariant, TypographyVariant } from "@/types";

const props = defineProps({
  icon: {
    type: Object,
  },
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  isCollapsible: {
    type: Boolean,
  },
  isNextedLink: {
    type: Boolean,
  }
})

const element = computed(() => props?.isCollapsible ? Button : Link)
const variant = computed(() => props?.isCollapsible ? ButtonVariant.Text : TypographyVariant.xSmall)
</script>
<template>
  <component
    :is="element" 
    :variant="variant" 
    class="navLink" 
    :class="{ indent: isNextedLink }" 
    color="text900" 
    :to="to"
    is-full-width
  >
    <span class="navLink__title">
      <component aria-hidden v-if="icon" :is="icon" /> {{ title }}
    </span>

    <Chevron v-if="isCollapsible" height="18" width="18" />
  </component>
</template>
<style lang="scss" scoped>
.navLink {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  padding-top: spacing(1);
  padding-bottom: spacing(1);
  padding-right: spacing(1);
  padding-left: spacing(2);
  line-height: normal;

  &__title {
    display: inline-flex;
    align-items: center;
    gap: spacing(1.25);
  }

  &:hover {
    background-color: $gray150;
    border-radius: spacing(1.25);
  }
}

.indent {
  padding-left: spacing(5);
}
</style>