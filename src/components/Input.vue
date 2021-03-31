<template>

  <form v-on:submit.prevent="enviarPesquisa">
    <div :class="{show: pesquisa}" class="input-container">
      <input
        v-model="pesquisa"
        v-on:input="carregarSugestoes"
        id="name"
        placeholder="Pesquise um champion...."
        autocomplete="off"
        type="text">
      <label @click="enviarPesquisa" for="name"><img src="@/assets/svg/search.svg"></label>
      <ul v-if="sugestoes.length > 0" class="sugestoes">
        <li
          v-for="(champion, index) in sugestoes"
          :key="index"
        >
          <router-link :to="`/champions/${champion.id}`" class="sugestao">
            <img
              :src="`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${champion.id}.png`"
              :alt="champion.name"
              class="sugestao-square">
            <span class="sugestao-text">{{ champion.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>

  </form>


</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      pesquisa: "",
      sugestoes: []
    }
  },
  watch: {
  },
  methods: {
    enviarPesquisa() {
      if (this.sugestoes.length > 0) {
        this.$router.push({
          name: "Champion",
          params: {id: this.sugestoes[0].id}
        });
      }
    },
    carregarSugestoes() {
      this.sugestoes = this.$store.state.champions.filter(champion => {
        if (this.pesquisa) {
          return champion.name.toLowerCase().includes(this.pesquisa.toLowerCase());
        }
      });
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
}

.input-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 36px;
  background-color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  z-index: 98;
  transition: transform 0.4s ease;
}

.input-container:hover {
  transform: scale(1.05);
}


.input-container:hover > .sugestoes  {
  transform: scale(1.001);
}

.show {
  border-radius: 4px 4px 0px 0px;
}

#name {
  display: block;
  flex: 1;
  height: 100%;

  font-size: 1.4rem;
  color: #A0A0A0;
  border: none;
  background: none;
  outline: none;
}

.sugestoes {
  position: absolute;
  top: 95%;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;
  z-index: 97;
  transform: scale(1);

  transition: transform 0.4s ease;
}

.sugestao {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  text-decoration: none;
}

.sugestao:hover {
  background-color: #eeeeee;
}

.sugestao-square {
  width: 40px;
  margin-right: 12px;
}

.sugestao-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: #004e76;
}



::webkit-scrollbar {
  -webkit-border-radius: 4px;
}

@media (max-width: 1024px) {
  form {
    margin: 20px 0;
  }
  .input-container {
    width: 100%;
  }
}

</style>