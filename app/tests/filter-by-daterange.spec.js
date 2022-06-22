import Vue from "vue";
import "@/components/filters";
import { mount, createLocalVue } from "@vue/test-utils";

const myComponent = Vue.component("myComponent", {
  data() {
    return {
      performance: [{"date_ms":1641772800000,"performance":0.2},{"date_ms":1641859200000,"performance":0.33},{"date_ms":1641945600000,"performance":0.83},{"date_ms":1642032000000,"performance":0.31},{"date_ms":1642118400000,"performance":0.65},{"date_ms":1642204800000,"performance":0.88},{"date_ms":1642291200000,"performance":0.9}],
      startDate:new Date("January 1, 2022").getTime(),
      endDate:new Date("January 16, 2022").getTime()
    };
  },
  template: "<p> {{ performance | filterByDateRange(startDate, endDate) }} </p>"
});


describe("filter by daterange", () => {
  it("filter performance data by daterange", () => {
    expect(filterByDateRange("actual")).toEqual("expected")
  });
});