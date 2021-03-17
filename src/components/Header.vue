<template>
  <header>
    <div id="logo">
      <img src="../assets/img/logo.png" alt="League of Search">
    </div>
    <nav class="menu-container">
      <ul class="menu">
        <li><a href="#">home</a></li>
        <li><a href="#">sobre</a></li>
      </ul>
    </nav>
    <ul class="redes-sociais">
      <li><a href=""><img src="../assets/svg/github.svg" alt=""></a></li>
      <li><a href=""><img src="../assets/svg/instagram.svg" alt=""></a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>

header {
  display: flex;
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

.menu a {
  display: block;
  padding: 20px 30px;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
}

.redes-sociais {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.redes-sociais li {
  margin-left: 30px;
}

.redes-sociais img {
  width: 25px;
}

</style>
