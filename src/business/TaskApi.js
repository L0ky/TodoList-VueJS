import Task from "../business/Task";

export default {
  save(data) {
    // Save data to local storage
    const jsonData = JSON.stringify(data);
    localStorage.setItem("tasks", jsonData);
  },
  load() {
    // Read data from local storage
    const jsonData = localStorage.getItem("tasks");
    const data = JSON.parse(jsonData);
    return data.map((task) => {
      return new Task(task.label, task.id, task.done);
    });
  },
};
