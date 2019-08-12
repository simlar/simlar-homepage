<template>
  <div>
    <div class="hero-stage">
      <div class="hero-stage-content">
        <h3>{{ heroStage.headline }}</h3>
        <simlar-list :list="heroStage.list"></simlar-list>
      </div>
      <div class="hero-stage-simlar-screenshot">
        <simlar-image :img="heroStage.img"></simlar-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SimlarImage from "@/components/core/SimlarImage.vue";
import SimlarList from "@/components/core/SimlarList.vue";
import { SimlarListItem } from "@/interfaces/stage-list";
import { IImage } from "@/interfaces/image";
@Component({
  components: {
    SimlarImage,
    SimlarList
  }
})
export default class SimlarHeroStage extends Vue {
  @Prop() private heroStage!: {
    headline: string;
    list: SimlarListItem[];
    img: IImage;
  };
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

  &-content {
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

  &-simlar-screenshot {
    flex-grow: 1;
  }
}
</style>
