<template>
  <form>
    <div class="container">
      <div v-for="town in towns" :key="town.cityCode" class="town">
        <input type="checkbox" />
        <label>{{ town.cityName }}</label>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      prefCode: this.$route.params.prefCode,
      towns: [],
    };
  },
  async mounted() {
    await fetch(
      "https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=" +
        this.prefCode,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "fkbgSWJE8m21DD27xM5AJfIQwN14LCVs5jfVopTp",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => (this.towns = data.result))
      .catch((err) => console.log(err));
  },
};
</script>
<style>
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
</style>
