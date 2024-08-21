import { produce } from "immer";
import { newTaskId } from "@/utils";
import { TOGGLE_MODE } from "@/constants";
import { tasksActions } from "./actions.tasks";

export const tasksInitialState = {
  tasks: [],
  toggleMode: TOGGLE_MODE.done,
};

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

function clearCompletedTasks(state) {
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

function tasksReducer(state = tasksInitialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case tasksActions.ADD_TASK: {
        addTask(draft, action);
        break;
      }
      case tasksActions.UPDATE_TASK_TEXT: {
        updateTaskText(draft, action);
        break;
      }
      case tasksActions.TOGGLE_TASK: {
        toggleTask(draft, action);
        break;
      }
      case tasksActions.DELETE_TASK: {
        deleteTask(draft, action);
        break;
      }
      case tasksActions.CLEAR_COMPLETED: {
        clearCompletedTasks(draft);
        break;
      }
      case tasksActions.TOGGLE_ALL: {
        toggleAllTasks(draft);
        break;
      }
    }
  });
}

export default tasksReducer;
