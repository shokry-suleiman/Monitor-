<template>
  <div class="c-dashboard" id="performance">
    <div class="c-filters__container">
      <div class="c-filters__daterange">
        <div class="c-filters__startdate">
          <div class="c-filters__label">Start date:</div>
          <input type="date" v-model="startDate">
        </div>
        <div class="c-filters__enddate">
          <div class="c-filters__label">End date:</div>
          <input type="date" v-model="endDate">
        </div>
      </div>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component v-bind:performance="allPerformance | filterByDateRange(startDate, endDate)"/>
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import { mapGetters } from 'vuex'; 
import store from '../store';
export default {
  name: "AboutPapegeComponent",
  props: [],
  store,
  components: {
    PerformanceChartComponent,
  },
   data () {
    return {
      startDate:'',
      endDate: ''
    }
  },
  computed: mapGetters(['allPerformance']),
  mounted() {
    this.$store.dispatch("getPerformance");
  },
  methods: {

  }
};
</script>
