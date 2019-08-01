<template>
  <footer class="footer">
    <div class="footer--column">
      <h3>Simlar empfehlen</h3>
      <a href="/#">Auf Facebook empfehlen</a>
      <a href="/#">Auf Twitter empfehlen</a>
      <a href="/#">Auf Google+ :D empfehlen</a>
    </div>
    <div class="footer--column">
      <h3>Service &amp; Entwicklung</h3>
      <router-link to="/about">Über uns</router-link>
      <router-link to="/nutzungsbedingungen">Nutzungsbedingungen</router-link>
      <router-link to="/datenschutzerklaerung"
        >Datenschutzerklärung</router-link
      >
      <router-link to="/impressum">Impressum</router-link>
    </div>
    <div class="footer--column">
      <h3>Simlar herunterladen</h3>
      <a href="https://play.google.com/store/apps/details?id=org.simlar"
        >Android</a
      >
      <a href="https://itunes.apple.com/app/id953945396">iOS</a>
      <a href="https://github.com/simlar/">Github</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Footer as IFooter } from "@/interfaces/footer";

@Component
export default class SimlarFooter extends Vue {
  @Prop() private footer!: IFooter;
}
</script>

<style lang="scss" scoped>
.footer {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  height: auto;
  background: #2f2f2f;
  color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  &--column {
    display: flex;
    box-sizing: border-box;
    padding-right: 8px;
    padding-left: 8px;
    flex-flow: column wrap;
    justify-items: center;

    h3 {
      font-weight: bolder;
      margin-bottom: 8px;
      font-size: 1.25rem;
    }

    a {
      font-size: 14px;
      color: aliceblue;
      padding-top: 8px;
      padding-bottom: 8px;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
