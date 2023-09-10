<script setup lang="ts">
import Link from "@/components/Link.vue";
import { footerLink } from "@/constants/index";
import SelectComponent from "./Select.vue";
const region = [{ name: 'Nigeria', value: 'Nigeria' }]

</script>
<template>
  <footer>
    <div class="footer__wrapper">
      <Link class="footer__link" color="text900" v-for="{ name, href } of footerLink" :to="href">
      {{ name }}
      </Link>
      <SelectComponent class="footer__select" title="Change region" name="region" id="region" :options="region" />
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
    }

    &__select, &__link {
      padding-left: spacing(1.5);
      padding-right: spacing(1.5);
    }
  }
}
</style>