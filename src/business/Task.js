export default class Task {
  constructor(label, id = null, done = false) {
    this.label = label;
    this.done = done;
    this.id = id == null ? Date.now() : id;
  }

  markAsDone() {
    this.done = true;
  }

  rename(newLabel) {
    this.label = newLabel;
  }
  matchFilter(filter) {
    if (filter == "") return true;
    const arrayMultipleFilter = filter.split(/\s+/);

    for (let i = 0; i < arrayMultipleFilter.length; i++) {
      const term = arrayMultipleFilter[i];
      const regex = new RegExp(term, "i");

      const space = term.trim();
      if (space === "") continue;

      if (this.label.match(regex)) return true;
    }
    return false;
  }

  taskDoneFilter(doneFilter) {
    //
    if (doneFilter === true) {
      return true;
    } else {
      return false;
    }
  }
}
