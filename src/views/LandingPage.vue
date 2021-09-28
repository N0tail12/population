<template>
  <div class="main-container">
    <div class="main_content">
      <h1>Welcome to my Yumemi's FE Project</h1>
      <h2>There are 2 options down bellow.</h2>
      <ul>
        <li>Show Data of City/Province</li>
        <li>Show Data of Districts with selected City/Province</li>
      </ul>
      <div class="button_group">
        <router-link :to="{ name: 'FirstFunc' }">
          <button>Option 1</button>
        </router-link>
        <router-link :to="{ name: 'City' }">
          <button>Option 2</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main_content {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%),
    url(https://ec.europa.eu/eurostat/documents/12743486/12791587/Shutterstock728290135+by+hobbit+.png/2d454739-8c01-d6ea-f33e-d4e30a9262c5?t=1625127940763)
      no-repeat;
  text-align: left;
  position: relative;
  margin: 0 auto;
  background-size: cover;
  min-height: 100vh;
  animation: taadaa 2s ease;
}

.main_content li {
  font-size: 1.5rem;
  list-style: inside;
}
.main_content h1 {
  font-size: 4rem;
}
.main_content h2 {
  font-size: 3rem;
}
.button_group {
  padding-top: 6rem;
}
.button_group button {
  color: white;
  cursor: pointer;
  width: 10rem;
  margin: 1.5rem 1.5rem 0 0;
  letter-spacing: 0.25rem;
  background: transparent;
  border: 3px solid white;
  display: inline-block;
  text-transform: uppercase;
  line-height: 5rem;
  transition: all 0.5s ease-in-out;
}
.button_group button:hover {
  background: white;
  color: black;
}
/* .split-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 500px;
  border: 1px solid #e7ebee;
  background-color: white;
  box-shadow: 0 8px 24px rgb(0 0 0 / 2%);
} */
@keyframes taadaa {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 480px) {
  .button_group button {
    width: 9rem;
  }
}
@media screen and (max-width: 320px) {
  .button_group button {
    width: 8rem;
  }
}
@media screen and (max-width: 280px) {
  .button_group button {
    font-size: 0.75rem;
    width: 7rem;
  }
}
</style>
