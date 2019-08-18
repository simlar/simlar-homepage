<template>
  <button class="" :id="button.id" :title="button.title"></button>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { IButton } from "@/interfaces/button";
import Image from "@/components/core/Image.vue";

@Component({
  components: {
    SimlarImage: Image
  }
})
export default class Button extends Vue {
  @Prop() private button!: IButton;
}
</script>

<style lang="scss" scoped></style>
