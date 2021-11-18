<template>
  <h1 class="reveal">Population<span></span></h1>
  <router-view />
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap");
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
.reveal {
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
  /* border-bottom: 3px solid black; */
  font-family: "PT Sans", sans-serif;
}
.reveal span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  animation: overlay 1s ease forwards;
  animation-delay: 0.5s;
}
::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #202225;
  border: 2px solid #282a2d;
  border-radius: 10px;
}
@keyframes overlay {
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
</style>
