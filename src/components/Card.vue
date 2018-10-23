<template>
  <div class="card" :class="suitColor[data.suit]">
    <span class="card__suit card__suit--top">{{ data.suit }}</span>
    <span class="card__number">{{ data.rank }} </span>
    <span class="card__suit card__suit--bottom">{{ data.suit }}</span>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      suitColor: {
        "♠": "black-card",
        "♣": "black-card",
        "♦": "red-card",
        "♥": "red-card"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  background: white;
  width: 75px;
  height: 100px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  position: relative;
}

.card__suit {
  width: 100%;
  display: block;
}

.card__suit--top {
  text-align: left;
  padding-left: 5px;
}

.card__suit--bottom {
  position: absolute;
  bottom: 0px;
  text-align: left;
  transform: rotate(180deg);
  padding-left: 5px;
}

.card__number {
  width: 100%;
  position: absolute;
  top: 40%;
  left: 0;
}

.red-card {
  color: #ff0000;
}

.black-card {
  color: #000;
}
</style>

