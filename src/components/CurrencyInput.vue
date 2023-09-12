<script setup lang="ts">
import Select from './Select.vue';
import Typography from './Typography.vue';
import { PropType, computed } from 'vue';
import { SelectOption, TypographyVariant } from '@/types';
import { FLAGS, FontSizeMap } from '@/constants';
import Avatar from './Avatar.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: [String, Number],
  currencies: {
    type: Array as PropType<SelectOption[]>,
    default: []
  },
  disabled: Boolean,
  selected: String,
})
const fontSize = FontSizeMap[TypographyVariant.xLarge]

const emit = defineEmits(['update:modelValue', 'update:selected'])

const handleInputChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const currentFlag = computed(() => {
  const key = props.selected as keyof typeof FLAGS
  return FLAGS[key]
})

</script>
<template>
  <div class="input">
    <Typography as="label" :for="id">{{ label }}</Typography>
    <input :disabled="disabled" :value="modelValue" placeholder="0" type="number" id="id" @input="handleInputChange($event)">

    <Select class="input__select" :modelValue="selected" name="currency-selector" :id="`${id}-currency-selector`"
      @update:modelValue="$emit('update:selected', $event)" :options="currencies">
      <template #icon>
        <Avatar class="input__select--flag" dimensions="16px" v-if="selected" :src="currentFlag" />
      </template>
    </Select>
  </div>
</template>
<style lang="scss" scoped>
.input {
  position: relative;

  label {
    position: absolute;
    top: 25%;
    padding-left: spacing(2.5);
  }

  input {
    padding: spacing(3) spacing(2.5);
    height: 100%;
    width: 100%;
    background-color: $gray100;
    border: 1px solid $gray150;
    border-radius: spacing(2);
    padding-top: spacing(6);
    font-size: v-bind(fontSize);

    &:focus {
      border-color: $secondary;

      outline: 0;
    }

    &::placeholder {
      display: none;
      color: $gray500;
    }
  }

  &__select {
    position: absolute;
    right: spacing(3);
    top: 50%;
    transform: translateY(calc(-50%));

    &--flag {
      margin-left: spacing(1);
    }
  }
}
</style>