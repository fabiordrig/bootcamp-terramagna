<template>
  <nav class="nav">
    <v-toolbar color="primary" flat app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span>TERRA MAGNA - BOOTCAMP FRONT END</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="logout"></slot>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" color="success" class="js-drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn icon flat :color="iconColor" @click.stop="handleCloseDrawer">
              <v-icon>{{ mini ? "menu" : "close" }}</v-icon>
            </v-btn>
          </v-list-tile-action>
          <router-link to="/">
            <v-list-tile-content v-if="!mini"></v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile>
          <v-btn flat @click="activatedCard">Criar nova tarefa</v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <CreateCards :active="createTask" />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import CreateCards from "./CreateCard.vue";
export default Vue.extend({
  name: "the-navbar",
  components: {
    CreateCards
  },
  computed: {
    muted() {
      return this.$store.state.refreshData;
    }
  },
  data() {
    return {
      drawer: false,
      mini: false,
      createTask: false,
      iconColor: "#000"
    };
  },
  methods: {
    handleCloseDrawer() {
      this.drawer = false;
    },
    refreshData() {
      this.createTask = false;
    },
    activatedCard() {
      this.createTask = true;
    },
    outsideClickClose(e) {
      const toggleClick = document
        .querySelector(".js-drawer-toggle")
        .contains(e.target);
      const drawerClick = document
        .querySelector(".js-drawer")
        .contains(e.target);

      if (!toggleClick && !drawerClick) {
        this.handleCloseDrawer();
      }
    }
  },
  watch: {
    drawer(newValue, oldValue) {
      if (newValue) {
        window.addEventListener("click", this.outsideClickClose);
      } else {
        window.removeEventListener("click", this.outsideClickClose);
      }
    },
    muted() {
      this.refreshData();
    }
  }
});
</script>
<style lang="scss" scoped>
.nav {
  height: 64px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.nav__toolbar {
  max-height: 64px;
  background-color: white;
}
</style>
