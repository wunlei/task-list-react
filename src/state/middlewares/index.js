import { localStorageKey } from "@/constants";

const localStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const tasksString = JSON.stringify(storeAPI.getState().tasks.tasks);
  localStorage.setItem(localStorageKey, tasksString);

  return result;
};

export const middleware = [localStorageMiddleware];
