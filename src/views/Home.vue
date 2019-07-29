<template>
  <div class="home">
    <simlar-hero-stage v-bind:heroStage="heroStage"></simlar-hero-stage>
    <simlar-info-box
            class="simlar-info-box"
            v-for="info in infos"
            :key="info.id"
            v-bind:infoBox="info"
    ></simlar-info-box>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroStage from "@/components/HeroStage.vue";
import Infobox from "@/components/Infobox.vue";

@Component({
  components: {
    "simlar-hero-stage": HeroStage,
    "simlar-info-box": Infobox
  },
  data() {
    return {
      heroStage: {
        headline: "Einfach, verschlüsselt und kostenlos telefonieren",
        img: {
          name: "ringing.png",
          alt: "Simlar Ringing Screenshot"
        },
        list: ["Android", "iPhone", "Source Code"]
      },
      infos: [
        {
          id: 1,
          headline: "Höchste Sicherheit",
          text:
            "Simlar benutzt das bewährte Verschlüsselungsprotokoll ZRTP. Deine Gesrpäche können nicht abgehört werden - auch nicht von uns."
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
            "Wir sind ein kleines Team aus Köln, dass sich zum Ziel gesetzt hat, einfach und sicher und mehr text und so weiter und Infos evt. Fotos von uns."
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
