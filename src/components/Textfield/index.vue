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
  labelIsHidden: {
    type: Boolean,
    default: false
  },
  modelValue: String,
})

defineEmits(['update:modelValue'])

</script>
<template>
  <span>
    <Label :for="id" :class="{ 'visually-hidden': labelIsHidden }">{{ label }}</Label>
    <Input v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </span>
</template>
<style lang="scss" scoped>
.visually-hidden {
  @include visually-hidden;
}

span {
  display: flex;
  flex-direction: column;
  gap: spacing(1);
}
</style>


