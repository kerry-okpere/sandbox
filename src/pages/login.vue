<script setup lang="ts">
import Card from "@/components/Card.vue"
import Typography from "@/components/Typography.vue";
import TextField from "@/components/Textfield/index.vue"
import { computed, reactive } from "vue";
import Button from "@/components/Button.vue";
import Link from "@/components/Link.vue"
import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { PASSWORD_LENGTH } from "@/constants"

const router = useRouter()
const store = useStore()

const state = reactive({
  form: {
    email: '',
    password: ''
  },
  loading: false
})

const formIsValid = computed(() => Boolean(state.form.email) && state.form.password.length >= PASSWORD_LENGTH)

const handleSubmit = async (event: Event) => {
  event.preventDefault()

  state.loading = true
  const res = await store.login(state.form)

  state.loading = false
  if (res?.status) router.push({ name: 'Otp' })
}

</script>
<template>
  <Card class="login">
    <form class="login__form" :onsubmit="handleSubmit">
      <Typography class="login__heading" as="h1" variant="xLarge" weight="900">Sign in</Typography>

      <TextField 
        class="login__input" 
        id="email" 
        label="Email" 
        placeholder="eg. john@gmail.com"
        v-model="state.form.email" 
      />
      <TextField 
        class="login__input" 
        id="password" 
        label="Password" 
        placeholder="(8+ characters)"
        v-model="state.form.password" 
      />

      <div>
        <Button is-full-width type="submit" :disabled="!formIsValid">
          <!-- Todo: replace loading -->
          <template v-if="state.loading">Loading...</template>
          <template v-else>Sign in</template>
        </Button>
        <Link class="login__link--forget" to="/auth/login">Forgot you password?</Link>
      </div>

      <Button as="router-link" to="#" class="login__action--create" variant="secondary">
        <Typography 
          as="span" 
          variant="medium" 
          weight="600">
          Don’t have an account? Create one
        </Typography>
      </Button>
    </form>
  </Card>
</template>
<style lang="scss" scoped>
.login {
  &__form {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: spacing(3);
  }

  &__heading {
    margin-top: spacing(1);
  }

  &__input {
    text-align: left;
  }

  &__link--forget {
    margin-top: spacing(2);
    display: block;
  }

  &__action--create {
    margin-top: spacing(1);
    
    span {
      line-height: spacing(3.5);
    }
  }
}
</style>@/store