import { localStorageKey } from "@/constants";
import { filtersInitialState } from "@/state/filters/slice.filters";
import { tasksInitialState } from "@/state/tasks/slice.tasks";

export function newTaskId(tasks) {
  const maxId = tasks.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export function getStateFromLS() {
  const lsString = localStorage.getItem(localStorageKey);
  if (!lsString) {
    return;
  }

  try {
    const tasksArray = JSON.parse(lsString);
    const state = {
      tasks: {
        ...tasksInitialState,
        tasks: tasksArray,
      },
      filters: filtersInitialState,
    };
    return state;

  } catch (e) {
    console.error(e);
  }
}
