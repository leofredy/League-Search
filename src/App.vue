<template>
  <div id="app">
    <Champions/>
  </div>
</template>

<script>

import Champions from "@/views/Champions.vue";

export default {
  name: 'App',
  components: {
    Champions
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-size: 62.5%;
  font-family: 'Poppins', sans-serif;
}

h1, h2, h3, h4, p, span {
  color: #fff;
}

h1 {
  font-size: 3.2rem;
  font-weight: 500;
}

h2 {
  font-size: 2.2rem;
  font-weight: 500;
}

p, span {
  font-size: 1.4rem;
  font-weight: 400;
}

ul {
  list-style: none;
}

</style>
