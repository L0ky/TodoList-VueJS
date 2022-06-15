<template>
  <div class="w-full flex justify-between gap-2 py-4 mt-6">
    <input
      v-model="taskLabel"
      placeholder="Ajouter une tâche"
      type="text"
      @keyup.enter="addTask()"
      class="input-add"
    />
    <button type="button" v-on:click="addTask()" class="btn-add">
      Ajouter
    </button>
  </div>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore.Js";
// import { TaskApi } from "../business/TaskApi";
export default {
  setup() {
    return { todoList: useTodoListStore() };
  },
  data() {
    return { taskLabel: "" };
  },
  mounted() {
    this.todoList.load();
  },
  methods: {
    addTask() {
      this.todoList.createNewTask(this.taskLabel);
      this.taskLabel = "";
    },
  },
};
</script>
