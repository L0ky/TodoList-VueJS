<template>
  <div class="mb-16">
    <div class="flex justify-start gap-2">
      <input
        v-model="todoList.filterText"
        type="text"
        placeholder="Filtrer les tâches"
        class="input-add"
      />
    </div>
    <!-- <div class="text-left mt-5">
      <label for="checkbox">
        <input type="checkbox" v-model="todoList.showDone" />
        Tâches Complétées |
        <span class="text-red-500 font-bold">{{ todoList.showDone }}</span>
      </label>
      <button
        v-on:click="testDone()"
        class="ml-5 bg-blue-500 text-white px-4 py-1 rounded"
      >
        test
      </button>
    </div> -->

    <!-- Resultat(s) trouvé(s): todoList.length -->
    <p class="text-left mt-5">
      Résultat:
      <span class="text-blue-500 font-bold">{{
        todoList.filteredTodoList.length
      }}</span>
      tâches trouvées
    </p>
  </div>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore.Js";

export default {
  setup() {
    return { todoList: useTodoListStore() };
  },
};
</script>

<style></style>
