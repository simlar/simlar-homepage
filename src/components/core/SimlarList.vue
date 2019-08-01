<template>
  <div>
    <div v-for="item in list">
      <img :src="getIconUrl(item.icon)" :alt="item.icon_alt" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SimlarListItem } from "@/interfaces/stage-list";

@Component
export default class SimlarList extends Vue {
  @Prop() private list!: SimlarListItem[];

  getIconUrl(item: SimlarListItem) {
    const icon = require.context("../../assets/icons", false, /\.svg$/);
    icon("./" + item.icon);
  }
}
</script>

<style lang="scss" scoped></style>
