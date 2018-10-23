<template>
  <article class="suffle-cards">
    <h1 class="title">SHUFFLE CARDS </h1>
    <div class="count-section">
      # of Shuffles: {{ shuffleCount }}
    </div>
    <div class="speed-buttons">
      <button class="button is-small" :class="{ 'is-light': shuffleSpeed !== 'shuffleSlow' }" @click="shuffleSpeed = 'shuffleSlow'">
        Slow
      </button>
      <button class="button is-small" :class="{ 'is-light': shuffleSpeed !== 'shuffleMedium' }" @click="shuffleSpeed = 'shuffleMedium'">
        Medium
      </button>
      <button class="button is-small" :class="{ 'is-light': shuffleSpeed !== 'shuffleFast' }" @click="shuffleSpeed = 'shuffleFast'">
        Fast
      </button>
    </div>
    <div class="main-buttons">
      <button v-if="isDeckShuffled" @click="displayInitialDeck" class="button is-primary is-outlined">
        Reset <i class="fas fa-undo"></i>
      </button>
      <button @click="shuffleDeck" class="button is-primary">
        Shuffle <i class="fas fa-random"></i>
      </button>
    </div>
    <div class="deck">
      <transition-group :name="shuffleSpeed" tag="div" class="deck">
        <Card v-for="card in cards" :key="card.id" class="card" :data="card" />
      </transition-group>
    </div>
  </article>
</template>

<script>
import Vue from 'vue';

import Card from "../components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: ["♥", "♦", "♠", "♣"],
      cards: [],
      shuffleSpeed: "shuffleMedium",
      shuffleTypes: ["Slow", "Medium", "Fast"],
      isDeckShuffled: false,
      shuffleCount: 0
    };
  },
  created() {
    this.displayInitialDeck();
  },
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];
      for (let s = 0; s < this.suits.length; s++) {
        for (let r = 0; r < this.ranks.length; r++) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          };
          this.cards.push(card);
          id++;
        }
      }
      this.isDeckShuffled = false;
      this.shuffleCount = 0;
    },
    shuffleDeck() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        let temp = this.cards[i];
        Vue.set(this.cards, i, this.cards[randomIndex]);
        Vue.set(this.cards, randomIndex, temp);
      }
      this.isDeckShuffled = true;
      this.shuffleCount++;
    }
  }
};
</script>

<style lang="scss" scoped>
.suffle-cards {
  background: ghostwhite;
  height: 100%;
}
.title {
  font-family: Roboto Slab, sans-serif;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
  font-weight: 300;
  font-size: 3rem;
}

.vue-logo {
  height: 55px;
  position: relative;
  top: 10px;
}

.speed-buttons {
  text-align: center;
  padding-top: 30px;
}
.speed-buttons .button {
  height: 2.5em;
}

.main-buttons {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
}

.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fas {
  padding-left: 5px;
}

.deck {
  margin-left: 30px;
  padding-top: 30px;
}
// Transitions
.shuffleSlow-move {
  transition: transform 2s;
}
.shuffleMedium-move {
  transition: transform 1s;
}
.shuffleFast-move {
  transition: transform 0.5s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

