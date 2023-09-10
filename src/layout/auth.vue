<script setup lang="ts">
import FooterLinks from "@/components/FooterLinks.vue";
import MapleRad from "@/components/Icons/Logo.vue";

</script>
<template>
  <div class="auth">
    <MapleRad class="auth__logo" />
    <slot />

    <FooterLinks class="auth__footer"/>
  </div>
</template>
<style lang="scss" scoped>
.auth {
  height: 100vh;
  background-image: url('@/assets/images/pattern.png');
  display: flex;
  flex-direction: column;
  padding: spacing(3);
  align-items: center;

  &__logo {
    margin-top: spacing(7);
    margin-bottom: spacing(3);
  }

  &__footer {
    flex: 1;
  }
}
</style>