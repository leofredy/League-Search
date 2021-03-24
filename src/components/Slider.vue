<template>
  
  <div 
    @mousedown="onStart($event)" 
    @touchstart.passive="onStart($event)"
    @mouseup="onEnd($event)"
    @touchend="onEnd($event)"
    @wheel="onMoveWheel($event)" 
    class="wrapper">

    <ul  ref="slides" class="slide">
      <li v-for="(champion, index) in $store.state.champions" :key="index">
        <router-link   :to="`/champions/${champion.id}`" class="slide-link">
          <img :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`" :alt="champion.name">
          <p class="name-champion">{{champion.name}}</p>
        </router-link>
      </li>
    </ul>
    
  </div>

</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      dist: {
        finalPosition: 0,
        startY: 0,
        moviment: 0,
        movePosition: 0,
        speed: 0.9,
        hadMovement: false,
      },
      slideArray: [
        {
          positionElement: 20
        }
      ],
      activeClass: "active",
      index: {
         prev: 1,
         active: 2,
         next: 3,
      },
      cards: 0,
      timer: null,

    }
  },
  methods: {
    onStart(event) {
      this.transition(false);
      let eventMove;
      event.preventDefault();
      if (event.type === "mousedown" || event.type === "wheel") {
        this.dist.startY = event.screenY;
        eventMove = "mousemove";
      } else {
        this.dist.startY = event.changedTouches[0].clientY;
        eventMove = "touchmove";
      }

      event.currentTarget.addEventListener(eventMove, this.onMove);
      
    },
    onEnd(event) {
      event.currentTarget.removeEventListener("mousemove", this.onMove);
      if (this.dist.hadMovement) {
        this.dist.finalPosition = this.dist.movePosition;
        this.transition(true);
        this.changeSlidesOnEnd();
      }
      this.dist.hadMovement = false;
    },
    onMove(event) {
      this.dist.hadMovement = true;
      const positionY = event.type === "mousemove" ? event.screenY : event.changedTouches[0].clientY;
      const finalPosition = this.updatePosition(positionY);
      this.moverSlide(finalPosition);
      this.checkDisplayRange(event.screenX, event.screenY, event);
    },
    updatePosition(position) {
      this.dist.moviment = (position - this.dist.startY) * this.dist.speed;
      return this.dist.finalPosition + this.dist.moviment //soma para não sobreescrever, uma vez já rolado.
    },
    moverSlide(distancia) {
      this.dist.movePosition = distancia;
      this.$refs.slides.style.transform = `translate3d(0, ${distancia}px, 0)`;
    },
    checkDisplayRange(screenX, screenY, event) {
      const RANGE_MAX_DISPLAY_TOP = 390;
      const RANGE_MAX_DISPLAY_BOTTOM = 900;
      const RANGE_MAX_DISPLAY_LEFT = 150;
      const RANGE_MAX_DISPLAY_RIGTH = 1100;
      if (screenY < RANGE_MAX_DISPLAY_TOP || screenY > RANGE_MAX_DISPLAY_BOTTOM || screenX < RANGE_MAX_DISPLAY_LEFT || screenX > RANGE_MAX_DISPLAY_RIGTH) {
        this.onEnd(event);
      }
    },
    transition(active) {
      this.$refs.slides.style.transition = active ? "transform 0.3s" : "";
    },
    changeSlidesOnEnd() {
      if (this.dist.moviment < -120 && this.index.next) {
        this.activeNextSlide();
      } else if (this.dist.moviment > 120 && this.index.prev !== undefined) {
        this.activePrevSlide();
      } else {
        this.changeSlide(this.index.active);
      }
    },
    changeSlide(index) {
      this.transition(true);
      this.moverSlide(this.slideArray[index].positionElement);
      this.slidesIndexNav(index);
      this.changeActiveClass();
      this.dist.finalPosition = this.slideArray[index].positionElement;
    },
    slidesConfig() {
      try {
        this.slideArray = [...this.$refs.slides.children].map(element => {
          const positionElement = this.slidePosition(element);
          return { positionElement, element };
        });
      } catch(error){
        console.log(error);
      }

    },
    slidePosition(element) {
      const divWrapper = element.parentElement.parentElement;
      const alturaWrapper = divWrapper.offsetHeight;
      const margin = (alturaWrapper - element.offsetHeight) / 2;
      return -(element.offsetTop - margin);
    },
    slidesIndexNav(index) {
      
      const last = this.$store.state.champions.length;
      this.cards = Math.trunc(this.$refs.slides.parentElement.offsetWidth / this.$refs.slides.children[0].offsetWidth);
      this.index = {
        prev: (index - this.cards) >= 0 ? index - this.cards : undefined,
        active: index,
        next: (index + this.cards) >= last ? last - 1 : (index + this.cards),
      };
    },
    slidesLinePosition() {
      const lineCurrent = Math.ceil((this.index.active + 1) / this.cards);
      const lastCard = lineCurrent * this.cards;
      return lastCard;
    },
    changeActiveClass() {
      this.slideArray.forEach(card => {
        card.element.classList.remove(this.activeClass);
      });

      const lastCard  = this.slidesLinePosition();
      for (let i = 0; i < this.cards; i++) {
        const card = lastCard - (i + 1);
        if (card <= this.$store.state.champions.length - 1) {
          this.slideArray[card].element.classList.add(this.activeClass);
        }
      }
    },
    activeNextSlide() {
      this.changeSlide(this.index.next);
    }, 
    activePrevSlide() {
      if (this.index.prev !== undefined) {
        this.changeSlide(this.index.prev);
      }
    },
    onMoveWheel(event) {
      const ENLARGE_SCROLL = 1.4;
      const DIRECTION_SCROLL_MOVE = -1
      const movimentScroll = event.deltaY * ENLARGE_SCROLL * DIRECTION_SCROLL_MOVE;

      this.dist.moviment = movimentScroll;
      this.changeSlidesOnEnd();
    },
    addResizeEvents() {
      window.addEventListener("resize", this.onResize);
    },
    onResize() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.slidesConfig();
        this.changeSlide(this.index.active);
      }, 100);
    },
    init() {
      this.slidesConfig();
      this.changeSlide(0);
      this.addResizeEvents();
      this.onResize();
    },
    executarRouterLinkMobile(event) {
      console.log(event.currentTarget);
    }
  },
  mounted() {
    this.init();
  },

}
</script>

<style scoped>

img {
  display: block;
  width: 100%;
}
.wrapper {
  overflow: hidden;
  flex: 1;
}
.slide {
    display: grid;
    grid-template-columns: repeat(6, 148px);
    column-gap: 26px;
    width: 100%;
    height: 602px;
}
.slide li {
  position: relative;
  width: 148px;
  height: 265.81px;
  background-color: #fff;
  border: 2px solid #004E76;

  /*Cards não ativos!!*/
  transform: scale(0.8);
  transition: transform 0.3s;
}

.slide li.active {
  transform: scale(1);
}

.slide li::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  border-top: 2px solid #004E76;
}

.slide li img {
  opacity: 0.8;
  transition: opacity;
}

.slide li.active img {
  opacity: 1;
}

.name-champion {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #0095CC;
}

@media (max-width: 1060px) {
  .wrapper {
    margin: 0 auto;
  }
  .slide {
    grid-template-columns: repeat(4, 148px);
  }
}

@media (max-width: 724px) {
  .slide {
    grid-template-columns: repeat(3, 148px);
  }
}

@media (max-width: 544px) {
  img {
    height: 100%;
  }
  .slide {
    grid-template-columns: repeat(2, 148px);
  }

  .slide li {
    height: 250px;
  }
}

</style>