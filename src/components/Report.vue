<script setup lang="ts">
import { computed } from 'vue';
import Typography from './Typography.vue';
import { MONTH_NAMES } from "@/constants";

const props = defineProps({
  date: Date,
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  hasTopBorder: {
    type: Boolean,
    default: true
  }
})

const day = computed(() => {
  if (!props.date) return null
  const date = new Date(props.date)
  const today = new Date()

  return {
    date: `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`,
    time: today.toDateString() === date.toDateString() ? 'Today' : ''
  }
})

const borderWidth = computed(() => props.hasTopBorder ? '1px' : '0px')
</script>
<template>
  <div class="report">
    <Typography class="report__heading">
      <Typography class="report__heading--title" as="span" color="gray600">
        {{ title }}
        <slot name="tag" />
      </Typography>
      <Typography as="span" variant="large">{{ subtitle }}</Typography>
    </Typography>
    <slot />

    <Typography v-if="day" class="report__date">
      <Typography variant="xxSmall" color="gray500" as="span"> {{ day.date }}</Typography>
      <Typography variant="xxSmall" color="gray500" as="span">{{ day.time }}</Typography>
    </Typography>
  </div>
</template>
<style lang="scss" scoped>
.report {
  width: spacing(34);
  padding-top: spacing(2.5);
  padding-bottom: spacing(1);
  border-top: 1px solid $gray50;
  border-width: v-bind(borderWidth);

  &__heading {
    display: flex;
    flex-direction: column;
    gap: spacing(1);


    &--title {
      display: inline-flex;
      align-items: center;
      gap: spacing(0.5);
      margin-bottom: spacing(0.5);
    }
  }

  &__date {
    display: flex;
    justify-content: space-between;
  }
}
</style>