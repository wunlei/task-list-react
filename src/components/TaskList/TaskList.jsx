import { selectTasksIds } from "@/state/tasks/selectors.tasks";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import s from "./TaskList.module.scss";

function TaskList() {
  const tasksIds = useSelector(selectTasksIds);

  return (
    <div className={`textNormal ${s.container}`}>
      <ul className={s.list}>
        {tasksIds.map((id) => (
          <TaskItem key={id} id={id} />
        ))}
        {tasksIds.length === 0 && <div className={s.hint}>No tasks</div>}
      </ul>
    </div>
  );
}

export default TaskList;
