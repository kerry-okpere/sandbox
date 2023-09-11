<script setup lang="ts">
import Rocket from "@/components/Icons/Rocket.vue"
import Home from "@/components/Icons/Home.vue"
import Cash from "@/components/Icons/Cash.vue"
import Swap from "@/components/Icons/Swap.vue"
import Card from "@/components/Icons/CardIcon.vue"
import Customers from "@/components/Icons/Customers.vue"
import NavigationLink from "./NavigationLink.vue"
import Label from "../Textfield/Label.vue"
import Plus from "@/components/Icons/Plus.vue"
import Typography from "../Typography.vue"
import Chevron from "../Icons/Chevron.vue"
import Toggle from "../Toggle.vue"
import { ref } from "vue"


const navLinks = [{
  name: 'Get Started',
  icon: Rocket,
  to: "#"
},
{
  name: "Home",
  icon: Home,
  to: '/dashboard',
},
{
  name: "Cash",
  icon: Cash,
  to: '#',
  nestedLink: [
    {
      name: 'Transactions',
      href: '#'
    },
    {
      name: 'Wallet',
      href: '#'
    }
  ]
},
{
  name: "FX Conversion",
  icon: Swap,
  to: '/transaction/fx',
},
{
  name: "Cards",
  icon: Card,
  to: '#',
},
{
  name: "Customers",
  icon: Customers,
  to: '#',
},
]

const value = ref(true)
</script>
<template>
  <nav class="nav">
    <ul>
      <!-- Todo: support nested Links -->
      <li v-for="{ name, to, nestedLink, icon } in navLinks">
        <NavigationLink :to="to" :icon="icon" :title="name" :nestedLink="nestedLink" />
      </li>
    </ul>

    <div>
      <Label weight="500" class="nav__mode" for="i">Sandbox mode
        <Toggle v-model="value" />
      </Label>


      <Typography class="nav__invite">
        <span class="nav__invite--title">
          <Plus aria-hidden />
          Invite people
        </span>
        <Chevron aria-hidden height="18" width="18" />
      </Typography>

    </div>


  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__mode {
    background-color: $gray150;
    padding: spacing(1) spacing(1.5);
    border-radius: spacing(1.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__invite {
    display: flex;
    align-items: center;
    padding: spacing(2) spacing(1);
    justify-content: space-between;

    &--title {
      display: inline-flex;
      align-items: center;
      gap: spacing(1.25);
    }
  }
}
</style>