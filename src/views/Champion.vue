<template>
  <transition appear mode="out-in">

    <section v-if="$store.state.champion" class="champion">
      <div class="container-champion">
        <BackgroundChampion/>
        <History/>
        <Informations/>
      </div>
    </section>

  </transition>
</template>

<script>

import BackgroundChampion from "@/components/BackgroundChampion.vue";
import History from "@/components/History.vue";
import Informations from "@/components/Informations.vue";

export default {
  name: "Champion",
  components: {
    BackgroundChampion,
    History,
    Informations,
  },
  methods: {
    getChampion() {
      this.$store.dispatch("fetchChampion", this.$route.params.id);
    }
  },
  created() {
    this.getChampion();
  }
}
</script>

<style scoped>
.champion {
  background-color: #111;
}

.container-champion {
  position: relative;
  top: -85px;
}


</style>