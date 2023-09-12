<script setup lang="ts">
import { PropType } from 'vue';
import { SelectOption } from '@/types'
import Chevron from "@/components/Icons/Chevron.vue"
import Label from './Textfield/Label.vue';

defineProps({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: []
  },
  title: {
    type: String
  },
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (event: Event) =>
  emit('update:modelValue', (event.target as HTMLInputElement).value)

</script>
<template>
  <div class="select">
    <Label class="select__label" weight="500" :for="id">{{ title }}</Label>
    <select :value="modelValue" class="select__element" :name="name" :id="id" @change="handleChange($event)">
      <option v-for="({ name, value }, index) in options" :key="index" :value="value">{{ name }}</option>
    </select>
    <Chevron />
  </div>
</template>
<style lang="scss" scoped>
.select {
  display: inline-flex;
  align-items: center;
  gap: spacing(1);

  &__element {
    background-color: transparent;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    color: $text900;
    font-weight: 500;
    font-size: 14px;

    &::-ms-expand {
      display: none;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }

  &__label {}
}
</style>