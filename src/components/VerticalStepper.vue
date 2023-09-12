<script setup lang="ts">
import { PropType } from 'vue';
import { VerticalStepperContent } from '@/types'

defineProps({
  content: {
    type: Array as PropType<VerticalStepperContent[]>,
    default: []
  },
})
</script>
<template>
  <ul class="stepper">
    <li class="stepper__item" v-for="({ icon, label }, index) in content" :key="index">
      <div class="stepper__item--wrapper">
        <span class="stepper__item--wrapper2">
          <component class="stepper__item--icon" :is="icon" />
          <span class="stepper__item--label">
            <slot :name="label" />
          </span>
        </span>
      </div>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.stepper {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: spacing(2.5);
  padding-right: spacing(2.5);

  &__item {
    &--label {
      position: absolute;
      display: flex;
      gap: spacing(1);
      margin-left: spacing(5); //width of icon stepper (3), Plus additional space
    }

    &--wrapper2 {
      display: flex;
      align-items: center;
    }

    &:first-child {
      &>.stepper__item--wrapper {
        &::before {
          content: "";
          display: block;
          width: spacing(0.25);
          background-color: $gray400;
          height: spacing(2);
        }
      }
    }

    &:last-child {
      &>.stepper__item--wrapper {
        &::after {
          content: "";
          display: block;
          width: spacing(0.25);
          background-color: $gray400;
          height: spacing(2);
        }
      }
    }

    &:not(:last-child) {
      &>.stepper__item--wrapper {
        &:after {
          content: "";
          display: block;
          width: spacing(0.25);
          background-color: $gray400;
          height: spacing(1);
        }
      }
    }

    &--wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: spacing(3);
    }

    &--icon {
      height: spacing(3);
      width: spacing(3);
      border-radius: 50vh;
      background-color: $gray150;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: spacing(0.5);
    }
  }

}
</style>