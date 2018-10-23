<template>
  <div id='app-root'>
    <v-app>
      <Menu></Menu>
      <v-container fluid>
        <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");
* {
  box-sizing: border-box;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    margin: 0;
    font-size: 26px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 16px;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
  }
  button,
  select {
    text-transform: none;
  }
  button {
    overflow: visible;
    padding: 0;
    outline: 0;
  }
  input {
    margin: 0;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font: inherit;
    color: inherit;
  }
  a {
    color: #42b983;
    text-decoration: none;
    background-color: transparent;
    outline: 0;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>