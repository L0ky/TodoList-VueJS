<template>
  <ul class="text-left mt-5">
    <li v-for="task in todoList.filteredTodoList" :key="task.id">
      <div class="mb-10">
        <div class="flex justify-between">
          <div class="flex">
            <div :class="{ removed: task.done }">
              <input v-model="task.done" type="checkbox" class="mr-4" />
              <label for="checkbox">
                <input class="bg-white" type="text" v-model="task.label" />
              </label>
            </div>
          </div>
          <div>
            <span @click="deleteTask(task.id)" class="btn-delete">
              <i class="fa-solid fa-trash-can"></i>
            </span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore.Js";
export default {
  setup() {
    return { todoList: useTodoListStore() };
  },
  methods: {
    deleteTask(taskId) {
      this.todoList.deleteTask(taskId);
    },
    // testDone {

    // }
  },
};
</script>

<style></style>
