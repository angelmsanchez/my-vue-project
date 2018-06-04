<template>
  <div id="user">
    <div>User {{ $route.params.id }}</div>
    <div>
      <router-link to="/user/4">Go to New User View</router-link>
    </div>
    <div>
      <router-link to="/home">Go to Home</router-link>
    </div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  created () {
    this.fetchData()
  },
  watch: {
    $route(to, from) {
      console.log("watch", to, from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log("to: ", to);
    console.log("from: ", from);
    next();
  },
  methods:{
    fetchData () {
      this.show = false;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

