<template>
  <div class="home">
    <simlar-hero-stage v-bind:heroStage="heroStage"></simlar-hero-stage>
    <simlar-infobox
      class="simlar-info-box"
      v-for="info in infos"
      :key="info.id"
      v-bind:infoBox="info"
    ></simlar-infobox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroStage from "@/components/HeroStage.vue";
import Infobox from "@/components/Infobox.vue";
import SimlarHeroStage from "@/components/HeroStage.vue";
import SimlarInfobox from "@/components/Infobox.vue";

@Component({
  components: {
    SimlarHeroStage,
    SimlarInfobox
  },
  data() {
    return {
      heroStage: {
        headline: "Einfach, verschlüsselt und kostenlos telefonieren",
        img: {
          name: "ios-screenshot.png",
          alt: "Simlar Ringing Screenshot"
        },
        list: [
          {
            name: "ic_android.svg",
            alt: "Android Source Code",
            title: "Android"
          },
          {
            name: "ic_apple.svg",
            alt: "iPhone Source Code",
            title: "iPhone"
          },
          {
            name: "ic_apple.svg",
            alt: "Source Code",
            title: "Source Code"
          }
        ]
      },
      infos: [
        {
          id: 1,
          headline: "Höchste Sicherheit",
          text:
            "Simlar benutzt das bewährte Verschlüsselungsprotokoll ZRTP. Deine Gesrpäche können nicht " +
            "abgehört werden - auch nicht von uns."
        },
        {
          id: 2,
          headline: "Frei & Vertrauenswürdig",
          text:
            "Simlar unterliegt der Open-Source-Lizenz GPL. Unsere Server stehen in Deutschland."
        },
        {
          id: 3,
          headline: "",
          text:
            "Wir sind ein kleines Team aus Köln, dass sich zum Ziel gesetzt hat, " +
            "einfach und sicher und mehr text und so weiter und Infos evt. Fotos von uns."
        }
      ]
    };
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../src/assets/css/breakpoints";
.home {
  display: flex;
  flex-flow: column;
  max-width: 1440px;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;

  .simlar-info-box {
    max-width: 1440px;
  }
}
</style>
