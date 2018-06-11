<template>
  <div class="counter-component">
    <div class="actions" v-on:click="changeCount('incrementAsync')">Aumentar</div>
    <div class="actions" v-on:click="changeCount('decrementCount')">Disminuir</div>
    <button class="actions" v-on:click="$emit('output-count', 'incrementAsync')">Output example</button>
    <div class="counter">{{ count }}</div>
  </div>
</template>

<script>
export default {
  props: ["count"],
  methods: {
    changeCount(typeAction) {
      this.$emit("output-count", typeAction);
    }
  }
};
</script>

<style lang="scss">
.counter-component {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .counter {
    cursor: pointer;
    margin: 100px auto;
    border-radius: 3px;
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 5rem;
    background-color: #f0f0f0;
    user-select: none;
  }
  .actions {
    margin: 15px;
    border: 1px solid gray;
    width: 100px;
    cursor: pointer;
  }
}
</style>
