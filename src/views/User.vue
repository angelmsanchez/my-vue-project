<template>
  <div id="user">
    <div>User {{ $route.params.id }}</div>
    <div>
      <router-link to="/user/4">Go to New User View</router-link>
    </div>
    <div>
      <router-link to="/home">Go to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log("watch", to, from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log("to: ", to);
    console.log("from: ", from);
    next();
  }
};
</script>
