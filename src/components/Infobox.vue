<template>
  <div class="info-box">
    <h2 v-if="infoBox.headline">{{ infoBox.headline }}</h2>
    <p>{{ infoBox.text }}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Infobox extends Vue {
    @Prop() private infoBox!: { id: number; headline: string; text: string };
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/breakpoints";

  .info-box {
    display: flex;
    flex-flow: column;
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    padding: 16px 320px;
    justify-content: space-evenly;

    @include mobile {
      height: 300px;
      padding: 8px 60px;
    }

    @include tablet {
      padding: 10px 200px;
    }

    @include desktop {
      padding: 12px 320px;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: bold;

      @include mobile {
        font-size: 1.5rem;
      }

      @include tablet {
        font-size: 1.5rem;
      }

    }

    p {
      font-size: 1.125rem;
      font-weight: 500;

      @include mobile {
        font-size: 1rem;
      }

      @include tablet {
        font-size: 1rem;
      }
    }

    &:nth-child(even) {
      color: white;
      background-color: #2c3e50;
    }

    &:nth-child(odd) {
      color: white;
      background-color: #42b983;
    }
  }
</style>
