<template>
  <form>
    <router-link :to="{ name: 'City' }">
      <button class="backBtn">
        <fa :icon="['fas', 'angle-double-left']"></fa>
        Back
      </button>
    </router-link>

    <div class="container">
      <div v-for="town in towns" :key="town.cityCode" class="town">
        <input type="checkbox" />
        <label>{{ town.cityName }}</label>
      </div>
    </div>
    <Chart />
  </form>
</template>
<script>
import Chart from "../components/Chart.vue";
export default {
  components: {
    Chart,
  },
  data() {
    return {
      prefCode: this.$route.params.prefCode,
      towns: [],
    };
  },
  // Problem: It's keep endering nonstop. Fix it!
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
.backBtn {
  background: #673ab7;
  border-radius: 6px;
  height: 2.6em;
  width: 7.6em;
  border: none;
  color: white;
  cursor: pointer;
}

.backBtn a {
  text-decoration: none;
  font-size: 1.2em;
}
@media screen and (max-width: 480px) {
  .container {
    grid-template-columns: auto auto auto;
  }
}
@media screen and (max-width: 320px) {
  .container {
    grid-template-columns: auto auto;
  }
}
@media screen and (max-width: 240px) {
  .container {
    grid-template-columns: auto auto;
  }
}
</style>
