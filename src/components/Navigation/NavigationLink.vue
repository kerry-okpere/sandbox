<script setup lang="ts">
import Link from "@/components/Link.vue";
import Chevron from "../Icons/Chevron.vue";
import Button from "@/components/Button.vue"
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  nestedLink: {
    type: Array,
  }
})

const element = computed(() => props?.nestedLink?.length ? Button : Link)
</script>
<template>
  <!-- Todo: fix button -->
  <component :is="element" class="navLink" color="text900" :to="to" is-full-width>
  <span class="navLink__icon--wrapper">
    <component class="navLink__icon" :is="icon" /> {{ title }}
  </span>
  <Chevron v-if="nestedLink?.length! > 0" height="18" width="18" />
  </component>
</template>
<style lang="scss" scoped>
.navLink {
  padding: spacing(1) spacing(1) spacing(1) spacing(2);
  display: flex;
  align-items: center;
  justify-content: space-between;

  :deep(.button) {
    padding: spacing(1) spacing(1) spacing(1) spacing(2);
  }
  

  &__icon--wrapper {
    display: inline-flex;
    align-items: center;
    gap: spacing(1.25);
  }

  &:hover {
    background-color: $gray150;
    border-radius: spacing(1.25);
  }
}
</style>