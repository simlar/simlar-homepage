<template>
  <div id="app">
    <SimlarHeader :header="header"></SimlarHeader>
    <router-view />
    <SimlarFooter></SimlarFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SimlarHeader from "@/components/SimlarHeader.vue";
import SimlarFooter from "@/components/SimlarFooter.vue";

@Component({
  components: {
    SimlarHeader,
    SimlarFooter
  },
  data() {
    return {
      header: {
        logo: {
          name: "app-logo.svg",
          alt: "Simlar Logo"
        }
      }
    };
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/css/main.scss";

h1,
h2,
h3,
h4,
p,
span,
a {
  font-family: "Poppins", sans-serif;
}

ul,
ol > li {
  font-family: "Poppins", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
