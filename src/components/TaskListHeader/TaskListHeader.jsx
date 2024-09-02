import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalTasksCount } from "@/state/tasks/selectors.tasks";
import { addTask, toggleAllTasks } from "@/state/tasks/actions.tasks";
import IconBtn from "@/components/commons/IconBtn/IconBtn";
import AddTaskIcon from "@/assets/plus-circle.svg";
import ToggleAllIcon from "@/assets/checklist.svg";
import s from "./TaskListHeader.module.scss";

function TaskListHeader() {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const tasksCount = useSelector(selectTotalTasksCount);

  function handleTextInput(e) {
    setTaskText(e.target.value);
  }

  function handleAddTask() {
    const text = taskText.trim();

    if (text) {
      dispatch(addTask(text));
    }

    setTaskText("");
  }

  function handleToggleAll() {
    dispatch(toggleAllTasks());
  }

  return (
    <div className={`textNormal ${s.container}`}>
      {!!tasksCount && (
        <IconBtn title="Toggle all" onClick={handleToggleAll}>
          <ToggleAllIcon />
        </IconBtn>
      )}
      <input
        autoFocus
        value={taskText}
        onChange={handleTextInput}
        className={`input ${s.inputTaskText}`}
        placeholder="What needs to be done?"
        onBlur={handleAddTask}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <IconBtn
        classes={[`${!taskText && "btnHidden"}`]}
        title="Add task"
        onClick={handleAddTask}
      >
        <AddTaskIcon />
      </IconBtn>
    </div>
  );
}

export default TaskListHeader;
