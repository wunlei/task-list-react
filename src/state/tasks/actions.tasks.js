export const tasksActions = {
  ADD_TASK: "tasks/addTask",
  TOGGLE_TASK: "tasks/toggleTask",
  UPDATE_TASK_TEXT: "tasks/updateTaskText",
  DELETE_TASK: "tasks/deleteTask",
  CLEAR_COMPLETED: "tasks/clearCompletedTasks",
  TOGGLE_ALL: "tasks/toggleAllTasks",
};

export const addTask = (text) => ({
  type: tasksActions.ADD_TASK,
  payload: text,
});

export const toggleTask = (id) => ({
  type: tasksActions.TOGGLE_TASK,
  payload: id,
});

export const deleteTask = (id) => ({
  type: tasksActions.DELETE_TASK,
  payload: id,
});

export const deleteCompletedTasks = () => ({
  type: tasksActions.CLEAR_COMPLETED,
});

export const toggleAllTasks = () => ({
  type: tasksActions.TOGGLE_ALL,
});

export const updateTaskText = ({ id, text }) => ({
  type: tasksActions.UPDATE_TASK_TEXT,
  payload: { id, text },
});
