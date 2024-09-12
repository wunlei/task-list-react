import { createSelector } from "@reduxjs/toolkit";
import { selectCurrFilter } from "@/state/filters/selectors.filters";
import { FILTERS } from "@/constants";

const selectSlice = (state) => state.tasks;

export const selectTasks = createSelector(
  [selectSlice, selectCurrFilter],
  (slice, filter) => {
    if (filter === FILTERS.COMPLETED) {
      return slice.tasks.filter((task) => task.isDone);
    }

    if (filter === FILTERS.ACTIVE) {
      return slice.tasks.filter((task) => !task.isDone);
    }

    return slice.tasks;
  },
);

export const selectTasksIds = createSelector([selectTasks], (list) => {
  return list.map((task) => task.id);
});

export const selectTaskById = createSelector(
  [selectTasks, (state, id) => id],
  (tasks, id) => {
    return tasks.find((task) => task.id === id);
  },
);

export const selectUndoneTasksCount = createSelector([selectTasks], (tasks) => {
  return tasks.filter((task) => !task.isDone).length;
});

export const selectHasCompletedTasks = (state) => {
  return selectSlice(state).tasks.some((task) => task.isDone);
};

export const selectTotalTasksCount = (state) => {
  return selectSlice(state).tasks.length;
};
