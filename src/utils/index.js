export function newTaskId(tasks) {
  const maxId = tasks.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
