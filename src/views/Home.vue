<template>
  <transition name="fade">
    <div id="home">
      <img src="./../assets/logo.png">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
      <div class="routing">
        <router-link to="/counter">Go to Counter View</router-link>
        <div @click="goToUser()">Go to User View</div>
        <router-link to="/test">Go to Test View</router-link>
      </div>
      <div id="dynamic-component-demo" class="demo">
        <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['tab-button', { active: currentTab === tab }]"
          v-on:click="currentTab = tab"
        >{{ tab }}</button>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";

Vue.component("tab-counter", {
  template: "<div>Counter component</div>"
});
Vue.component("tab-user", {
  template: "<div>User component</div>"
});
Vue.component("tab-test", {
  template: "<div>Test component</div>"
});

export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentTab: "Counter",
      tabs: ["Counter", "User", "Test"]
    };
  },
  methods: {
    goToUser() {
      const id = 123;
      this.$router.push({ name: "user", params: { id } });
    }
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  }
};
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
