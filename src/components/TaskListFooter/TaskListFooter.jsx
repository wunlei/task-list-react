import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "@/state/filters/actions.filters";
import { selectCurrFilter } from "@/state/filters/selectors.filters";
import { deleteCompletedTasks } from "@/state/tasks/actions.tasks";
import {
  selectUndoneTasksCount,
  selectHasCompletedTasks,
} from "@/state/tasks/selectors.tasks";
import { FILTERS } from "@/constants";
import s from "./TaskListFooter.module.scss";

function TaskListFooter() {
  const dispatch = useDispatch();
  const undoneCount = useSelector(selectUndoneTasksCount);
  const currentFilter = useSelector(selectCurrFilter);
  const hasCompleted = useSelector(selectHasCompletedTasks);

  function handleChangeFilter(filter) {
    dispatch(changeFilter(filter));
  }

  function handleClearCompleted() {
    dispatch(deleteCompletedTasks());
  }

  return (
    <div className={`${s.container} textNormal`}>
      <span>Tasks left: {undoneCount}</span>
      <div>
        {Object.values(FILTERS).map((filter) => (
          <button
            className={`${s.tab} ${
              currentFilter === filter ? s.tabActive : ""
            }`}
            key={filter}
            onClick={() => handleChangeFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <button
        className={`${s.btnClearCompleted} ${hasCompleted ? "" : s.btnHidden}`}
        onClick={handleClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

export default TaskListFooter;
