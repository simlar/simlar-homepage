<template>
  <div>
    <ul v-for="listItem in list">
      <li>
        <simlar-image :img="listItem"></simlar-image>
        <span>{{ listItem.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SimlarListItem } from "@/interfaces/stage-list";
import SimlarImage from "@/components/core/SimlarImage.vue";

@Component({
  components: {
    SimlarImage
  }
})
export default class SimlarList extends Vue {
  @Prop() private list!: SimlarListItem[];
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 16px;

  > img {
    margin-right: 8px;
  }
}

img {
  width: 25px;
  height: auto;
}
</style>
