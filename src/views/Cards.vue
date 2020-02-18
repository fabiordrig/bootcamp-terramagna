<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-show="tasks.length === 0" xs12>
        <v-card>
          <v-card-title>Crie o seu primeiro card de tarefas!!!</v-card-title>
        </v-card>
      </v-flex>
      <v-flex v-for="(card,index) in tasks" :key="index" xs6>
        <v-card>
          <v-card-title primary-title>{{ card.title }}</v-card-title>
          <v-card-text v-for="item in card.items" :key="item.id">
            <v-checkbox
              v-if="item.type == 'checkbox'"
              v-model="item.result"
              @change="finishTask(item)"
              :label="item.text"
            ></v-checkbox>
            <v-text-field
              v-else
              v-model="item.result"
              @change="finishTask(item)"
              :label="item.text"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="editingTask(card)">
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
    <CreateCard :active="active" :task="task" />
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import CreateCard from "@/components/CreateCard.vue";

export default Vue.extend({
  components: {
    CreateCard
  },
  data: () => ({
    active: false,
    task: null
  }),
  created() {
    this.$store.commit("refreshData");
  },
  computed: {
    muted() {
      return this.$store.state.closeModal;
    },
    tasks() {
      return this.$store.state.lists;
    }
  },
  methods: {
    excludeCard(id) {
      this.$store.dispatch("excludeCard", id);
    },
    refreshData() {
      this.active = false;
    },
    editingTask(card) {
      this.task = card;
      this.active = true;
      this.$emit("setValue");
    },
    activatedCard() {
      this.active = true;
      this.task = null;
    },
    finishTask(item) {
      let list = this.$store.getters.getTasks;
      list.forEach(child => {
        child.items.forEach(subChild => {
          if (subChild.id === item.id) {
            subChild.result = item.result;
          }
        });
      });
      this.$store.dispatch("savingNewdata", list);
    }
  },
  watch: {
    muted() {
      this.refreshData();
    }
  }
});
</script>
