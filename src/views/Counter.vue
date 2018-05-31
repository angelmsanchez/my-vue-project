<template>
  <div class="page">
    <counter></counter>
    <div class="routing">
      <router-link to="/home">Go to Home</router-link>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter";

export default {
  components: {
    Counter
  }
};
</script>
