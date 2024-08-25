import { combineReducers, legacy_createStore as createStore } from "redux";
import tasksReducer from "./tasks/reducer.tasks";
import filterReducer from "./filters/reducer.filters";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
});

const store = createStore(rootReducer);

export default store;
