<template>
  <v-row justify="center">
    <v-dialog v-model="active" persistent max-width="600">
      <v-card>
        <v-card-title class="headline">Crie sua nova lista de tarefas:</v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-radio-group v-model="radioGroup" row>
                  <v-radio v-for="n in optionList" :key="n" :label="`${n.text}`" :value="n.type"></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex grow pa-1>
                <v-text-field v-model="text" label="Insira a frase da sua tarefa"></v-text-field>
              </v-flex>
              <v-flex shrink pa-1>
                <v-btn @click="addingNewTask" icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-text>
          <v-container>
            <v-layout v-for="(task, index) in tasks" :key="task.id" row>
              <v-flex grow pa-1>
                <v-checkbox
                  v-if="task.type === 'checkbox'"
                  :label="task.text"
                  disabled
                  hide-details
                ></v-checkbox>
                <v-text-field v-else v-model="task.text" disabled></v-text-field>
              </v-flex>
              <v-flex shrink pa-1>
                <v-btn @click="excludeTask(index)" icon>
                  <v-icon>close</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
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
  data() {
    return {
      radioGroup: null,
      text: null,
      tasks: [],
      optionList: [
        {
          text: "Campo de texto",
          type: "input"
        },
        {
          text: "Checkbox",
          type: "checkbox"
        }
      ]
    };
  },
  methods: {
    addingNewTask() {
      let obj = {
        id: new Date().getTime(),
        text: this.text,
        type: this.radioGroup
      };

      this.tasks.push(obj);
      this.text = null;
      this.radioGroup = null;
    },
    excludeTask(index) {
      console.log(index);
      this.tasks = this.tasks.splice(index, 1);
    }
  }
};
</script>
