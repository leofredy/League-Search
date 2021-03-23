<template>
  <section id="bg-video">
    <video class="video" autoplay muted loop>
      <source src="../assets/video/video.mp4" type="video/mp4">
    </video>
  </section>
</template>

<script>
export default {
  name: "Video",
}
</script>

<style scoped>
#bg-video {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -3;
}

#bg-video::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(110deg, #0A0C10 25%, #0b0c10cc 50%, #0A0C10 70%);
}

.video {
  position: relative;
  height: 100vh;
  z-index: -99;
}

</style>