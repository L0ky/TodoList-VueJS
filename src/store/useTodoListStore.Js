import { defineStore } from "pinia";
import TaskApi from "../business/TaskApi";
import Task from "../business/Task";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    filterText: "",
    showDone: false,
  }),
  getters: {
    filteredTodoList() {
      return this.todoList.filter((item) => item.matchFilter(this.filterText));
    },
    filteredTodoListByDone() {
      //
      return this.todoList.filter((item) => item.taskDoneFilter(this.showDone));
    },
  },
  actions: {
    createNewTask(label) {
      const task = new Task(label);
      this.todoList.push(task);
      this.save();
    },
    deleteTask(taskId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== taskId;
      });
      this.save();
    },
    save() {
      TaskApi.save(this.todoList);
    },
    load() {
      this.todoList = TaskApi.load();
    },
  },
});
