<template>
  <div id="app">
    <!-- header section -->
    <Header/>

    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import "node_modules/bootstrap/scss/bootstrap";
  @import "./assets/sass/main.scss";

</style>
