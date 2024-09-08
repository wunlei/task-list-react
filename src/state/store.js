import { configureStore } from "@reduxjs/toolkit";
import { getStateFromLS } from "@/utils";
import tasksSlice from "@/state/tasks/slice.tasks";
import filtersSlice from "@/state/filters/slice.filters";
import { middleware } from "@/state/middlewares";

const preloadedState = getStateFromLS();

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    filters: filtersSlice,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
