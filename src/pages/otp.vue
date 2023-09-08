<script setup lang="ts">
import Card from "@/components/Cards.vue"
import Typography from "@/components/Typography.vue";
import { ref } from "vue";
import Button from "@/components/Button.vue";
import Link from "@/components/Link.vue"
import VOtpInput from "vue3-otp-input";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";

const router = useRouter()
const store = useAuthStore()

const otp = ref('')
const loading = ref(false)
// functions
const handleSubmit = async(event: Event) => {
  event.preventDefault()

  loading.value = true
  const res = await store.authenticate(otp.value)

  if(res?.status) router.push({name: 'Dashboard'})

  loading.value = false 
}

</script>
<template>
  <Card>
    <form :onsubmit="handleSubmit">
      <Typography>Enter your OTP</Typography>
      <Typography>To confirm your identity, enter the 6-digit sent to your email.</Typography>

      <VOtpInput ref="otpInput" v-model:value="otp" input-classes="otp-input" separator="" :num-inputs="6"
        :should-auto-focus="true" input-type="letter-numeric" />

      <Button type="submit">Submit</Button>

      <Typography>
        Didn’t receive any code?
        <Link to="/auth/login">Resend</Link>
      </Typography>

      <Button type="button">Go back to login</Button>
    </form>
  </Card>
</template>