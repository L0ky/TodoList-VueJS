<template>
  <div class="mb-20">
    <div class="flex justify-center">
      <div class="w-[50%] rounded-xl p-10 nice-boxshadow">
        <div class="flex items-end">
          <div>
            <img
              alt="Vue logo"
              src="https://pinia.vuejs.org/logo.svg"
              width="50"
            />
          </div>
          <div class="ml-5">
            <h1 style="font-size: 40px" class="text-left">Liste de tâches</h1>
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
