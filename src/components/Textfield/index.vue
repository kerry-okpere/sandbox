<script setup lang="ts">
import Input from './Input.vue'
import Label from './Label.vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: String,
})

defineEmits(['update:modelValue'])

</script>
<template>
  <Label :for="id">{{label}}</Label>
  <Input v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>