<template>
    <section class="history">
        <h2 class="text-title">{{$store.state.champion[0].title}}</h2>
        <p class="text-sinopse">{{$store.state.champion[0].lore}}</p>
    </section>
</template>

<script>
export default {
    name: "History",
}
</script>

<style scoped>

.history {
  margin: 0 auto;
  max-width: 508px;
  text-align: center;
  margin-bottom: 46px;
}

.text-title {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 16px;
}

.text-sinopse {
  font-size: 1.2rem;
}

</style>