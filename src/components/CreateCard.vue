<template>
  <v-dialog v-model="active" persistent max-width="600">
    <v-card>
      <v-card-title class="headline">Crie sua nova lista de tarefas:</v-card-title>
      <v-card-text>
        <v-container>
          <v-layout row>
            <v-flex grow pa-1>
              <v-text-field v-model="title" label="Insira o titulo da tarefa"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout v-if="title" row wrap>
            <v-flex xs12>
              <v-radio-group v-model="radioGroup" row>
                <v-radio
                  v-for="(n,index) in optionList"
                  :key="index"
                  :label="`${n.text}`"
                  :value="n.type"
                ></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
          <v-layout v-if="title" row>
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
          <v-layout v-for="(task, index) in tasks" :key="index" row>
            <v-flex grow pa-1>
              <v-checkbox v-if="task.type === 'checkbox'" :label="task.text" disabled hide-details></v-checkbox>
              <v-text-field v-else v-model="task.text" disabled></v-text-field>
            </v-flex>
            <v-flex shrink pa-1>
              <v-btn @click="excludeTask(task.id)" icon>
                <v-icon>close</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-snackbar v-model="snackbar" right color="error" :timeout="3000">
        Preencha todos os dados para criar sua lista de tarefas
        <v-btn dark flat @click="snackbar = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-snackbar>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="closeModal">cancelar</v-btn>
        <v-btn color="success" text @click="saveAllTasks">salvar nova lista</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    active: Boolean,
    task: Object
  },
  created() {
    this.$on("setValue", this.setValue());
  },
  data() {
    return {
      radioGroup: "input",
      snackbar: false,
      title: null,
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
      if (!this.text) {
        this.snackbar = true;
        return false;
      }

      let obj = {
        id: this.newId(),
        text: this.text,
        type: this.radioGroup,
        state: "NOT_DONE",
        result: null,
        doneAt: null
      };
      this.tasks.push(obj);
      this.text = null;
    },
    setValue() {
      if (!this.task) return;
      this.title = this.task.title;
      this.text = null;
      this.tasks = this.task.items;
    },
    excludeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    closeModal() {
      this.$parent.$emit("refreshData");
      this.title = null;
      this.text = null;
      this.tasks = [];
    },
    saveAllTasks() {
      if (!this.title || !this.radioGroup) {
        this.snackbar = true;
        return false;
      }

      let items = JSON.parse(localStorage.getItem("lists", items));

      let newTask = {
        id: this.newId(),
        title: this.title,
        createAt: new Date(),
        updatedAt: new Date(),
        items: this.tasks
      };

      if (!items) items = [];
      items.push(newTask);

      localStorage.setItem("lists", JSON.stringify(items));
      this.title = null;
      this.text = null;
      this.tasks = [];
      this.active = false;
      this.$parent.$emit("refreshData");
    },
    newId() {
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
  },
  watch: {
    task() {
      this.setValue();
    }
  }
};
</script>
