<script setup lang="ts">
import { FontSizeMap } from "@/constants";
import { TypographyVariant } from "@/types";
import VOtpInput from "vue3-otp-input";

const fontSize = FontSizeMap[TypographyVariant.small]
</script>
<template>
  <VOtpInput class="otp__wrapper" input-classes="otp__input" />
</template>
<style lang="scss">
.otp {
  &__wrapper {
    justify-content: space-between;
  }

  &__input {
    padding: spacing(1) spacing(2);
    border-radius: spacing(1.25);
    border: 1px solid $gray150;
    background-color: $gray100;
    font-size: v-bind(fontSize);
    font-weight: 400;
    line-height: 150%;
    height: spacing(7);
    width: spacing(7);

    &:focus {
      border-color: $secondary;
      outline: none;
    }

    &::placeholder {
      display: none;
      color: $gray500;
    }
  }
}
</style>