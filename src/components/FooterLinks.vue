<script setup lang="ts">
import Link from "@/components/Link.vue";
import { footerLink } from "@/constants/index";
import SelectComponent from "./Select.vue";
const region = [{ name: 'Nigeria', value: 'Nigeria' }, { name: 'Change region', value: '' }]

</script>
<template>
  <footer>
    <div class="footer__wrapper">
      <Link class="footer__link" color="text900" v-for="({ name, href }, index) of footerLink" :key="index" :to="href">
      {{ name }}
      </Link>
      <SelectComponent model-value="" class="footer__select" name="region" id="region" :options="region" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  font-family: 'Inter';

  .footer {
    &__wrapper {
      background-color: $gray400;
      margin-top: auto;
      border-radius: spacing(6.25);
      padding-top: spacing(1);
      padding-bottom: spacing(1);
      display: flex;
    }

    &__select,
    &__link {
      padding-left: spacing(1.5);
      padding-right: spacing(1.5);
    }

    &__select {
      width: auto;
      height: auto;
      background-color: transparent;
    }
  }
}

:deep(.select__element) {
  font-weight: 500 !important;
  width: spacing(16);
}
</style>