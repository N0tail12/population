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
      towns: [],
      checked: [],
      data: [],
    };
  },
  async mounted() {
    await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      method: "GET",
      headers: {
        "X-API-KEY": "fkbgSWJE8m21DD27xM5AJfIQwN14LCVs5jfVopTp",
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
              "X-API-KEY": "fkbgSWJE8m21DD27xM5AJfIQwN14LCVs5jfVopTp",
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

.skeleton {
  margin-bottom: 0.5em;
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-text {
  height: 0.5em;
  width: 80%;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

@media screen and (max-width: 600px) {
  .container {
    grid-template-columns: auto auto auto;
  }
  form {
    padding: 10px;
  }
  label {
    font-size: 0.7em;
  }
}

@media screen and (max-width: 480px) {
  .container {
    grid-template-columns: auto auto auto;
  }
  form {
    padding: 10px;
  }
  label {
    font-size: 0.6em;
  }
}
@media screen and (max-width: 320px) {
  .container {
    grid-template-columns: auto auto;
  }
  form {
    padding: 5px;
  }
}
@media screen and (max-width: 280px) {
  .container {
    grid-template-columns: auto auto;
  }
  form {
    padding: 0px;
  }
}
</style>
