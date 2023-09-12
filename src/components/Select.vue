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
  modelValue: String,
  width: {
    type: String,
    default: '98px'
  },
  height: {
    type: String,
    default: '34px'
  }
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (event: Event) =>
  emit('update:modelValue', (event.target as HTMLInputElement).value)

</script>
<template>
  <div class="select">
    <Label v-if="title" class="select__label" weight="500" :for="id">{{ title }}</Label>
    <span class="select__icon">
      <slot name="icon" />
    </span>
    <select :value="modelValue" class="select__element" :name="name" :id="id" @change="handleChange($event)">
      <option v-for="({ name, value }, index) in options" :key="index" :value="value">{{ name }}</option>
    </select>
    <Chevron height="16" width="16" class="select__caret" />
  </div>
</template>
<style lang="scss" scoped>
.select {
  display: flex;
  align-items: center;
  background-color: $gray300;
  border-radius: spacing(3);
  width: v-bind(width);
  height: v-bind(height);
  position: relative;

  &__element {
    background-color: transparent;
    border: none;
    text-indent: 1px;
    color: $text900;
    font-weight: 600;
    font-size: 14px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    height: 100%;
    width: 100%;
    padding-left: spacing(1);

    &::-ms-expand {
      display: none;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }

  &__caret {
    position: absolute;
    right: spacing(1);
  }
}
</style>