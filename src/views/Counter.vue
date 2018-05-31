<template>
  <div class="page">
    <counter></counter>
    <div class="routing">
      <div @click="goBack()">Go to Home</div>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter";

export default {
  components: {
    Counter
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    username() {
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>
