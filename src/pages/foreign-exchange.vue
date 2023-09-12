<script setup lang="ts">
import Typography from "@/components/Typography.vue";
import Exchange from "@/components/Illustrations/exchange.vue"
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";


</script>
<template>
  <!-- Todo: reduce size on mobile -->
  <div class="fx">
    <div class="fx__info">
      <Typography class="fx__heading" as="h1" variant="xxLarge" weight="600">Convert your money between currencies fast!
      </Typography>
      <Typography class="fx__subheading" variant="small" color="gray800">Make international transfers to local bank accounts and
        mobile money wallets.</Typography>
    </div>

    <div class="fx__content">
      <Exchange class="fx__ilustration" />
      <Card has-drop-shadow class="fx__converter">
        <Button is-full-width>Convert</Button>
      </Card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fx {
  &__info {
    max-width: spacing(61);
  }

  &__heading {
    margin-bottom: spacing(2.5);
    line-height: 130%;
  }

  &__subheading {
    line-height: 130%;
    width: 90%;
  }

  &__content {
    display: flex;

    * {
      flex: 1;
    }
  }

  &__ilustration {
    align-self: flex-end;
  }

  &__converter {
    margin-top: spacing(-1);
    align-self: flex-start;
  }
}
</style>