<template>
  <form>
    <router-link :to="{ name: 'LandingPage' }">
      <button class="backBtn">
        <fa :icon="['fas', 'angle-double-left']"></fa>
        Back
      </button>
    </router-link>
    <br />
    <label>都道府県</label>
    <div class="container" v-if="towns.length > 0">
      <div v-for="town in towns" :key="town.prefCode" class="town">
        <input
          type="checkbox"
          :value="town.prefCode"
          v-model="checked"
          @change="updateChecked"
        />
        <label>{{ town.prefName }}</label>
      </div>
    </div>
    <div class="container" v-else>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
      <div>
        <input type="checkbox" class="skeleton" disabled />
        <label class="skeleton skeleton-text"></label>
      </div>
    </div>
    <Chart
      :data="data"
      v-if="this.data.length > 0 && this.checked.length > 0"
    />
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
      VUE_APP_X_API_KEY: process.env.VUE_APP_X_API_KEY,
      towns: [],
      checked: [],
      data: [],
    };
  },
  async mounted() {
    await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      method: "GET",
      headers: {
        "X-API-KEY": this.VUE_APP_X_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => (this.towns = data.result))
      .catch((err) => console.log(err));
  },
  methods: {
    async updateChecked() {
      this.data = [];
      for (let i = 0; i < this.checked.length; ++i) {
        await fetch(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${this.checked[i]}`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": this.VUE_APP_X_API_KEY,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(this.towns);
            console.log(this.checked);
            var name = this.towns.filter((value) => {
              if (value.prefCode == this.checked[i]) return value.prefName;
            });
            console.log(data.result.data[0].data);
            var raw = data.result.data[0].data;
            var value = raw
              .filter((value) => value.year >= 1980 && value.year <= 2015)
              .map((value) => value.value);
            console.log(value);
            var newData = { name: name[0].prefName, data: value };
            if (!this.data.some((obj) => obj.name == name[0].prefName))
              this.data.push(newData);
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
<style></style>
