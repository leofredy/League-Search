<template>

  <div class="loading-cards">
    <div class="wrapper">

      <div class="card item-1"></div>
      <div class="card item-2"></div>
      <div class="card item-3"></div>
      <div class="card item-4"></div>
      <div class="card item-5"></div>
      <div class="card item-6"></div>

      <div class="card item-7"></div>
      <div class="card item-8"></div>
      <div class="card item-9"></div>
      <div class="card item-10"></div>
      <div class="card item-11"></div>
      <div class="card item-12"></div>

      <div class="card item-13"></div>
      <div class="card item-14"></div>
      <div class="card item-15"></div>
      <div class="card item-16"></div>
      <div class="card item-17"></div>
      <div class="card item-18"></div>

    </div>
  </div>

</template>

<script>
export default {
  name: "LoadingCards"
}
</script>

<style scoped>
.loading-cards {
  overflow: hidden;
  margin: 0 auto;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 148px);
  grid-template-rows: repeat(6, 256px);
  gap: 26px;
}

.card {
  position: relative;
  width: 100%;
  height: 80%;


  animation: brabo infinite alternate 0.7s ease;
}


.item-1 {
  animation-delay: 0.1s;
}
.item-2 {
  animation-delay: 0.2s;
}
.item-3 {
  animation-delay: 0.3s;
}
.item-4 {
  animation-delay: 0.4s;
}
.item-5 {
  animation-delay: 0.5s;
}
.item-6 {
  animation-delay: 0.6s;
}

.item-7 {
  animation-delay: 0.7s;
}
.item-8 {
  animation-delay: 0.8s;
}
.item-9 {
  animation-delay: 0.9s;
}
.item-10 {
  animation-delay: 1s;
}
.item-11 {
  animation-delay: 1.1s;
}
.item-12 {
  animation-delay: 1.2s;
}



@keyframes sla {
  from {
    transform: scale(0.5);
  } to {
    transform: scale(0.8);
  }
}

@keyframes brabo {
  from {
    background-color: rgb(192, 191, 191);
    transform: translate3d(0,0,0);
  } to {
    background-color:rgb(126, 125, 125);
    transform: translate3d(0, 40px,0);
  }
}

@media(max-width: 1047px) {
  .wrapper {
    grid-template-columns: repeat(5, 138px);
    grid-template-rows: repeat(3, 230px);
  }
}

@media(max-width: 850px) {
  .wrapper {
    grid-template-columns: repeat(4, 130px);
  }
}

@media(max-width: 720px) {
  .wrapper {
    grid-template-columns: repeat(4, 90px);
  }
}

@media(max-width: 545px) {
  .wrapper {
    grid-template-columns: repeat(4, 60px);
  }
}

</style>