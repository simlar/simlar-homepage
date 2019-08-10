<template>
  <div>
    <ul v-for="li in list">
      <li>
        <img src="getIconUrl(li.icon)" alt="li.icon_alt" />
        <span>{{ li.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SimlarListItem } from "@/interfaces/stage-list";

@Component
export default class SimlarList extends Vue {
  @Prop() private list!: SimlarListItem[];

  public getIconUrl(item: SimlarListItem) {
    const icon = require.context("../../assets/icons", false, /\.svg$/);
    return icon("./" + item.icon);
  }
}
</script>

<style lang="scss" scoped></style>
