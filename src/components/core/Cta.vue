<template>
  <a class="" :id="cta.id" :title="cta.title" :href="cta.link" target="_blank">
    <simlar-image
      v-if="cta.img"
      :img="{ name: cta.img.name, alt: cta.img.alt }"
    ></simlar-image>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Image from "./Image.vue";
import { ICta } from "@/interfaces/cta";

@Component({
  components: {
    SimlarImage: Image
  }
})
export default class Cta extends Vue {
  @Prop() private cta!: ICta;
}
</script>

<style scoped lang="scss">
a {
  cursor: pointer;
}
</style>
