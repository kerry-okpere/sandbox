<script setup lang="ts">
  defineProps({
    to: {
      type: String,
      required: true
    }
  })
</script>
<template>
  <RouterLink :to="to" v-bind="$attrs"><slot /></RouterLink>
</template>