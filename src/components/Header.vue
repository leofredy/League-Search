<template>
  <header>
    <div id="logo">
      <img src="../assets/img/logo.png" alt="League of Search">
    </div>
    <nav :class="{show: active}" class="menu">
      <ul class="pages">
        <li><a href="#">home</a></li>
        <li><a href="#">sobre</a></li>
      </ul>
      <ul class="redes-sociais">
        <li><a href=""><img src="../assets/svg/github.svg" alt=""></a></li>
        <li><a href=""><img src="../assets/svg/instagram.svg" alt=""></a></li>
      </ul>
      <span class="marca">League Seearch</span>
    </nav>
    <div @click="active = !active" :class="{show: active}" class="btn-menu"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      active: false,
    }
  }
}
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 10px 20px;
  margin: 0 auto;
}

#logo {
  width: 60px;
}

#logo img {
  display: block;
  width: 100%;
}

.menu {
  display: flex;
}

.pages {
  display: flex;
  align-items: center;
}

.pages a {
  display: block;
  padding: 20px 30px;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
}

.pages img {
  width: 25px;
}

.redes-sociais {
  display: flex;
  align-items: center;
}

.redes-sociais li:not(:first-child) {
  margin-left: 16px;
}

.btn-menu { 
  display: none;
  position: relative;
  width: 40px;
  height: 50px;
  z-index: 99;
}

.btn-menu::after {
  content: "";
  position: absolute;
  top: 17px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: transform 0.7s ease-in-out;
}

.btn-menu::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: transform 0.7s ease-in-out;
}

.marca {
  display: none;
}

@media (max-width: 1024px) {
  .menu {    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    max-width: 350px;
    padding: 80px 0;
    transform: translate3d(100%, 0, 0);
    background-color: #004E76;
    z-index: 98;
    transition: transform 0.7s ease-in-out;
  }

  .menu.show {
    transform: translate3d(0%, 0, 0);
  }

  .pages {
    display: flex;
    flex-direction: column;
  }

  .pages li {
    width: 100%;
    text-align: center;
  }

  .pages li:active {
    background-color: #315e75;
  }

  .redes-sociais {
    display: flex;
    justify-content: center;
  }

  .redes-sociais li:not(:first-child) {
    margin-left: 12px;
  }

  .marca {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 10px;
    text-align: center;
    font-weight: 400;
    font-size: 1.0rem;
  }

  .btn-menu {
    display: block;
  }

  .btn-menu.show::before {
    top: 50%;
    transform: rotate(225deg);
  }

  .btn-menu.show::after {
    top: 50%;
    transform: rotate(313deg);
  }
}

</style>
