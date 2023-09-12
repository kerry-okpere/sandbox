<script setup lang="ts">
import { ColorMap } from '@/constants';
import { Colors } from '@/types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
} from 'chart.js'
import { PropType, reactive } from 'vue';
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
)

const props = defineProps({
  data: {
    type: Array as PropType<number[]>,
    required: true
  },

})

const chartConfig = reactive({
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Data',
        data: props.data,
        borderColor: ColorMap[Colors.secondary],
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          display: false,
          stepSize: 4
        },
        border: {
          display: false
        },
      }
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  },
})

</script>
<template>
  <div class="chart">
    <Line :data="chartConfig.data" :options="chartConfig.options" />
  </div>
</template>
<style lang="scss" scoped>
.chart {
  max-height: spacing(12);
  padding-top: spacing(3);
  padding-bottom: spacing(3);
}
</style>