<template>
    <article class="clock">
        <div class="hours-container">
            <div class="hours"></div>
        </div>
        <div class="minutes-container">
            <div class="minutes"></div>
        </div>
        <div class="seconds-container">
            <div class="seconds"></div>
        </div>
    </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
.clock {
  border-radius: 50%;
  background: #fff url(/assets/ios_clock.svg) no-repeat center;
  background-size: 88%;
  height: 20em;
  padding-bottom: 31%;
  position: relative;
  width: 20em;
}

.clock.simple:after {
  background: #000;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
  z-index: 10;
}
.minutes-container,
.hours-container,
.seconds-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>