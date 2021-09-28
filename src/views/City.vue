<template>
  <form>
    <router-link :to="{ name: 'LandingPage' }">
      <button class="backBtn">
        <fa :icon="['fas', 'angle-double-left']"></fa>
        Back
      </button>
    </router-link>
    <br />
    <label for="">City/Province:</label>
    <select name="" id="" v-model="city">
      <option value="0" disabled>--Select City/Provine--</option>
      <option
        v-for="city in cities"
        :key="city.prefCode"
        :value="city.prefCode"
      >
        {{ city.prefName }}
      </option>
    </select>

    <router-link v-if="city" :to="{ name: 'Town', params: { prefCode: city } }">
      <button class="showTown">
        Show Districts <fa :icon="['fas', 'angle-double-right']"></fa>
      </button>
    </router-link>
  </form>
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
form {
  max-width: 720px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  min-height: 200px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.9em;
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
.showTown {
  float: right;
  margin-top: 40px;
  background: #673ab7;
  border-radius: 6px;
  height: 3.2em;
  width: 8.6em;
  border: none;
  cursor: pointer;
  color: white;
}
.showTown:hover {
  background: #673ab7bd;
}
.showTown a {
  text-decoration: none;
  font-size: 1.2em;
}
@media screen and (max-width: 480px) {
  .showTown {
    margin-top: 20px;
  }
}
@media screen and (max-width: 320px) {
  .showTown {
    margin-top: 15px;
  }
}
@media screen and (max-width: 280px) {
  .showTown {
    margin-top: 10px;
  }
}
</style>
