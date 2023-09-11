<script setup lang="ts">
import MapleRad from "@/components/Icons/Logo.vue";
import Avatar from "@/components/Avatar.vue";
import Link from "@/components/Link.vue";
import { useAuthStore } from "@/store/auth";
import Bell from "./Icons/Bell.vue";
import Dev from "./Icons/Dev.vue";
import Chevron from "./Icons/Chevron.vue";
import Typography from "./Typography.vue";
import { computed } from "vue";
import { HEADER_HEIGHT } from '@/constants/index'

const store = useAuthStore()
const business = store.defaultBusiness

const usersFullName = computed(() => `${store.user?.first_name} ${store.user?.last_name}`)

</script>
<template>
  <header class="header">
    <MapleRad height="40" width="80px" />

    <div class="header__right">
      <Link class="header__docs" target="__blanc" variant="small" color="text900" as="a" to="https://maplerad.dev/docs">
      <Dev /> Developer
      <Chevron  height="18" width="18" />
      </Link>

      <Bell />
      <figure class="header__business">
        <Avatar :name="store.user?.first_name" />
        <figcaption>
          <Typography weight="600">{{ usersFullName }}</Typography>
          <Typography class="header__businessName" variant="xxSmall" color="gray600">{{ business?.name }}</Typography>
        </figcaption>

        <Chevron height="18" width="18" />
      </figure>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $gray150;
  height: v-bind(HEADER_HEIGHT);

  // Todo: create a mixin for this
  padding: spacing(1.625) spacing(2.5);

  &__docs, &__right, &__business {
    display: flex;
    align-items: center;
  }

  &__businessName {
    margin-top: spacing(0.5);
  }

  &__business {
    gap: spacing(1.5);
  }

  &__right {
    gap: spacing(2);
  }

  &__docs {
    gap: spacing(0.5);
  }
}
</style>