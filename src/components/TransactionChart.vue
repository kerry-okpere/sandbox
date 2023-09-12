<script setup lang="ts">
import { ColorMap, FontSizeMap, CHART_LINE_HEIGHT } from '@/constants';
import { Colors, TypographyVariant } from '@/types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { PropType, reactive } from 'vue';
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const props = defineProps({
  variant: {
    type: String as PropType<`${TypographyVariant}`>,
    default: TypographyVariant.xSmall
  },
})

const [fontSize] = FontSizeMap[props.variant].split('px')

ChartJS.defaults.font.size = Number(fontSize)
ChartJS.defaults.font.family = "Inter"
ChartJS.defaults.color = ColorMap[Colors.gray200];

const tooltipLine = {
  id: 'tooltipLine',
  beforeDraw: (chart: any) => {
    if (chart.tooltip?._active?.length) {
      const ctx = chart.ctx
      ctx.save()

      const activePoint = chart.tooltip?._active[0]

      ctx.beginPath()
      ctx.moveTo(activePoint.element.x, chart.chartArea.bottom)
      ctx.lineTo(activePoint.element.x, CHART_LINE_HEIGHT)
      ctx.lineWidth = 3
      ctx.strokeStyle = ColorMap[Colors.gray400]
      ctx.stroke()
      ctx.restore()
    }
  }
}

const chartConfig = reactive({
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Data',
        backgroundColor: `rgba(174, 243, 120, 0.09)`, //Todo write and alpha function
        data: [23, 23, 23, 23, 23, 23, 23],
        borderColor: ColorMap[Colors.primary],
        fill: 'start',
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          offset: true,
        },
        ticks: {
          align: 'start',
        },
        border: {
          display: false,
        }
      },
      y: {
        min: 10,
        max: 40,
        grid: {
          tickColor: 'transparent',
          color: ColorMap[Colors.gray50]
        },
        border: {
          display: false,
          dash: [6, 2],
        },
        ticks: {
          align: 'end',
          stepSize: 10
        },
      }
    },
    elements: {
      point: {
        radius: 1.625,
        hoverRadius: 5,
        hoverBorderWidth: 3
      },
    },
    plugins: {

      legend: {
        display: false,
      },
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        cornerRadius: 10,
        bodyFont: {
          weight: 600,
        },
        titleMarginBotton: 0,
        footerMarginTop: 0,
        callbacks: {
          label: () => '',
          title: () => '',
          afterLabel: (chart: any) => `$${chart.formattedValue}` // Todo use currency formatter
        },
        backgroundColor: ColorMap[Colors.text900],
        mode: 'index',
        intersect: false,
        position: 'nearest',
        // Todo add spacing between line annotation and tootip
      },
      hover: {
        mode: 'index',
        intersect: false
      },
    }
  },
})

</script>
<template>
  <div class="chart">
    <Line :data="chartConfig.data" :options="chartConfig.options" :plugins="[tooltipLine]" />
  </div>
</template>
<style lang="scss" scoped>
.chart {
  max-height: spacing(33);
}
</style>