<script setup lang="ts">
import Close from "@/components/Icons/Close.vue";
import Minus from "@/components/Icons/Minus.vue";
import Clock from "@/components/Icons/Clock.vue";
import Typography from "@/components/Typography.vue";
import Exchange from "@/components/Illustrations/exchange.vue"
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import VerticalStepper from "@/components/VerticalStepper.vue";
import CurrencyInput from "@/components/CurrencyInput.vue";
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "@/store/index";
import { QuotePayload } from "@/types";
import { FEE } from "@/constants/index"

const store = useStore()

const source = reactive({
  amount: 1,
  currency: ''
})
const target = reactive({
  amount: 0,
  currency: ''
})
const currency = ref('')
const loadingCurrency = ref(false)
const loadingQuote = ref(false)
const rate = ref(0)

const currenciesOptions = computed(() => {
  return store.currencies.map(({ currency: value, }) => ({ name: value, value }))
})
const sourceCurrencies = computed(() => {
  return currenciesOptions.value.filter(({ value }) => value !== target.currency)
})
const targetCurrencies = computed(() => {
  return currenciesOptions.value.filter(({ value }) => value !== source.currency)
})

const setDefaults = async () => {
  if (!store.currencies.length) await fetchCurrencies()
  
  source.currency = sourceCurrencies.value[0].value
  target.currency = targetCurrencies.value[0].value

  updateTargetAmount(inMultipleOf100(source.amount))
}

const fetchCurrencies = async () => {
  loadingCurrency.value = true

  await store.getCurrencies()

  currency.value = store.currencies[0].currency

  loadingCurrency.value = false
}

const getQuote = async (quote: QuotePayload) => {
  loadingQuote.value = true

  const res = await store.getQuote(quote)

  loadingQuote.value = false

  return res
}

const inMultipleOf100 = (amount: number) => parseInt((Number(amount) * 100).toString())

const updateTargetAmount = async (amount: number) => {
  const res = await getQuote({
    amount: parseInt(amount.toString()),
    source_currency: source.currency,
    target_currency: target.currency,
  })

  if (res) {
    target.amount = res.target.human_readable_amount
    rate.value = res.rate
  }
}

const handleUpdate = (amount: number) => {
  const actualAmount = inMultipleOf100(amount)

  if (!actualAmount) {
    source.amount = 0
    target.amount = 0
    return
  }

  updateTargetAmount(actualAmount)
}

const handleCurrencyChange = async (type: 'source' | 'target', currency: string) => {
  if (!currency) return

  if (type === 'source') {
    source.currency = currency
  } else {
    target.currency = currency
  }

  handleUpdate(source.amount)
}

onMounted(() => {
  setDefaults()
})

</script>
<template>
  <!-- Todo: reduce size on mobile -->
  <div class="fx">
    <div class="fx__info">
      <Typography class="fx__heading" as="h1" variant="xxLarge" weight="600">
        Convert your money between currencies fast!
      </Typography>
      <Typography class="fx__subheading" variant="small" color="gray800">
        Make international transfers to local bank
        accounts and
        mobile money wallets.
      </Typography>
    </div>

    <div class="fx__content">
      <Exchange class="fx__ilustration" />
      <Card has-drop-shadow class="fx__converter">
        <Typography v-if="loadingCurrency">Loading</Typography>
        <template v-else>
          <CurrencyInput 
            id="source" 
            label="You pay" 
            :model-value="source.amount"
            :selected="source.currency"
            :currencies="sourceCurrencies"
            @update:model-value="handleUpdate($event)" 
            @update:selected="handleCurrencyChange('source', $event)"
           />

          <VerticalStepper
            :content="[{ label: 'exchange', icon: Close }, { label: 'fee', icon: Minus }, { label: 'time', icon: Clock }]">
            <template #exchange>
              <Typography weight="600" color="gray500">{{ `${target.currency} ${rate.toFixed(2)}` }} =</Typography>
              <Typography color="gray500">{{ `${source.currency} ${Number(1).toFixed(2)}` }} </Typography>
            </template>
            <template #fee>
              <Typography weight="600" color="gray500">Fee</Typography>
              <!-- Todo: fomart number -->
              <Typography color="gray500">{{ FEE.toFixed(2) }}</Typography>
            </template>
            <template #time>
              <Typography color="gray500">2 min</Typography>
            </template>
          </VerticalStepper>

          <CurrencyInput 
            id="target" 
            label="You get"
            disabled
            :model-value="target.amount" 
            :currencies="targetCurrencies"  
            :selected="target.currency"
            @update:selected="handleCurrencyChange('target', $event)" 
          />

          <Button class="fx__submit" is-full-width>Convert</Button>
        </template>
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
    flex-wrap: wrap;
    padding-right: spacing(2);
  }

  &__ilustration {
    align-self: flex-end;
    flex: 1;
  }

  &__converter {
    margin-top: spacing(-1);
    align-self: flex-start;
    flex: 1;
    height: 462px; //permanent height
  }

  &__submit {
    margin-top: spacing(3.75);
  }
}
</style>