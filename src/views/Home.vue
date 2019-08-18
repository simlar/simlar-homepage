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
        downloads: [
          {
            id: "fdroid-download",
            title: "Download at Fdroid",
            link: "https://www.simlar.org/fdroid/repo/",
            img: {
              name: "ic_fdroid_download.svg",
              alt: "FDroid download"
            }
          },
          {
            id: "play-store-download",
            title: "Download at playstore",
            link:
              "https://play.google.com/store/apps/details?id=org.simlar&hl=en_US",
            img: {
              name: "ic_play_store_download.svg",
              alt: "Play Store download"
            }
          },
          {
            id: "app-store-download",
            title: "Download at App Store",
            link:
              "https://apps.apple.com/de/app/simlar-sicher-telefonieren/id953945396",
            img: {
              name: "ic_app_store_download.svg",
              alt: "App Store download"
            }
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
