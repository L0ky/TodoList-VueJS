import Task from "./Task";

export default class TaskList {
  constructor() {
    this.list = [];
  }

  // Ajoute une tâche dans le tableau
  add(task) {
    this.list.push(task);
  }

  // Créer une tache dans la liste
  create(label, done, id) {
    const task = new Task(label, id, done);
    this.add(task);
  }

  // Récupère l'index d'une la tâche
  getIndex(task) {
    this.list.find((taskItem) => taskItem === task);
  }

  // Récupère l'index d'une la tâche avec l'ID
  getIndexById(taskId) {
    return this.list.find((taskItem) => taskItem.id === taskId);
  }

  // Supprime une tâche dans la liste
  delete(taskId) {
    const taskIndexId = this.getIndexById(taskId);
    if (taskIndexId == undefined) return;

    this.list.splice(taskIndexId, 1);
  }
}
