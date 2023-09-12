<script setup lang="ts">
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Chevron from "@/components/Icons/Chevron.vue";
import Stepper from "@/components/Stepper.vue";
import Typography from "@/components/Typography.vue";
import TransactionChart from "@/components/TransactionChart.vue";
import Report from "@/components/Report.vue";
import Tag from "@/components/Tag.vue";
import FilledArrow from "@/components/Icons/FilledArrow.vue";
import ReportChart from "@/components/ReportChart.vue";
import { formatter } from "@/helpers/index"

const reports = [
  {
    title: "Revenue",
    amount: 350,
    lastUpdated: new Date(),
    percentage: 2,
    data: [4, 6, 1, 3, 2, 6, 8]
  },
  {
    title: "New customers",
    amount: 350,
    lastUpdated: new Date(),
    percentage: 2,
    data: [4, 6, 1, 3, 2, 6, 8]
  },
  {
    title: "Failed payments",
    amount: 350,
    lastUpdated: new Date(),
    percentage: 2,
    data: [4, 6, 1, 3, 2, 6, 8]
  },
  {
    title: "Successful payments",
    amount: 350,
    lastUpdated: new Date(),
    percentage: 2,
    data: [4, 6, 1, 3, 2, 6, 8]
  },
]

</script>
<template>
  <Card class="onboarding" maxWidth="100%">
    <Typography as="h1" variant="xLarge" weight="600">
      Hello! <br />
      Let’s get you set up
    </Typography>

    <Stepper gap="8px" :activePosition="0" :content="[1, 2, 3, 4, 5,]" />

    <Typography variant="small">
      Step 1: Tell us more about your business to get started.
    </Typography>

    <Button as="router-link" to="#" class="onboarding__action">
      Continue compliance

      <Chevron aria-hidden height="18px" width="18px" />
    </Button>
  </Card>

  <section class="overview">
    <header>
      <Typography as="h3" variant="large" weight="600">Overview</Typography>

      <!-- Todo: make this a selector -->
      <Typography class="overview__date" color="gray500">
        Last 30 days
        <Chevron aria-hidden height="18px" width="18px" />
      </Typography>
    </header>

    <!-- Todo:: investigate endpoint and use actual data -->
    <figure class="overview__details">
      <TransactionChart class="overview__chart" />

      <div>
        <!-- Todo: use currency converter -->
        <Report title="Revenue" :subtitle="formatter.format(0)" />
        <Report :has-top-border="false" title="Spend per customer" :subtitle="formatter.format(0)" />
      </div>
    </figure>
  </section>

  <section class="reports">
    <div class="reports__heading">
      <div>
        <Typography class="reports__title" as="h3" variant="large" weight="600">Reports</Typography>
        <Typography color="gray500">
          View all transaction made to your account
        </Typography>
      </div>

      <!-- Todo: add export as pdf -->
      <!-- Todo: Create dropdown component for this  -->
      <Typography weight="600" class="reports__export">
        Export
        <Chevron aria-hidden height="18px" width="18px" />
      </Typography>
    </div>

    <div class="reports__group">
      <!--Todo: use precision js -->
      <!--Todo: format with currency -->
      <Report v-for="report in reports" :title="report.title" :subtitle="formatter.format(report.amount)"
        :date="report.lastUpdated">
        <template #tag>
          <Tag :icon="FilledArrow" :title="`${report.percentage}%`" />
        </template>
        <ReportChart :data="report.data" />
      </Report>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.onboarding {
  background-color: $gray100;
  display: flex;
  flex-direction: column;
  gap: spacing(2);

  &__action {
    align-self: flex-start;
    margin-top: spacing(1);
    display: inline-flex;
    align-items: center;
    gap: spacing(1);

    svg {
      rotate: 270deg;
    }
  }
}

.overview {
  display: flex;
  flex-direction: column;
  gap: spacing(1.5);
  margin-top: spacing(4);

  &__date {
    display: inline-flex;
    align-items: center;
    gap: spacing(1);
    margin-top: spacing(1.5);

    svg {
      rotate: 360deg;
    }
  }

  &__details {
    display: flex;
    min-height: spacing(33);
  }

  &__chart {
    width: 80%;
  }

  &__cost {
    span {
      display: block;
    }
  }
}

.reports {
  margin-top: spacing(6);
  display: flex;
  flex-direction: column;
  gap: spacing(2);
  
  &__group {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: spacing(1);
  }

  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__export {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: spacing(1.25);
    border-radius: spacing(1.25);
    background-color: $gray300;
    gap: spacing(1);
  }
}</style>