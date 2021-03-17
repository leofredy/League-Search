<template>

  <form v-on:submit.prevent="enviarPesquisa">
    <div class="input-container">
      <input 
        v-model="pesquisa"
        id="name" 
        placeholder="Pesquise um champion...."
        autocomplete="off"
        list="champions" 
        type="text">
      <label for="name"><img src="@/assets/svg/search.svg"></label>
    </div>
    
    <datalist v-if="$store.state.champions" id="champions">
      <option 
        v-for="(champion, index) in $store.state.champions" 
        :key="index" 
        :value="champion.name"
        class="champion"/>
    </datalist>
  </form>


</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      pesquisa: ""
    }
  },
  methods: {
    enviarPesquisa() {
      console.log(this.pesquisa);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 36px;
  background-color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
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

@media (max-width: 1024px) {
  form {
    margin: 20px 0;
  }
  .input-container {
    width: 100%;
  }
}

</style>