<template>
  <img class="picture" :src="getAsset(img.name)" :alt="img.alt" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IImage } from "@/interfaces/image";

@Component
export default class Image extends Vue {
  @Prop() private img!: IImage;

  public getAsset(name: string) {
    const getImageUrl = (name: string) =>
      require.context("@/assets/images/", false, /\.png$/)(`./${name}`);
    const getIconUrl = (name: string) =>
      require.context("@/assets/icons/", false, /\.svg$/)(`./${name}`);

    return name.endsWith(".svg") ? getIconUrl(name) : getImageUrl(name);
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
