import { combineReducers, legacy_createStore as createStore } from "redux";
import tasksReducer from "./tasks/reducer.tasks";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const store = createStore(rootReducer);

export default store;
