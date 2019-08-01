<template>
  <button class="" :id="button.id" :title="button.title"></button>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Button as IButton } from "@/interfaces/button";
@Component
export default class SimlarButton extends Vue {
  @Prop() private button!: IButton;
}
</script>

<style lang="scss" scoped></style>
