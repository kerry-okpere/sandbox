<script setup lang="ts">
import Typography from './Typography.vue';

defineProps({
  content: {
    type: Array,
    default: []
  },
  activePosition: {
    type: Number,
    default: -1
  },
  gap: {
    type: String,
    default: '0px'
  },
  strokeWidth: {
    type: String,
    default: '96px'
  },
})

</script>
<template>
  <ul class="stepper">
    <li v-for="(item, index) in content" :key="index">
      <Typography as="span" weight="700" :class="{ active: index <= activePosition }" class="stepper__item">
        {{ item }}
      </Typography>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.stepper {
  align-items: center;
  display: flex;

  &__item {
    background-color: $gray400;
    width: spacing(3);
    height: spacing(3);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50vh;
  }

  &>li {
    display: flex;
    align-items: center;

    &:not(:last-child):after {
      content: "";
      display: block;
      height: spacing(0.25);
      width: v-bind(strokeWidth);
      background-color: $gray400;
      margin-right: v-bind(gap);
      margin-left: v-bind(gap);
    }
  }
}

.active {
  background-color: $primary;
}
</style>