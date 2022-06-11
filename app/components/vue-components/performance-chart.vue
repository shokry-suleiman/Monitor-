<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },

  data() {
    return {
      chartData: [
        {
          date_ms: 1641772800000,
          performance: 0.2,
        },
        {
          date_ms: 1641859200000,
          performance: 0.33,
        },
        {
          date_ms: 1641945600000,
          performance: 0.53,
        },
        {
          date_ms: 1642032000000,
          performance: 0.31,
        },
        {
          date_ms: 1642118400000,
          performance: 0.65,
        },
        {
          date_ms: 1642204800000,
          performance: 0.88,
        },
        {
          date_ms: 1642291200000,
          performance: 0.07,
        },
      ],
    };
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 10,
          backgroundColor: '#172236',
          borderColor: '#172236',
          borderWidth: '0.8',
          textStyle: {
              color: '#FFF'
          },
          formatter: function (params) {
            console.log('params',params)
            return `<div style="text-align:center;font-weight:600">${params[0].name}</div>
              ${params[0].marker} Team Performance Index: ${(Math.round(params[0].value))}%`;
          }
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2
            },
          },
        ],
        visualMap: {
        top: 50,
        right: 10,
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#ee5f48'
          },
          {
            gt: 50,
            lte: 80,
            color: '#f8d530'
          },
          {
            gt: 80,
            lte: 100,
            color: '#178b48'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      },
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
