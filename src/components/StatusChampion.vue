<template>
  <div class="status">
    <span>{{ attribute.name | changeTextUpperCase }}</span>
    <span>{{ attribute.value }}</span>
    <div :class="['status-bar', attribute.name]"></div>
  </div>
</template>

<script>
export default {
  name: "StatusChampion",
  props: {
    attribute: {
      type: Object,
      required: true,
      name: {
        type: String,
      },
      value: {
        type: Number,
      }
    }

  },
  filters: {
    changeTextUpperCase(text) {
      return text.toUpperCase();
    }
  }
};
</script>

<style scoped>
.status {
  display: grid;
  grid-template-columns: 1fr auto;
}

.status:not(:last-child) {
  margin-bottom: 12px;
}

.status-bar {
  grid-column: 1 / 3;
  height: 3px;
}

.life {
  background-color: #00FF38;
}

.mana {
  background-color: #0047FF;
}

.movespeed {
  background-color: #9c9c9c;
}

.attack {
  background-color: #ff0000;
}

.armor {
  background-color: #834522;
}
</style>