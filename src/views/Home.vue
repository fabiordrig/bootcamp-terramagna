<template>
  <div class="home">
    <AppNavbar />
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from "@/components/AppNavBar.vue";

export default {
  name: "home",
  components: {
    AppNavbar
  }
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f2f2f2;
  min-height: 100%;
}
</style>
