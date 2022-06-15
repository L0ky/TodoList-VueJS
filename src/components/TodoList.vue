<template>
  <div class="mb-20">
    <div class="flex justify-center">
      <div class="w-11/12 md:w-1/2 lg:w-1/3 rounded-xl py-10 px-5 bg-white nice-boxshadow">
        <div class="flex items-end">
          <div>
            <img
              alt="Vue logo"
              src="https://pinia.vuejs.org/logo.svg"
              width="50"
            />
          </div>
          <div class="ml-5">
            <h1 class="text-left text-3xl">Liste de tâches</h1>
          </div>
        </div>
        <todo-input />
        <todo-filter />
        <todo-task />
      </div>
    </div>
  </div>
</template>

<script>
import TodoFilter from "./TodoFilter.vue";
import TodoInput from "./TodoInput.vue";
import TodoTask from "./TodoTask.vue";
export default {
  components: { TodoInput, TodoTask, TodoFilter },
  setup() {
    return {};
  },
};
</script>

<style></style>
