import { createSlice } from "@reduxjs/toolkit";
import { TOGGLE_MODE } from "@/constants";
import tasksReducers from "@/state/tasks/reducer.tasks";

export const tasksInitialState = {
  tasks: [],
  toggleMode: TOGGLE_MODE.done,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: tasksReducers,
});

export const {
  addTask,
  deleteCompletedTasks,
  deleteTask,
  toggleAllTasks,
  toggleTask,
  updateTaskText,
} = tasksSlice.actions;

export default tasksSlice.reducer;
