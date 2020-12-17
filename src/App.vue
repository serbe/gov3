<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  //   data() {
  //     return {
  //       connection: null,
  //     };
  //   },
  //   setup(props) {

  //     console.log(props);
  //     this.connection = new WebSocket("wss://echo.websocket.org");

  //     this.connection.onmessage = function (event) {
  //       console.log(event);
  //     };

  //     this.connection.onopen = function (event) {
  //       console.log(event);
  //       console.log("Successfully connected to the echo websocket server...");
  //     };
  //   },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
