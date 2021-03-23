<template>
    <div 
        :style="{backgroundImage: `url(${$store.state.skinBackgroundActive})`}"
        class="banner"
    >
        <SlideSkins/>

    </div>
</template>

<script>

import SlideSkins from "@/components/SlideSkins.vue";

export default {
    name: "BackgroundChampion",
    components: {
        SlideSkins,
    }
}
</script>

<style scoped>
.banner {
    position: relative;
    margin: 0 auto 168px auto;
    max-width: 1240px;
    height: 500px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
}

.banner::after {
    content: "";
    position: absolute;
    top: -4px;
    bottom: -4px;
    right: -1px;
    left: -1px;
    background: radial-gradient(44.54% 79.03% at 63.99% 14.44%, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 1) 100%);
}

@media (max-width: 1241px) {
    .banner::after {
        right: 0;
        left: 0;
    }
}

</style>