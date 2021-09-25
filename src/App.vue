<template>
  <h1>Title</h1>
  <form>
    <label for="">City</label>
    <select name="" id="" v-model="city">
      <option value="0" disabled>--Select Role--</option>
      <option
        v-for="city in cities"
        :key="city.prefCode"
        :value="city.prefCode"
      >
        {{ city.prefName }}
      </option>
    </select>
    <button class="showTown" v-if="city">
      <router-link :to="{ name: 'Town', params: { prefCode: city } }"
        >Show Town
      </router-link>
    </button>
  </form>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      cities: [],
      city: 0,
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
      .then((data) => (this.cities = data.result))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  background: #eee;
}
form {
  max-width: 920px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>
