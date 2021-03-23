<template>
  <transition appear name="home-fade" mode="out-in">

    <section class="champions">
      <Input/>
      <h1>Champions</h1>
        <Slider v-if="$store.state.champions" key="slide"/>
        <LoadingCards v-else key="loading"/>
    </section>

  </transition>
</template>

<script>

import Input from "@/components/Input.vue";
import Slider from "@/components/Slider.vue";
import LoadingCards from "@/components/LoadingCards.vue";


export default {
  name: "Champions",
  components: {
    Input,
    Slider,
    LoadingCards
  },
  data() {
    return {
      teste: false
    }
  },
  methods: {
    enter() {

    }
  },
  created() {
    this.$store.dispatch("fetchChampions");
  },
}
</script>

<style scoped>

.champions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1059px;
  height: calc(100vh - 85px);
  padding: 0px 20px 50px 20px;
  margin: 0 auto;
}
h1 {
  border-bottom: 1px solid #004E76;
  padding-bottom: 8px;
  margin-bottom: 60px;
}

@media(max-width: 1024px) {
  .champions {
    height: calc(100vh - 80px);
  }
  h1 {
    text-align: center;
  }
}

.home-fade-enter-active,
.home-fade-leave-active {
  transform: translate3d(80px, 0px, 0);
  opacity: 0;
  transition: all 0.7s ease;
}

.home-fade-enter-to, 
.home-fade-leave {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

</style>