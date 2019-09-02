<template>
  <div>
    <div class="hero-stage">
      <div class="hero-stage--content">
        <h3>{{ heroStage.headline }}</h3>
        <div v-if="heroStage.downloads" class="hero-stage--download-app">
          <cta v-for="download in heroStage.downloads" :cta="download"></cta>
        </div>
      </div>
      <div class="hero-stage--simlar-screenshot">
        <simlar-image :img="heroStage.img"></simlar-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Image from "@/components/core/Image.vue";
import Cta from "@/components/core/Cta.vue";
import { IHeroStage } from "@/interfaces/hero-stage";

@Component({
  components: {
    Cta,
    SimlarImage: Image
  }
})
export default class SimlarHeroStage extends Vue {
  @Prop() private heroStage!: IHeroStage;
}
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints";

.hero-stage {
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  padding: 50px 0;
  margin-bottom: 150px;
  justify-content: space-around;

  @include touch {
    flex-flow: column-reverse;
    margin-bottom: unset;
  }

  &--content {
    flex-grow: 2;
    h3 {
      font-weight: bolder;
      font-size: 3.5rem;
      line-height: 4.5rem;
      padding: 25px 0;

      @include mobile {
        font-size: 2rem;
        line-height: 2.5rem;
        padding: 16px;
      }
    }

    li {
      list-style-type: none;
      padding: 8px 0;
      font-size: 2rem;
      font-weight: 500;
    }
  }

  &--download-app {
    display: flex;
    flex-flow: column nowrap;
    padding: 20px 64px 64px 64px;
    box-sizing: border-box;
  }

  &--simlar-screenshot {
    flex-grow: 1;
  }
}
</style>
