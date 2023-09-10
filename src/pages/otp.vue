<script setup lang="ts">
import Card from "@/components/Cards.vue"
import Typography from "@/components/Typography.vue";
import { ref } from "vue";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
import { useAuthStore, useLoginStore } from "@/store/auth";
import OtpInput from "@/components/OtpInput.vue"
import Arrow from "@/components/Icons/Arrow.vue";
import { OTP_LENGTH } from "@/constants"

const router = useRouter()
const store = useAuthStore()
const loginStore = useLoginStore();

const otp = ref('')
const loading = ref(false)
// functions
const handleSubmit = async (event: Event) => {
  event.preventDefault()

  loading.value = true
  const res = await store.authenticate(otp.value)

  if (res?.status) router.push({ name: 'Dashboard' })

  loading.value = false
}

const resendOtp = async () => {
  const res = await loginStore.login({ email: loginStore.email, password: loginStore.password })

  if (res?.status) {
    // Todo: notify customer with toast
  }
}

</script>
<template>
  <Card class="otp">
    <form class="otp__form" :onsubmit="handleSubmit">
      <div>
        <Typography class="otp__heading" as="h1" variant="xLarge" weight="900">Enter your OTP</Typography>
        <Typography class="otp__subheading" variant="small" color="gray500">To confirm your identity, enter the 6-digit
          sent to your email.</Typography>
      </div>

      <div>
        <OtpInput v-model:value="otp" separator="" :num-inputs="OTP_LENGTH" :should-auto-focus="true"
          input-type="letter-numeric" />

        <Button :disabled="otp.length < OTP_LENGTH" class="otp__submit" is-full-width type="submit">Submit</Button>

        <div class="otp__resend">
          <!-- Todo: handle resending of email -->
          <Typography color="gray500" variant="small">Didn’t receive any code? </Typography>
          <Button class="otp__resend--btn" color="secondary" type="button" variant="text" @click="resendOtp">
            Resend
          </Button>
        </div>
      </div>

      <Button as="router-link" to="/auth/login" class="otp__back" variant="secondary">
        <Arrow />
        <Typography as="span" variant="medium" weight="600">
          Go back to login
        </Typography>
      </Button>
    </form>
  </Card>
</template>
<style lang="scss" scoped>
.otp {
  &__form {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: spacing(4);
  }

  &__subheading {
    line-height: 140%;
    margin-top: spacing(1);
  }

  &__submit {
    margin-top: spacing(3);
  }

  &__heading {
    margin-top: spacing(1);
  }

  &__back {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: spacing(1);
  }

  &__resend {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: spacing(0.5);
    margin-top: spacing(2);

    &--btn {
      font-weight: 500;
      padding: 0;
    }

  }
}
</style>