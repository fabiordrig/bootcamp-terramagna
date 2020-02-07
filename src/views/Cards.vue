<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="card in cards" :key="card.title" xs6>
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
            <v-btn icon>
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <CreateCard :active="true" />
  </v-container>
</template>
<script>
import CreateCard from "@/components/CreateCard.vue";

export default {
  components: {
    CreateCard
  },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        items: [
          { text: "FAzer x coisas", type: "checkbox" },
          { text: "HELLLOOO", type: "checkbox" },
          { text: "fazer alo", type: "input", result: null }
        ]
      },
      {
        title: "Pre-fab homes",
        items: [
          { text: "FAzer x coisas", type: "checkbox" },
          { text: "HELLLOOO", type: "checkbox" },
          { text: "fazer alo", type: "input", result: null }
        ]
      }
    ]
  })
};
</script>
