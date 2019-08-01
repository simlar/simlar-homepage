<template>
  <div>
    <div class="hero-stage">
      <div class="hero-stage-content">
        <h3>{{ heroStage.headline }}</h3>
        <simlar-list :list="heroStage.list"></simlar-list>
      </div>
      <div class="hero-stage-simlar-screenshot">
        <simlar-image v-bind:img="heroStage.img"></simlar-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SimlarImage from "@/components/core/SimlarImage.vue";
import SimlarList from "@/components/core/SimlarList.vue";
import { SimlarListItem } from "@/interfaces/stage-list";
@Component({
  components: {
    SimlarImage,
    SimlarList
  }
})
export default class HeroStage extends Vue {
  @Prop() private heroStage!: {
    headline: string;
    list: SimlarListItem[];
    img: { name: string; alt: string };
  };
}
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints";

.hero-stage {
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  padding: 50px 0;
  margin-bottom: 150px;
  justify-content: space-around;

  &-content {
    flex-grow: 1;
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

    ul > li {
      list-style-type: none;
      font-size: 2rem;
      font-weight: 500;
      padding: 8px 0;
    }
  }

  &-simlar-screenshot {
    flex-shrink: 1;
  }
}
</style>
