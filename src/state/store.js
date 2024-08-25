import { combineReducers, legacy_createStore as createStore } from "redux";
import tasksReducer from "./tasks/reducer.tasks";
import filterReducer from "./filters/reducer.filters";
import { middleware } from "./middlewares";
import { getStateFromLS } from "@/utils";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
});

const preloadedState = getStateFromLS();

const store = createStore(rootReducer, preloadedState, middleware);

export default store;
