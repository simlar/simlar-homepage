<template>
  <div>
    <div id="nav">
      <a href="#">Simlar</a>
      <simlar-image class="header-logo" :img="header.logo"></simlar-image>
      <div class="router-links">
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
import { IHeader } from "@/interfaces/header";
import Image from "@/components/core/Image.vue";

@Component({
  components: {
    SimlarImage: Image
  }
})
export default class Header extends Vue {
  @Prop() private header!: IHeader;
}
</script>

<style scoped lang="scss">
#nav {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  position: relative;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header-logo {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
  right: calc(50% - 50px);
}

.vertical-divider {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  position: absolute;
  top: 85px;

  hr {
    display: inline-flex;
    width: 100%;
  }

  span {
    width: 250px;
  }
}
</style>
