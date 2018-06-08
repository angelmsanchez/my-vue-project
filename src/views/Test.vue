<template>
  <div class="test">
    <div class="background-panels">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <mobile></mobile>
  </div>
</template>

<script>
import Mobile from "../components/Mobile";

export default {
  components: {
    Mobile
  }
};
</script>

<style lang="scss">
.test {
  background-image: linear-gradient(45deg, #6e6f74, #202022);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .background-panels {
    position: absolute;
    left: 20%;
    display: flex;
    width: 1800px;
    border: 2px solid #0f0f0f;
    flex-wrap: wrap;
    transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg);
  }
  div {
    height: 500px;
    width: 580px;
    border: 2px solid #0f0f0f;
    box-shadow: inset 3px 0 0px -1px #4b4c4f, inset 0 -3px 1px -1px #424346,
      inset 0 -4px 0 -1px #353639, inset 5px 0 1px -1px rgba(#b6b6be, 0.6),
      inset 0 -5px 1px -1px rgba(#b6b6be, 0.2);
  }
}
</style>