import { newTaskId } from "@/utils";

function addTask(state, action) {
  state.tasks.unshift({
    id: newTaskId(state.tasks),
    text: action.payload,
    isDone: false,
  });
}

function updateTaskText(state, action) {
  const task = state.tasks.find((item) => item.id === action.payload.id);
  if (task) {
    task.text = action.payload.text;
  }
}

function toggleTask(state, action) {
  const task = state.tasks.find((item) => item.id === action.payload);
  if (task) {
    task.isDone = !task.isDone;
  }

  const isAllDone = state.tasks.every((item) => item.isDone);
  if (isAllDone) {
    state.toggleMode = "undone";
  } else {
    state.toggleMode = "done";
  }
}

function deleteTask(state, action) {
  state.tasks = state.tasks.filter((item) => item.id !== action.payload);
}

function deleteCompletedTasks(state) {
  state.tasks = state.tasks.filter((item) => !item.isDone);
}

function toggleAllTasks(state) {
  if (state.toggleMode === "done") {
    state.toggleMode = "undone";
    state.tasks.forEach((item) => (item.isDone = true));

    return;
  }
  if (state.toggleMode === "undone") {
    state.toggleMode = "done";
    state.tasks.forEach((item) => (item.isDone = false));
  }
}

const tasksReducers = {
  addTask,
  updateTaskText,
  toggleTask,
  deleteTask,
  deleteCompletedTasks,
  toggleAllTasks,
};

export default tasksReducers;
