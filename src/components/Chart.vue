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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
