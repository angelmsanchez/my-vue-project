<template>
    <transition name="slide">
      <div class="page">
        <counter 
          v-bind:count="$store.state.count"
          v-on:output-count="outputCount($event)">
        </counter>
        <div class="routing">
          <div @click="goBack()">Go to Home</div>
        </div>
      </div>
    </transition>
</template>

<script>
import Counter from "../components/Counter";

export default {
  components: {
    Counter
  },
  computed: {
    username() {
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    outputCount($event) {
      this.$store.dispatch($event);
    }
  }
};
</script>
