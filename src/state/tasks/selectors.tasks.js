import { createSelector } from "reselect";

const selectSlice = (state) => state.tasks;

export const selectTasks = (state) => {
  return selectSlice(state).tasks;
};

export const selectTasksIds = createSelector([selectTasks], (list) => {
  return list.map((el) => el.id);
});

export const selectTaskById = createSelector(
  [selectTasks, (state, id) => id],
  (tasks, id) => {
    return tasks.find((el) => el.id === id);
  },
);

export const selectUndoneTasksCount = createSelector([selectTasks], (tasks) => {
  return tasks.filter((el) => !el.isDone).length;
});

export const selectHasCompletedTasks = (state) => {
  return selectSlice(state).tasks.some((task) => task.isDone);
};

export const selectTotalTasksCount = (state) => {
  return selectSlice(state).tasks.length;
};
