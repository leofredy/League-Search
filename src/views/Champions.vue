<template>
  <section class="champions">
    <Input/>
    <h1>Champions</h1>
    <transition>
      <Slider v-if="$store.state.champions"/>
      <LoadingCards v-else/>
    </transition>
  </section>
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
  max-height: 921px;
  height: calc(100vh - 81px);
  padding: 0px 20px 50px 20px;
  margin: 0 auto;
}
h1 {
  border-bottom: 1px solid #004E76;
  padding-bottom: 8px;
  margin-bottom: 60px;
}

@media(max-width: 1060px) {
  h1 {
    text-align: center;
  }
}

</style>