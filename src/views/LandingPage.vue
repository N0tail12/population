<template>
  <div class="split-page">
    <section class="split left">
      <h1>Function 1:</h1>
      <br />
      <h2>Show Default Function: Data of City/Province</h2>
      <br />
      <router-link :to="{ name: 'FirstFunc' }" class="buttonfunc">
        <button>
          Function 1
          <fa :icon="['fas', 'angle-double-right']"></fa>
        </button>
      </router-link>
    </section>
    <section class="split right">
      <h1>Function 2:</h1>
      <br />
      <h2>
        Show Second Function: Data of Districts with selected City/Province
      </h2>
      <br />
      <router-link :to="{ name: 'City' }" class="buttonfunc">
        <button>
          Function 2
          <fa :icon="['fas', 'angle-double-right']"></fa>
        </button>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.split-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Split the screen in half */
.split {
  width: 50%;
  padding-top: 20px;
  animation: taadaa 1s;
}

/* Control the left side */
.left {
}

/* Control the right side */
.right {
  border-left: 2px solid black;
}
#delay_1 {
  animation-delay: 0.75s;
}
#delay_2 {
  animation-delay: 1s;
}
.buttonfunc {
  animation: taadaa 1s;
}

.buttonfunc button {
  cursor: pointer;
  color: white;
  background: green;
  border: none;
  border-radius: 4px;
  height: 2.6em;
  width: 7.6em;
}
.buttonfunc button:hover {
  background: #17a317;
}

@keyframes taadaa {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
