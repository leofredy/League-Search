<template>
  <section class="informations">
    <h1 class="text-informations">Informações</h1>

    <article class="dica">
      <h2 class="text-title">Dicas</h2>

      <h3 class="text-subtitle">Jogando com</h3>
      <p 
        v-for="(dicaCom, index) in champion[0].allytips" 
        :key="`com-${index}`"
        class="text-dicas"
      > {{ dicaCom }} </p>

      <h3 class="text-subtitle">Jogando contra</h3>
      <p 
        v-for="(dicaContra, index) in champion[0].enemytips"
        :key="`contra-${index}`"
        class="text-dicas"
      >
        {{ dicaContra }}
      </p>
    </article>

    <article class="atributos">
        <h2 class="text-title">Atributos Iniciais</h2>

        <StatusChampion :attribute="{name: 'life', value: champion[0].stats.hp}"/>
        <StatusChampion :attribute="{name: 'mana', value: champion[0].stats.mp}"/>
        <StatusChampion :attribute="{name: 'attack', value: champion[0].stats.attackdamage}"/>
        <StatusChampion :attribute="{name: 'armor', value: champion[0].stats.armor}"/>
        <StatusChampion :attribute="{name: 'movespeed', value: champion[0].stats.movespeed}"/>

    </article>

  </section>
</template>

<script>

import { mapState } from "vuex";
import StatusChampion from "@/components/StatusChampion.vue";

export default {
  name: "Informations",
  components: {
    StatusChampion,
  },
  computed: {
    ...mapState(["champion"]),
  }
}
</script>

<style scoped>
.informations {
  display: grid;
  grid-template-columns: 1fr 378px;
  column-gap: 36px;
  max-width: 934px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.text-informations {
  grid-column: 1 / 3;
  margin-bottom: 22px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
}

.dica .text-title,
.atributos .text-title {
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 13px;
}

.dica .text-subtitle {
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 20px;
}

.dica .text-subtitle:not(:first-child) {
  margin-top: 20px;
}

.text-dicas {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 8px;
}


@media (max-width: 934px) {
  .informations {
    grid-template-columns: 1fr;
  }
  .text-informations {
    grid-column: 1;
  }
  .atributos {
    grid-row: 2;
    margin-bottom: 20px;
  }
}

</style>