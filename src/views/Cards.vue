<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-show="lists.length === 0" xs12>
        <v-card>
          <v-card-title>Crie o seu primeiro card de tarefas!!!</v-card-title>
        </v-card>
      </v-flex>
      <v-flex v-for="(card,index) in lists" :key="index" xs6>
        <v-card>
          <v-card-title primary-title>{{ card.title }}</v-card-title>
          <v-card-text v-for="item in card.items" :key="item.id">
            <v-checkbox v-if="item.type == 'checkbox'" :label="item.text"></v-checkbox>
            <v-text-field v-else v-model="item.result" :label="item.text"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn icon @click="excludeCard(card.id)">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-fab-transition>
      <v-btn color="pink" dark fixed bottom right fab @click="activatedCard">
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <CreateCard :active="active" />
  </v-container>
</template>
<script>
import CreateCard from "@/components/CreateCard.vue";

export default {
  components: {
    CreateCard
  },
  created() {
    this.lists = JSON.parse(localStorage.getItem("lists"));
    this.$on("refreshData", this.refreshData);
  },
  methods: {
    excludeCard(id) {
      this.lists = this.lists.filter(task => task.id !== id);
      localStorage.setItem("lists", JSON.stringify(this.lists));
    },
    refreshData() {
      this.lists = JSON.parse(localStorage.getItem("lists"));
      this.active = false;
    },
    activatedCard() {
      this.active = true;
    }
  },
  data: () => ({
    active: false,
    lists: []
  })
};
</script>
<style lang="scss" scoped>
</style>
