<template>
  <div>
    <div id="nav">
      <a href="#">Simlar</a>
      <simlar-image class="header-logo" :img="header.logo"></simlar-image>
      <div class="router-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/">Support</router-link> |
        <router-link to="/">Developers</router-link> |
        <router-link to="/about">Impressum</router-link>
      </div>
    </div>
    <div class="vertical-divider">
      <hr />
      <span></span>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IHeader } from "@/interfaces/IHeader";
import SimlarImage from "@/components/core/SimlarImage.vue";

@Component({
  components: {
    SimlarImage
  }
})
export default class SimlarHeader extends Vue {
  @Prop() private header!: IHeader;
}
</script>

<style scoped lang="scss">
#nav {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header-logo {
  width: 75px;
  height: auto;
}

  .vertical-divider {
    display: flex;
    flex-flow: row nowrap;

    hr {
      display: inline-flex;
      width: 95vw;
    }

    span {
      width: 150px;
    }

  }
</style>
