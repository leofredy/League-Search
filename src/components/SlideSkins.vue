<template>
  <div class="wrapper">
    <div ref="skins" class="skins">
      <div v-for="skin in champion[0].skins" :key="skin.id" class="skin">
        <img
          :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion[0].id}_${skin.num}.jpg`"
          :alt="skin.name"
        />
      </div>
    </div>

    <div class="wrapper-controllers">
      <div ref="controls" class="controllers">
        <div
					@click="changeSkin($event)"
          v-for="skin in champion[0].skins"
          :key="skin.id"
          class="controller"
        >
          <img
            :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion[0].id}_${skin.num}.jpg`"
            :alt="skin.name"
          />
        </div>
      </div>
    </div>
    <h1 class="text-name">{{ nameSkinActive }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { tns } from "@/../node_modules/tiny-slider/src/tiny-slider.js";

export default {
  name: "SlideSkins",
  data() {
    return {
        tinySlider: {},
        nameSkinActive: "",
    };
  },
  computed: {
    ...mapState(["champion"]),
  },
	methods: {
		slideStart() {
			this.tinySlider = tns({
				container: this.$refs.controls,
        items: this.$refs.controls.children.length,
				edgePadding: 18,
				fixedWidth: 80,
				swipeAngle: false,
				speed: 400,
				mouseDrag: true,
				controls: false,
				nav: false,
				loop: false,

			});
		},
		changeSkin(event, elementHTML) {
			let control;

			if (event) {
				control = event.currentTarget
			} else {
				control = elementHTML;
			}

      const imgControl = control.children[0];
      const srcImgControl = imgControl.src;
      const idImgControl = srcImgControl.replace(/\D/g, "");

      const listSkins = this.$refs.skins.children;

      this.handleIndexSkinClick(control);
      this.searchSkinImgById(idImgControl, listSkins);
      this.informationSkinActive(srcImgControl);
      
		},
    searchSkinImgById(idImgControl, listSkins) {
      const lengthSkins = listSkins.length;

			for(let count = 0; count < lengthSkins; count++) {
				const srcSkin = listSkins[count].children[0].src;

				if (srcSkin.replace(/\D/g, "") === idImgControl) {
					listSkins[count].style.opacity = 1;
				} else {
					listSkins[count].style.opacity = 0;
				}
			}
    },
    handleIndexSkinClick(element) {
      const cssID = element.id;
      const index = cssID.split("-")[1].replace(/\D/g, "");
      this.handleNameSkin(index);
    },
    informationSkinActive(srcImg) {
      this.$store.commit("SET_SKIN_BACKGROUND_ACTIVE", srcImg);
    },
    handleNameSkin(index) {
      const nameChampion = this.champion[0].name;
      const skin = this.champion[0].skins[index];
      const nameSkin = skin.name;
      this.nameSkinActive = nameSkin === "default" ? nameChampion : nameSkin;
    }
    
	},
  mounted() {
    this.slideStart(); 
		this.changeSkin(false, this.$refs.controls.children[0]);
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  z-index: 98;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate3d(0px, 170px, 0px);
}

.skins {
  position: relative;
  width: 184px; 
  height: 342px;
  overflow: hidden;
}

.skin {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.skin img {
  display: block;
  width: 200px;
}

.wrapper-controllers {
  max-width: 280px;
  overflow: hidden;
  margin: 16px 0;
}

.controllers {
  display: flex;
}

.controller {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  transform: scale(0.8);
  cursor: pointer;
}

.controller img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.controller:hover {
  transform: scale(1);
}

.text-name {
  font-size: 2.2rem;
  font-weight: 500;
}

@media (max-width: 950px) {
  #tns9 > .tns-item {
    width: 90px;
    height: 90px;
  }
}
</style>