<template>
  <img class="picture" :src="getImageUrl(img.name)" :alt="img.alt" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SimlarImage extends Vue {
  @Prop() private img!: { name: string; alt: string };

  getImageUrl(name: string) {
    const image = require.context("../../assets/images/", false, /\.png$/);
    return image("./" + name);
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/breakpoints";

.picture {
  height: auto;
  object-fit: contain;

  @include mobile-only {
    max-width: calc(85% - 16px);
  }

  @media screen and (min-width: 579px) and (max-width: 768px) {
    max-width: calc(65% - 32px);
  }

  @media screen and (min-width: 769px) and (max-width: 998px) {
    max-width: calc(70% - 48px);
  }

  @media screen and (min-width: 999px) {
    max-width: calc(75% - 64px);
  }
}
</style>
