import Vue from 'vue';

Vue.filter('filterByDateRange', (value, startDate, endDate) => {
  if (startDate === '' || endDate === '') {
    return value;
  }
  return value.filter(function (item) {
    return item.date_ms > new Date(startDate).getTime() &&
     item.date_ms <= new Date(endDate).getTime();
  });
});
