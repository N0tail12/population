<template>
  <div>
    <apexchart
      width="100%"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      options: {
        chart: {
          id: "poppulartion",
        },
        xaxis: {
          categories: [
            1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030,
            2035, 2040, 2045, 2050,
          ],
        },
        stroke: {
          curve: "smooth",
        },
      },
      series: this.data,
    };
  },
};
</script>
