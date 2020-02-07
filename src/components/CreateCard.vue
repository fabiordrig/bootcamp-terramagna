<template>
  <v-row justify="center">
    <v-dialog v-model="active" max-width="600">
      <v-card>
        <v-card-title class="headline">Crie sua nova lista de tarefas:</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">cancelar</v-btn>
          <v-btn color="success" text @click="dialog = false">Criar Nova Lista</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    active: Boolean
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
