<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Video/>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Video from "@/components/Video.vue";

export default {
  name: 'App',
  components: {
    Header,
    Video,
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

.v-enter-active,
.v-leave-active {
  transform: translate3d(-80px, 0px, 0);
  opacity: 0;
  transition: all 0.7s ease;
}

.v-enter-to, 
.v-leave {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

</style>
