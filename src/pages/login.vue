<script setup lang="ts">
import Card from "@/components/Cards.vue"
import Typography from "@/components/Typography.vue";
import TextField from "@/components/Textfield/index.vue"
import { reactive } from "vue";
import Button from "@/components/Button.vue";
import Link from "@/components/Link.vue"
import { useRouter } from "vue-router";
import { useLoginStore } from "@/store/auth";

const router = useRouter()
const store = useLoginStore()

const state = reactive({
  form: {
    email: '',
    password: ''
  },
  loading: false
})

const handleSubmit = async (event: Event) => {
  event.preventDefault()

  state.loading = true
  const res = await store.login(state.form)

  state.loading = false
  if (res?.status) router.push({ name: 'Otp' })
}
</script>
<template>
  <Card>
    <form :onsubmit="handleSubmit">
      <Typography>Sign in</Typography>

      <TextField id="email" label="Email" v-model="state.form.email" />
      <TextField id="password" label="Password" v-model="state.form.password" />


      <Button type="submit" :disabled="!state.form.email || !state.form.password">
        <template v-if="state.loading">Loading...</template>
        <template v-else>Sign in</template>
      </Button>
      <Link to="/auth/login">Forgot you password?</Link>

      <Button type="button">Don’t have an account? Create one</Button>
    </form>
  </Card>
</template>