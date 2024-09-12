import { applyMiddleware } from "redux";
import { localStorageKey } from "@/constants";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";

const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const tasksString = JSON.stringify(storeAPI.getState().tasks.tasks);
  localStorage.setItem(localStorageKey, tasksString);

  return result;
};

export const middleware = composeWithDevToolsDevelopmentOnly(
  applyMiddleware(localStorageMiddleware),
);
